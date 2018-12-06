const connection = require('../db/connection')
const util = require('util')
const db = connection()

/**
 * get a role
 *
 * @param {int} id - id of a role
 * @returns {Promise<string>} a response
 */
function get (id) {
  return db('user_country_edits').where('id', id)
}

function getParticipants (id) {
  return db('user_country_edits').select('user_id', 'edit_count').where('country_id', id) // Get all users mapping in that country
}

function update (id, data) {
  return get(id).update(data).returning('*')
}

// Use upsert here https://jaketrent.com/post/upsert-knexjs/
function updateUserCountryEdit (user_id, country_id, count) {
  const insert = db('user_country_edits').insert({
    'user_id': user_id, 'country_id': country_id, 'edit_count': count
  }).toString()
  const update = db('user_country_edits')
    .update({ 'edit_count': count })
    .whereRaw(`user_country_edits.user_id= ${user_id} AND user_country_edits.country_id=${country_id}`)
  const query = util.format(
    '%s ON CONFLICT (user_id, country_id) DO UPDATE SET %s',
    insert.toString(),
    update.toString().replace(/^update\s.*\sset\s/i, '')
  )
  return db.raw(query)
}

module.exports = {
  get,
  getParticipants,
  update,
  updateUserCountryEdit
}
