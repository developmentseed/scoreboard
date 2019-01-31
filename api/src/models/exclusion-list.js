const db = require('../db/connection')

/**
 * get exclusion list
 *
 * @returns {Promise<string>} a response
 */
function list () {
  return db('exclusion_list').select('user_id')
}

/**
 * get exclusion list with usernames
 *
 */
function listOSMIds () {
  return db('exclusion_list').select(['user_id', 'full_name', 'osm_id'])
    .join(db('users').select(['id', 'full_name', 'osm_id']).as('users'),
      'users.id', 'exclusion_list.user_id')
}

/**
 * add to exclusion list
 *
 * @param {int} name - user ID
 * @returns {Promise} a response
 */
async function add (user_id) {
  const list = await db('exclusion_list').where('user_id', user_id)
  if (list.length === 0) {
    return db('exclusion_list').insert({ user_id })
  }
}
/**
 * add to exclusion list using osm id
 * @param {int} osm_id
 * @returns {Promise} a response
 */
async function addOSMId (osm_id) {
  const [{ id }] = await db('users').where('osm_id', osm_id).returning('id')
  return add(id)
}

/**
 * remove from exclusion list
 *
 * @param {int} name - user ID
 * @returns {Promise} a response
 */
function remove (user_id) {
  return db('exclusion_list').where('user_id', user_id).del()
}

/**
 * remove from exclusion list using osm id
 *
 * @param {int} osm_id
 */
async function removeOSMId (osm_id) {
  const [{ id }] = await db('users').where('osm_id', osm_id).returning('id')
  return remove(id)
}

/**
 * Update the exclusion list
 * @param {Array[int]} newlist - new exclusion list
 */
function update (newlist) {
  return db.transaction(async trx => {
    await trx('exclusion_list').truncate()
    return trx('exclusion_list')
      .insert(newlist.map(id => ({ 'user_id': id })))
      .returning('user_id')
  })
}

/**
 * Update the exclusion list using osm ids
 *
 * @param {Array[int]} osm_ids
 */
async function updateOSMIds (osm_ids) {
  const users = await db('users').whereIn('osm_id', osm_ids).returning('id')
  const ids = users.map(u => u.id)
  return update(ids)
}

module.exports = {
  list,
  add,
  remove,
  update,
  listOSMIds,
  addOSMId,
  removeOSMId,
  updateOSMIds
}
