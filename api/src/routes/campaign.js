const osmesa = require('../services/osmesa')
const db = require('../db/connection')

/**
 * Campaign Stats Route
 * /campaigns/:id
 *
 * The campaign route displays a tasking manager project's stats
 * by joining TM2-API results with OSMESA
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
    const osmesaResponse = await osmesa.getCampaign(id)
    const [tmData] = await db('campaigns').where('campaign_hashtag', id)
    const records = Object.assign(
      { tmData: tmData },
      JSON.parse(osmesaResponse)
    )
    return res.send({ id, records })
  } catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve campaign stats')
  }
}
