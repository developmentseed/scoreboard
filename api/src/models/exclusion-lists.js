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
 * add to exclusion list
 *
 * @param {string} name - user ID
 * @returns {Promise} a response
 */
async function add (user_id) {
  const list = await db('exclusion_list').where('user_id', user_id)
  if (list.length === 0) {
    return db('exclusion_list').insert({ user_id })
  }
}

/**
 * remove from exclusion list
 *
 * @param {string} name - user ID
 * @returns {Promise} a response
 */
function remove (user_id) {
  return db('exclusion_list').where('user_id', user_id).del()
}

module.exports = {
  list,
  add,
  remove
}
