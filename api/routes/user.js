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
    const osmesaResponse = await osmesa.getUser(id)
    const [{ country }] = await connection('users').where('osm_id', id).select('country')
    const json = JSON.parse(osmesaResponse)
    json.extent_uri = `${API_URL}/scoreboard/api/extents/${json.extent_uri}`
    return res.send({ id, records: json, country })
  }
  catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve user stats')
  }
}
