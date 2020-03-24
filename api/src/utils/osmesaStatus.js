const osmesa = require('../services/osmesa')
const db = require('../db/connection')
const { getTime } = require('date-fns')

/**
 * Fetch datetimes from osmesa showing the last refresh time of countries, hashtags, users, etc.
 * Handlesedge cases where some pages depend on the users timer process, or task manager timer process.
 *
 * @param category user|users|country|team|teams|campaign|campaigns
 * @returns {Promise<{country_statistics: number, hashtag_statistics: number, user_statistics: number, hashtag_user_statistics: number}|Number>}
 */
async function getOsmesaStatus (category) {
  try {
    const refreshStats = await osmesa.getUpdates()
    if (typeof category === 'undefined') {
      return refreshStats
    }
    // The individual User page pulls data straight from OSMESA, so that status is comprehensive
    // The following pages rely on both OSMESA and the Scoreboard database clocks:
    // Country, Users, and Campaign(s)
    switch (category) {
      case 'user':
      case 'users':
      case 'country':
      case 'team':
      case 'teams':
        // Team, Country and Users pages rely on the users clock
        const [ { last_update: lastUserUpdate } ] = await db('user_update').select('last_update').where('id', 1)
        const userUpdate = getTime(lastUserUpdate)
        return Math.min(status, userUpdate)
      case 'campaign':
      case 'campaigns':
        // Campaign(s) pages rely on the TM clock
        const [ { last_update: lastTMUpdate } ] = await db('taskers').select('last_update')
        const campaignUpdate = getTime(lastTMUpdate)
        // Only take into account the OSMESA status if this is the individual campaign page
        if (category === 'campaign') return Math.min(status, campaignUpdate)
        return campaignUpdate
      default:
        return refreshStats
    }
  } catch (err) {
    console.error(err)
  }
}
module.exports = getOsmesaStatus
