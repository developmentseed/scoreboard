const db = require('../db/connection')
/**
 * All Campaigns Route
 * /campaigns
 *
 * The campaign route displays all the tasks from
 * the tasking manager
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
module.exports = async (req, res) => {
  const page = req.query.page || 1
  const search = req.query.q || ''
  const complMin = req.query.compl_min || 0
  const complMax = req.query.compl_max || 100
  const validMin = req.query.valid_min || 0
  const validMax = req.query.valid_max || 100

  try {
    let query = db('campaigns').whereNotNull('campaign_hashtag')
    const [{ allCount }] = await query.clone().count('id as allCount')

    if (search.length > 0) {
      query = query.where('description', 'ilike', `%${search}%`)
        .orWhere('name', 'ilike', `%${search}%`)
    }
    if (complMin > 0 || complMax < 100) {
      query = query.whereRaw(`done between ${complMin} and ${complMax}`)
    }

    if (validMin > 0 || validMax < 100) {
      query = query.whereRaw(`validated between ${validMin} and ${validMax}`)
    }

    const records = await query.clone().limit(10).offset((parseInt(page) - 1) * 10)
    const [{ total }] = await query.clone().count('id as total')

    return res.send({ records, total, allCount })
  } catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve records')
  }
}
