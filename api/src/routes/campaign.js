const osmesa = require('../services/osmesa')
const db = require('../db/connection')
const { TaskingManagerFactory } = require('../services/tm')
const { find, propEq } = require('ramda')
const refreshStatus = require('../utils/osmesaStatus.js')
const totalUsersEdits = require('../utils/sum_editCounts.js')

const { osmesaUserStatSchema, maprouletteUserStatSchema, maprouletteChallengeSchema } = require('../utils/campaignTableSchema.js')

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
  let tmAPI
  let tm

  try {
    const [tmData] = await db('campaigns').where({ tasker_id, tm_id });
    // Add tasking manager info
    [tm] = await db('taskers').where('id', tmData.tasker_id)
    tmAPI = TaskingManagerFactory.createInstance({ id: tm.id, type: tm.type, url: tm.url })
    tmData.url = tmAPI.getUrlForProject(tmData.tm_id)
    tmData.tm_name = tm.name
    let lastUpdate = tmData.updated_at
    const creationDate = tmData.created_at

    if (!lastUpdate) {
      lastUpdate = await tmAPI.getLastUpdated(tmData.tm_id)
    }

    const refreshDate = await refreshStatus('campaign')

    response['id'] = `${tasker_id}-${tm_id}`
    response['lastUpdate'] = lastUpdate
    response['creationDate'] = creationDate
    response['refreshDate'] = refreshDate
    response['meta'] = tmData
    response['tables'] = []
  } catch (err) {
    console.error(`Campaign ${tasker_id}-${tm_id}, Failed to create response`, err.message)
    res.boom.serverUnavailable('Error processing request')
  }

  // Load project stats
  try {
    const rawData = await tmAPI.getProjectStats(response.meta.tm_id)
    const [{ actions }] = JSON.parse(rawData)

    const stats = {
      data: [actions],
      success: true,
      statsType: 'maproulette-challenge',
      schema: maprouletteChallengeSchema
    }
    response.tables.push(stats)
  } catch (err) {
    if (err instanceof TypeError) {
    } else {
      console.log(`Unknown error occurred`, err.message)
    }
  }

  try {
    const stats = await tmAPI.getProjectUserStats(response.meta.tm_id)
    stats.statsType = 'maproulette'
    stats.schema = maprouletteUserStatSchema
    response.tables.push(stats)
  } catch (err) {
    if (err instanceof TypeError) {
    } else {
      console.log(`Unknown error occurred`, err.message)
    }
  }

  // Load osmesa stats
  try {
    await loadOsMesaStats(response)
  } catch (err) {
    if (err.statusCode && err.statusCode === 404) {
      // There are no stats yet
      console.error(`Campaign ${tasker_id}-${tm_id}, Failed to get stats from OSMesa`, err.message)
      response.tables.push({ success: false })
    } else {
      console.log(`OSMesa Stats do not exist for this hashtag`, err.message)
    }
  }

  return res.send(response)
}

async function loadOsMesaStats (response) {
  const osmesaResponse = await osmesa.getCampaign(response['meta'].campaign_hashtag)
  let stats = { success: true,
    statsType: 'osmesa',
    schema: osmesaUserStatSchema,
    data: osmesaResponse.users,
    ...osmesaResponse
  }
  delete stats.users
  const userIds = stats.data.map(user => user.uid)
  const userCountries = await db('users').select(['osm_id', 'country']).whereIn('osm_id', userIds)

  stats.data = stats.data.map(user => {
    const country = find(propEq('osm_id', user.uid))(userCountries).country
    return Object.assign({ country }, user)
  })

  stats.editCounts = totalUsersEdits(stats) || 0
  response.stats = stats

  response.tables.push(stats)
  return Promise.all([osmesaResponse, userCountries])
}
