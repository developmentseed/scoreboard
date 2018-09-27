const getBadgeProgress = require('../badge_logic')
const {
  API_URL
} = require('../config')
const Users = require('../models/users')
const osmesa = require('../services/osmesa')
const { canEditUser } = require('../passport')
const connection = require('../db/connection')

const users = new Users()


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
async function get(req, res) {
  const { id } = req.params
  if (!id) {
    return res.boom.badRequest('Invalid id')
  }
  try {
    const db = connection()
    const osmesaResponse = await osmesa.getUser(id)
    const [{ country }] = await users.findByOsmId(id).select('country')
    const json = JSON.parse(osmesaResponse)

    const badgesFromDB = await db('badges').select() // array of all badges
    const badges = getBadgeProgress(json, badgesFromDB)

    json.extent_uri = `${API_URL}/scoreboard/api/extents/${json.extent_uri}`
    return res.send({
      id, records: json, country, badges
    })
  }
  catch (err) {
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
async function put(req, res) {
  const { id } = req.params
  const { body } = req

  if (!canEditUser(req, id)) {
    return res.boom.unauthorized()
  }

  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    const [user] = await users.update(id, body)
    return res.send(user)
  }
  catch (err) {
    return res.boom.badRequest('Could not update user')
  }
}

module.exports = {
  get,
  put
}
