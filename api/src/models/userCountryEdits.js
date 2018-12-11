const db = require('../db/connection')
const util = require('util')

// list of all US states
const usStateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

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
 * Get all users mapping in that country
 *
 * @param {string} country_name - name of the country
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

/**
 * Checks whether a given name is a US state
 * @param {string} name - given name
 *
 * @returns {boolean} true indicates it is a state
 */
function isState (name) {
  if (usStateNames.indexOf(name) > -1) {
    return true
  }
  return false
}

// Use upsert here https://jaketrent.com/post/upsert-knexjs/
function updateUserCountryEdit (user_id, country_name, edit_count) {
  const insert = db('user_country_edits').insert({
    user_id,
    country_name,
    edit_count
  }).toString()
  const update = db('user_country_edits')
    .update({ edit_count })
    .whereRaw(`user_country_edits.user_id= ${user_id} AND user_country_edits.country_name='${country_name}'`)
  const query = util.format(
    '%s ON CONFLICT (user_id, country_name) DO UPDATE SET %s',
    insert.toString(),
    update.toString().replace(/^update\s.*\sset\s/i, '')
  )
  return db.raw(query)
}

module.exports = {
  get,
  getParticipants,
  update,
  updateUserCountryEdit,
  isState
}
