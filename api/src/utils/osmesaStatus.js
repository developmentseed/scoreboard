const osmesa = require('../services/osmesa')
const db = require('../db/connection')
const { getTime } = require('date-fns')

const categoryToOsmStats = {
  country: 'country_statistics',
  campaign: 'hashtag_user_statistics',
  campaigns: 'hashtag_statistics',
  user: 'user_statistics',
  users: 'user_statistics',
  team: 'user_statistics',
  teams: 'user_statistics'
}

/**
 * Fetch datetimes from osmesa showing the last refresh time of countries, hashtags, users, etc.
 * Handles edge cases where some pages depend on the users timer process, or task manager timer process.
 *
 * @param {string} category (user|users|country|team|teams|campaign|campaigns)
 * @returns {Promise<{country_statistics: number, hashtag_statistics: number, user_statistics: number, hashtag_user_statistics: number}|Number>}
 * @throws {Error} Throws error if osmesa does not have matching property for the category parameter.
 */
async function getOsmesaStatus (category) {
  try {
    const refreshStats = await osmesa.getUpdates()
    if (typeof category === 'undefined') {
      return refreshStats
    } else {
      const key = categoryToOsmStats[category]
      let lastUpdate = refreshStats[key]
      if (!lastUpdate) {
        throw new Error(`failed to get refreshed stats from osmesa for ${key}`)
      }
      // The individual User page pulls data straight from OSMESA, so that status is comprehensive
      // The following pages rely on both OSMESA and the Scoreboard database clocks:
      // Country, Users, Campaign(s) and Teams
      if (['country', 'users', 'team'].includes(category)) {
        // Country and users pages rely on the users clock
        const [{ last_update }] = await db('user_update').select('last_update').where('id', 1)
        const userUpdate = getTime(last_update)
        return Math.min(lastUpdate, userUpdate)
      } else if (['campaign', 'campaigns'].includes(category)) {
        // Campaign(s) pages rely on the TM clock
        const [{ last_update: lastTMUpdate }] = await db('taskers').select('last_update')
        const campaignUpdate = getTime(lastTMUpdate)
        // Only take into account the OSMESA status if this is the individual campaign page
        if (category === 'campaign') return Math.min(lastUpdate, campaignUpdate)
        return campaignUpdate
      } else {
        return lastUpdate
      }
    }
  } catch (err) {
    console.error(err)
  }
}
module.exports = getOsmesaStatus
