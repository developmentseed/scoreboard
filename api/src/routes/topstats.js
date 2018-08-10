const {
  FILTERED_USERS
} = require('../config')
const { trim, split } = require('ramda')
const connection = require('../db/connection')

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
    const db = connection()
    const [{ total }] = await db('campaigns')
      .whereNotNull('campaign_hashtag').count('id as total')
    const records = await db('campaigns')
      .whereNotNull('campaign_hashtag')
      .orderBy('priority')
      .limit(4)

    const [{ feature }] = await db('features')
      .where('name', 'tm_campaigns').select('feature')
    const topEdits = await db('users')
      .whereNotIn('osm_id', filteredUsers)
      .select('display_name', 'country', 'edit_count')
      .orderBy('edit_count', 'desc')
      .limit(10)

    const [{ numUsers }] = await db('users').count('id as num_users')
    const editsByCountry = await db('users')
      .whereNotIn('osm_id', filteredUsers)
      .groupBy('country').select('country')
      .sum('edit_count as edit_count')

    return res.send({
      total,
      records,
      numUsers,
      editsByCountry,
      topEdits,
      features: feature
    })
  }
  catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve records')
  }
}
