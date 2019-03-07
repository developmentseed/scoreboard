const db = require('../db/connection')
const exclusionList = require('./exclusion-list.js')

// list of all US states
const usStateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

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
    .innerJoin(exclusionList.includedUsers().as('users'), 'user_id', 'users.id')
    .count('users.osm_id')
    .where('country_name', 'ilike', country_name)
}

function getTotalEdits (country_name) {
  return db('user_country_edits')
    .innerJoin(exclusionList.includedUsers().as('users'), 'user_id', 'users.id')
    .sum('user_country_edits.edit_count as editCount')
    .where('country_name', 'ilike', country_name).debug()
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
      .innerJoin(exclusionList.includedUsers().as('users'), 'user_id', 'users.id')
      .select('users.osm_id', 'user_country_edits.edit_count as count', 'users.full_name')
      .where('country_name', 'ilike', country_name).orderBy('count', 'desc')
  } else {
    return db('user_country_edits')
      .innerJoin(exclusionList.includedUsers().as('users'), 'user_id', 'users.id')
      .select('users.osm_id', 'user_country_edits.edit_count as count', 'users.full_name')
      .where('country_name', 'ilike', country_name).orderBy('count', 'desc').limit(limitNum)
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
  isState,
  updateUserCountryEdit,
  getTotalEdits
}
