const join = require('url-join')
const getBadgeProgress = require('../badge_logic')
const {
  APP_URL_FINAL
} = require('../config')
const users = require('../models/users')
const roles = require('../models/roles')
const { hasToken } = require('../models/teams-access-tokens')
const OSMTeams = require('../services/teams')
const osmesa = require('../services/osmesa')
const { canEditUser } = require('../passport')
const db = require('../db/connection')
const getCountriesEdited = require('../utils/getCountriesEdited')
const refreshStatus = require('../utils/osmesaStatus.js')

/**
 * User Stats Route
 * /user/:id
 *
 * The user stats route will display the OSM stats for a user with id :id. The
 * API will get the stats from OSMESA_API/users/{id}
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function get (req, res) {
  const { id } = req.params
  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  let user
  try {
    [user] = await users.findByOsmId(id)
    if (!user) {
      return res.boom.notFound(`User with id ${id} not found`)
    }
  } catch (err) {
    console.log(err)
    return res.boom.notFound(`User with id ${id} not found`)
  }

  const uid = user.id
  const rolesList = user.roles ? await roles.getRoles(user.roles) : []
  const activatedTeams = await hasToken(id)

  // handle the case where osm user doesn't exist on osmesa
  let osmesaData
  try {
    const osmesaResponse = await osmesa.getUser(id)
    osmesaData = JSON.parse(osmesaResponse)
  } catch (err) {
    console.error(err.message)

    osmesaData = {
      changeset_count: 0,
      country_changesets: {},
      country_edits: {},
      counts: {
        buildings_added: 0,
        buildings_deleted: 0,
        buildings_modified: 0,
        coastlines_added: 0,
        coastlines_deleted: 0,
        coastlines_modified: 0,
        other_added: 0,
        other_deleted: 0,
        other_modified: 0,
        pois_added: 0,
        pois_deleted: 0,
        pois_modified: 0,
        raillines_added: 0,
        raillines_deleted: 0,
        raillines_modified: 0,
        roads_added: 0,
        roads_deleted: 0,
        roads_modified: 0,
        waterways_added: 0,
        waterways_deleted: 0,
        waterways_modified: 0
      },
      day_edits: {},
      day_changesets: {},
      edit_count: 0,
      editor_changesets: {},
      editor_edits: {},
      hashtag_changesets: {},
      hashtag_edits: {},
      last_edit: null,
      measurements: {
        coastline_km_added: 0,
        coastline_km_deleted: 0,
        coastline_km_modified: 0,
        railline_km_added: 0,
        railline_km_deleted: 0,
        railline_km_modified: 0,
        road_km_added: 0,
        road_km_deleted: 0,
        road_km_modified: 0,
        waterway_km_added: 0,
        waterway_km_deleted: 0,
        waterway_km_modified: 0
      },
      name: user.full_name,
      uid: parseInt(id, 10),
      updated_at: null
    }
  }

  if (osmesaData.extent_uri) {
    osmesaData.extent_uri = join(APP_URL_FINAL, '/scoreboard/api/extents/', osmesaData.extent_uri)
  }

  const refreshDate = await refreshStatus('user')

  let countriesEdited = getCountriesEdited(osmesaData.country_edits)

  let badges
  try {
    const badgesFromDB = await db('badges').select() // array of all badges
    badges = getBadgeProgress(osmesaData, badgesFromDB)
  } catch (err) {
    console.error(err)
    badges = {
      all: [],
      earnedBadges: {},
      unearnedBadges: {}
    }
  }

  // Find all teams for this user
  let teams
  try {
    const t = new OSMTeams(user.osm_id)
    teams = JSON.parse(await t.getTeams(user.osm_id))
  } catch (err) {
    console.error(err)
  }

  let assignments = []
  try {
    if (teams && teams.length > 0) {
      assignments = await db('team_assignments').whereIn('team_id', teams.map(t => t.id))
        .join('campaigns', 'campaigns.id', '=', 'team_assignments.campaign_id')
        .select('campaign_id', 'team_id', 'team_priority', 'campaigns.name', 'campaigns.campaign_hashtag', 'campaigns.priority', 'campaigns.tasker_id', 'campaigns.tm_id')

      // Map names
      assignments = assignments.map(assignment => {
        teams.forEach(team => {
          if (assignment.team_id === team.id) {
            assignment.team_name = team.name
          }
        })
        return assignment
      })
    }
  } catch (err) {
    console.error(err)
  }

  // Find all favorite campaigns for this user
  let favorites
  try {
    favorites = await db('favorite_campaigns')
      .join('campaigns', 'campaigns.id', '=', 'favorite_campaigns.campaign_id')
      .select('favorite_campaigns.id', 'campaign_id', 'campaigns.name', 'campaigns.campaign_hashtag', 'campaigns.priority', 'campaigns.tasker_id', 'campaigns.tm_id')
  } catch (err) {
    console.error(err)
  }

  let allCampaigns = await db('campaigns').whereIn('campaign_hashtag', Object.keys(osmesaData.hashtag_edits))

  return res.send({
    id,
    uid,
    badges,
    teams,
    assignments,
    favorites,
    refreshDate,
    allCampaigns,
    records: osmesaData,
    roles: rolesList,
    activatedTeams,
    countriesEdited,
    country: user.country
  })
}

/**
 * User update route
 * /user/:id
 *
 * update user data
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function put (req, res) {
  const { id } = req.params
  const { body } = req

  if (!canEditUser(req, id)) {
    return res.boom.unauthorized()
  }

  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    const [user] = await users.findByOsmId(id)
    const [updatedUser] = await users.update(user.id, body)
    return res.send(updatedUser)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not update user')
  }
}

module.exports = {
  get,
  put
}
