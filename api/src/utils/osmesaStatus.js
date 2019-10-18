const osmesa = require('../services/osmesa')
const db = require('../db/connection')
const { getTime } = require('date-fns')

const categories = {
  country: `country_stats_refresh`,
  campaign: `hashtag_stats_refresh`,
  campaigns: `hashtag_stats_refresh`,
  user: `user_stats_refresh`,
  users: `user_stats_refresh`
}

async function getOsmesaStatus (category) {
  try {
    const refreshStats = await osmesa.getUpdates()
    if (typeof category === 'undefined') {
      return refreshStats
    } else {
      let status = refreshStats[categories[category]]
      // The individual User page pulls data straight from OSMESA, so that status is comprehensive
      // The following pages rely on both OSMESA and the Scoreboard database clocks:
      // Country, Users, and Campaign(s)
      if (category === 'country' || category === 'users') {
        // Country and users pages rely on the users clock
        const [ { last_update } ] = await db('user_update').select('last_update').where('id', 1)
        const userUpdate = getTime(last_update)
        status = Math.min(status, userUpdate)
      } else if (category === 'campaigns' || category === 'campaign') {
        // Campaign(s) pages rely on the TM clock
        const [ { last_update } ] = await db('taskers').select('last_update')
        const campaignUpdate = getTime(last_update)
        // Only take into account the OSMESA status if this is the individual campaign page
        if (category === 'campaign') status = Math.min(status, campaignUpdate)
        else status = campaignUpdate
      }
      return status
    }
  } catch (err) {
    console.error(err)
  }
}
module.exports = getOsmesaStatus
