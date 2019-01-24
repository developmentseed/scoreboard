const db = require('../db/connection')

/**
 * get a tasker
 *
 * @param {int} id - id of a tasker
 * @returns {Promise<string>} a response
 */
function get (id) {
  return db('taskers').where('id', id)
}

/**
 * find a role by name
 *
 * @param {string} name - role name
 * @returns {Promise} a response
 */
function findByName (name) {
  return db('taskers').where('name', name)
}

/**
 * get list of taskers
 *
 * @returns {Promise} a response
 */
function list () {
  return db('taskers').select()
}

/**
 * create a tasker
 *
 * @param {Object} data - params for new tasker
 * @param {string} data.name - role name
 * @returns {Promise} a response
 */
function create (data) {
  return db('taskers').insert(data).returning('*')
}

/**
 * update a tasker
 *
 * @param {int} id - tasker id
 * @param {Object} data - params for new tasker
 * @returns {Promise} a response
 */
function update (id, data) {
  return get(id).update(data).returning('*')
}

/**
 * delete a tasker
 *
 * @param {int} id - tasker id
 * @returns {Promise} a response
 */
function destroy (id) {
  return db.transaction(async trx => {
    await trx('campaigns').where('tasker_id', id).del()
    await trx('taskers').where('id', id).del()
  })
}

module.exports = {
  get,
  findByName,
  list,
  create,
  update,
  destroy
}
