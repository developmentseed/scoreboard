const db = require('../db/connection')

/**
 * get a role
 *
 * @param {int} id - id of a role
 * @returns {Promise<string>} a response
 */
function get (id) {
  return db('roles').where('id', id)
}

/**
 * get an array of roles from an array of role ids
 *
 * @param {int[]} ids - array of role ids
 * @returns {Promise[]} a response
 */
function getRoles (ids) {
  return db('roles').whereIn('id', ids)
}

/**
 * get an array of roles from an array of role names
 *
 * @param {int[]} ids - array of role ids
 * @returns {Promise[]} a response
 */
function getRolesByName (names) {
  return db('roles').whereIn('name', names)
}

/**
 * find a role by name
 *
 * @param {string} name - role name
 * @returns {Promise} a response
 */
function findByName (name) {
  return db('roles').where('name', name)
}

/**
 * get list of roles
 *
 * @returns {Promise} a response
 */
function list () {
  return db('roles').select()
}

/**
 * create a role
 *
 * @param {Object} data - params for new role
 * @param {string} data.name - role name
 * @returns {Promise} a response
 */
function create (data) {
  return db('roles').insert(data).returning('*')
}

/**
 * update a role
 *
 * @param {int} id - role id
 * @param {Object} data - params for new role
 * @param {string} data.name - role name
 * @returns {Promise} a response
 */
function update (id, data) {
  return get(id).update(data).returning('*')
}

/**
 * delete a role
 *
 * @param {int} id - role id
 * @returns {Promise} a response
 */
function destroy (id) {
  return db('roles').where('id', id).del()
}

module.exports = {
  get,
  findByName,
  getRoles,
  getRolesByName,
  list,
  create,
  update,
  destroy
}
