const osmesa = require('../services/osmesa')
const db = require('../db/connection')
const { TM } = require('../services/tm')
const refreshStatus = require('../utils/osmesaStatus.js')

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
  const { tasker_id, tm_id } = req.params
  if (!tm_id || !tasker_id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    const [tmData] = await db('campaigns').where({ tasker_id, tm_id })
    const osmesaResponse = await osmesa.getCampaign(tmData.campaign_hashtag)

    // Add tasking manager info
    const [tm] = await db('taskers').where('id', tmData.tasker_id)
    const T = new TM(tm.id, tm.type, tm.url)
    tmData.url = T.getUrlForProject(tmData.tm_id)
    tmData.tm_name = tm.name
    let lastUpdate = tmData.updated_at
    if (!lastUpdate) {
      lastUpdate = await T.getLastUpdated(tmData.tm_id)
    }
    const creationDate = tmData.created_at

    const records = Object.assign(
      { tmData: tmData },
      JSON.parse(osmesaResponse)
    )

    const refreshDate = await refreshStatus('campaign')

    return res.send({ records, id: `${tasker_id}-${tm_id}`, lastUpdate, creationDate, refreshDate })
  } catch (err) {
    console.error(err.message)
    return res.boom.notFound('Could not retrieve campaign stats')
  }
}
