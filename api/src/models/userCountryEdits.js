const db = require('../db/connection')
const util = require('util')

/**
 * get a role
 *
 * @param {int} id - id of a role
 * @returns {Promise<string>} a response
 */
function get (id) {
  return db('user_country_edits').where('id', id)
}

/**
 * Get number of users mapping in that country
 *
 * @param {string} country_name - name of the country
 * @returns {Promise} a response
 */
function getNumberOfParticipants (country_name) {
  return db('user_country_edits')
    .leftJoin('users', 'user_id', 'users.id')
    .count('users.osm_id')
    .where('country_name', 'ilike', country_name)
}

/**
 * Get all users mapping in that country
 *
 * @param {string} country_name - name of the country
 *  * @param {integer} limitNum - optional argument to limit number of results
 * @returns {Promise} a response
 */
function getParticipants (country_name, limitNum) {
  if (typeof limitNum === 'undefined') {
    return db('user_country_edits')
      .leftJoin('users', 'user_id', 'users.id')
      .select('users.osm_id', 'user_country_edits.edit_count as count', 'users.full_name')
      .where('country_name', 'ilike', country_name)
  } else {
    return db('user_country_edits')
      .leftJoin('users', 'user_id', 'users.id')
      .select('users.osm_id', 'user_country_edits.edit_count as count', 'users.full_name')
      .where('country_name', 'ilike', country_name).limit(limitNum)
  }
}

function update (id, data) {
  return get(id).update(data).returning('*')
}

function updateUserCountryEdit (user_id, country_name, edit_count) {
  return db.transaction(async conn => {
    const records = await conn('user_country_edits').where({ user_id, country_name })
    if (records.length === 0) {
      await conn('user_country_edits').insert({
        user_id, country_name, edit_count
      })
    } else {
      await conn('user_country_edits').where({ user_id, country_name }).update({ edit_count })
    }
  })
}

module.exports = {
  get,
  getNumberOfParticipants,
  getParticipants,
  update,
  updateUserCountryEdit
}
