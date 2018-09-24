const getBadgeProgress = require('../badge_logic')
const {
  API_URL
} = require('../config')
const osmesa = require('../services/osmesa')
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
module.exports = async (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.boom.badRequest('Invalid id')
  }
  try {
    const db = connection()
    const osmesaResponse = await osmesa.getUser(id)
    const [{ country }] = await db('users').where('osm_id', id).select('country')
    const json = JSON.parse(osmesaResponse)

    const allBadges = await db('badges').select() // array of all badges
    // calculate badges
    const badges = getBadgeProgress(json, allBadges)

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
