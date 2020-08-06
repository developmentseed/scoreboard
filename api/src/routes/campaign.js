const osmesa = require('../services/osmesa')
const db = require('../db/connection')
const { TaskingManagerFactory } = require('../services/tm')
const { find, propEq } = require('ramda')
const refreshStatus = require('../utils/osmesaStatus.js')
const totalUsersEdits = require('../utils/sum_editCounts.js')

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

  let response = {}

  try {
    const [tmData] = await db('campaigns').where({ tasker_id, tm_id })

    // Add tasking manager info
    const [tm] = await db('taskers').where('id', tmData.tasker_id)
    const T = TaskingManagerFactory.createInstance({ id: tm.id, type: tm.type, url: tm.url })
    tmData.url = T.getUrlForProject(tmData.tm_id)
    tmData.tm_name = tm.name
    let lastUpdate = tmData.updated_at
    const creationDate = tmData.created_at

    if (!lastUpdate) {
      lastUpdate = await T.getLastUpdated(tmData.tm_id)
    }

    const refreshDate = await refreshStatus('campaign')

    response['id'] = `${tasker_id}-${tm_id}`
    response['lastUpdate'] = lastUpdate
    response['creationDate'] = creationDate
    response['refreshDate'] = refreshDate
    response['meta'] = tmData
  } catch (err) {
    console.error(`Campaign ${tasker_id}-${tm_id}, Failed to create response`, err.message)
    res.boom.serverUnavailable('Error processing request')
  }

  try {
    const osmesaResponse = await osmesa.getCampaign(response['meta'].campaign_hashtag)
    let stats = Object.assign(osmesaResponse,
      { success: true })
    const userIds = stats.users.map(user => user.uid)
    const userCountries = await db('users').select(['osm_id', 'country']).whereIn('osm_id', userIds)

    stats.users = stats.users.map(user => {
      const country = find(propEq('osm_id', user.uid))(userCountries).country
      return Object.assign({ country }, user)
    })

    stats.editCounts = totalUsersEdits(stats) || 0

    response['stats'] = stats
  } catch (err) {
    console.error(`Campaign ${tasker_id}-${tm_id}, Failed to get stats from OSMesa`, err.message)
    if (err.statusCode && err.statusCode === 404) {
      // There are no stats yet
      response['stats'] = Object.assign(
        { success: true })
    } else {
      response['stats'] = Object.assign(
        { success: false })
    }
  }
  return res.send(response)
}
