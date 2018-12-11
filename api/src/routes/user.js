const join = require('url-join')
const getBadgeProgress = require('../badge_logic')
const {
  APP_URL_FINAL
} = require('../config')
const users = require('../models/users')
const roles = require('../models/roles')
const OSMTeams = require('../services/teams')
const osmesa = require('../services/osmesa')
const { canEditUser } = require('../passport')
const db = require('../db/connection')

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
  try {
    const [user] = await users.findByOsmId(id)
    const uid = user.id
    const rolesList = user.roles ? await roles.getRoles(user.roles) : []

    // handle the case where osm user doesn't exist on osmesa
    try {
      const osmesaResponse = await osmesa.getUser(id)
      const json = JSON.parse(osmesaResponse)

      const badgesFromDB = await db('badges').select() // array of all badges
      const badges = getBadgeProgress(json, badgesFromDB)

      json.extent_uri = join(APP_URL_FINAL, '/scoreboard/api/extents/', json.extent_uri)

      // Find all teams for this user
      const teams = JSON.parse(await OSMTeams.getTeams(user.osm_id))
      let assignments = []
      if (teams && teams.length > 0) {
        assignments = await db('team_assignments').whereIn('team_id', teams.map(t => t.id))
          .join('campaigns', 'campaigns.id', '=', 'team_assignments.campaign_id')
          .select('campaign_id', 'team_id', 'campaigns.name', 'campaigns.campaign_hashtag', 'campaigns.priority')
      }
      // Map names
      assignments = assignments.map(assignment => {
        teams.forEach(team => {
          if (assignment.team_id === team.id) {
            assignment.team_name = team.name
          }
        })
        return assignment
      })

      // Find all favorite campaigns for this user
      const favorites = await db('favorite_campaigns')
        .join('campaigns', 'campaigns.id', '=', 'favorite_campaigns.campaign_id')
        .select('campaign_id', 'campaigns.name', 'campaigns.campaign_hashtag', 'campaigns.priority')

      return res.send({
        id,
        uid,
        badges,
        teams,
        assignments,
        favorites,
        records: json,
        roles: rolesList,
        country: user.country
      })
    } catch (e) {
      if (e.message && e.message.includes('Unable to retrieve user record at')) {
        return res.send({
          id,
          badges: null,
          favorites: null,
          records: {
            uid: parseInt(id, 10),
            name: user.full_name,
            edit_count: 0,
            buildings_add: 0,
            buildings_mod: 0,
            roads_add: 0,
            km_roads_add: 0,
            roads_mod: 0,
            km_roads_mod: 0,
            waterways_add: 0,
            km_waterways_add: 0,
            poi_add: 0,
            changeset_count: 0,
            editors: [],
            edit_times: [],
            country_list: [],
            hashtags: []
          },
          roles: rolesList,
          country: user.country
        })
      }
      throw e
    }
  } catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve user stats')
  }
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
