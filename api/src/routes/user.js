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
const getSumEdits = require('../utils/sum_edits')
const { prop } = require('ramda')

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
      uid: parseInt(id, 10),
      name: user.full_name,
      edit_count: 0,
      buildings_add: 0,
      buildings_mod: 0,
      buildings_del: 0,
      roads_add: 0,
      km_roads_add: 0,
      roads_mod: 0,
      km_roads_mod: 0,
      roads_del: 0,
      km_roads_del: 0,
      railways_add: 0,
      km_railways_add: 0,
      railways_mod: 0,
      km_railways_mod: 0,
      railways_del: 0,
      km_railways_del: 0,
      waterways_add: 0,
      km_waterways_add: 0,
      waterways_mod: 0,
      km_waterways_mod: 0,
      waterways_del: 0,
      km_waterways_del: 0,
      coastlines_add: 0,
      coastlines_mod: 0,
      coastlines_del: 0,
      km_coastlines_add: 0,
      km_coastlines_mod: 0,
      km_coastlines_del: 0,
      poi_add: 0,
      poi_mod: 0,
      poi_del: 0,
      changeset_count: 0,
      editors: [],
      edit_times: [],
      country_list: [],
      hashtags: []
    }
  }

  if (osmesaData.extent_uri) {
    osmesaData.extent_uri = join(APP_URL_FINAL, '/scoreboard/api/extents/', osmesaData.extent_uri)
  }
  osmesaData['edit_sum'] = getSumEdits(osmesaData)
  const refreshDate = await refreshStatus('user')

  let countriesEdited = getCountriesEdited(osmesaData.country_list)

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

  let allCampaigns = await db('campaigns').whereIn('campaign_hashtag', osmesaData.hashtags.map(prop('tag')))

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
