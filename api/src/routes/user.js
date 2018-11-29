const getBadgeProgress = require('../badge_logic')
const {
  APP_URL
} = require('../config')
const users = require('../models/users')
const roles = require('../models/roles')
const osmesa = require('../services/osmesa')
const { canEditUser } = require('../passport')
const connection = require('../db/connection')

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
    const db = connection()
    const [user] = await users.findByOsmId(id)
    const rolesList = user.roles ? await roles.getRoles(user.roles) : []

    // handle the case where osm user doesn't exist on osmesa
    try {
      const osmesaResponse = await osmesa.getUser(id)
      const json = JSON.parse(osmesaResponse)

      const badgesFromDB = await db('badges').select() // array of all badges
      const badges = getBadgeProgress(json, badgesFromDB)

      json.extent_uri = `${APP_URL}/scoreboard/api/extents/${json.extent_uri}`

      return res.send({
        id,
        badges,
        records: json,
        country: user.country
      })
    } catch (e) {
      if (e.message && e.message.includes('Unable to retrieve user record at')) {
        return res.send({
          id,
          badges: null,
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
    console.log(err)
    return res.boom.badRequest('Could not update user')
  }
}

module.exports = {
  get,
  put
}
