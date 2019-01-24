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
  const tm = req.query.tm || ''
  const complMin = req.query.compl_min || 0
  const complMax = req.query.compl_max || 100
  const validMin = req.query.valid_min || 0
  const validMax = req.query.valid_max || 100

  try {
    let query = db('campaigns').whereNotNull('campaign_hashtag').join(
      db('taskers').select('name as tm_name', 'id as tasker_t_id', 'type').as('t'),
      'tasker_id', 't.tasker_t_id')

    const [{ allCount }] = await query.clone().count('id as allCount')

    if (search.length > 0) {
      query = query.where('description', 'ilike', `%${search}%`)
        .orWhere('name', 'ilike', `%${search}%`)
        .orWhere(db.raw('tm_id::varchar(255)'), 'ilike', `%${search}%`)
    }

    if (tm.length > 0) {
      const tms = tm.split(',')
      query = query.whereIn('tasker_id', tms)
    }

    if (complMin > 0 || complMax < 100) {
      query = query.whereRaw(`done between ${complMin} and ${complMax}`)
    }

    if (validMin > 0 || validMax < 100) {
      query = query.whereRaw(`validated between ${validMin} and ${validMax}`)
    }

    const records = await query.clone().limit(10).offset((parseInt(page) - 1) * 10)
    const [{ total }] = await query.clone().count('id as total')
    const tms = await db('taskers').select('id', 'name')

    return res.send({ records, total, allCount, tms })
  } catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve records')
  }
}
