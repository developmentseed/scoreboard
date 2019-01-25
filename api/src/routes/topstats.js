const {
  FILTERED_USERS
} = require('../config')
const { trim, split } = require('ramda')
const db = require('../db/connection')

/**
 * Top level stats
 * /topstats
 *
 * The campaign route displays all the tasks from
 * the tasking manager
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
module.exports = async (req, res) => {
  const filteredUsers = split(',', FILTERED_USERS).map(trim)

  try {
    const [{ numCampaigns }] = await db('campaigns')
      .whereNotNull('campaign_hashtag').count('id as numCampaigns')

    const [{ numCountries }] = await db('user_country_edits').countDistinct('country_name as numCountries')

    const priorityCampaigns = await db('campaigns')
      .whereNotNull('campaign_hashtag')
      .orderBy('priority')
      .limit(4)

    let feature = {
      properties: {},
      features: []
    }
    const features = await db('features')
      .where('name', 'tm_campaigns').select('feature')

    if (features.length > 0) {
      feature = features[0].feature
    }

    const topEdits = await db('users')
      .whereNotIn('osm_id', filteredUsers)
      .select('full_name', 'country', 'edit_count')
      .orderBy('edit_count', 'desc')
      .limit(10)

    const [{ totalEdits }] = await db('users').sum('edit_count as totalEdits')

    const [{ numUsers }] = await db('users').count('id as numUsers')
    const editsByCountry = await db('user_country_edits')
      .select('country_name', db.sum('edit_count').as('edits'))
      .groupBy('country_name')
      .orderBy('edits', 'desc')
      .limit(5)

    return res.send({
      numCampaigns,
      priorityCampaigns,
      numCountries,
      totalEdits,
      numUsers,
      editsByCountry,
      topEdits,
      features: feature
    })
  } catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve stats')
  }
}
