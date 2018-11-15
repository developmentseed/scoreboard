const connection = require('../db/connection')

const db = connection()

/**
 * get an assignment
 *
 * @param {int} id - id of an assignment
 * @returns {Promise<string>} a response
 */
function get (id) {
  return db('assignments').where('id', id)
}

/**
 * get list of assignments
 *
 * @param {Object} query - query params for results
 * @returns {Promise} a response
 */
function list (query) {
  return db('assignments').select()
}

/**
 * create an assignment
 *
 * @param {Object} data - params for new assignment
 * @param {integer} data.assignee_id - id of the user assigned
 * @param {integer} data.assigner_id - id of the user who created the assignment
 * @param {integer} data.campaign_id - id of the related campaign
 * @param {date} data.due - due date of assignment
 * @returns {Promise} a response
 */
function create (data) {
  return db('assignments').insert(data).returning('*')
}

/**
 * update an assignment
 *
 * @param {int} id - assignment id
 * @param {Object} data - params to update on assignment
 * @param {integer} data.assignee_id - id of the user assigned
 * @param {integer} data.assigner_id - id of the user who created the assignment
 * @param {integer} data.campaign_id - id of the related campaign
 * @param {date} data.due - due date of assignment
 * @returns {Promise} a response
 */
function update (id, data) {
  return get(id).update(data).returning('*')
}

/**
 * delete an assignment
 *
 * @param {int} id - assignment id
 * @returns {Promise} a response
 */
function destroy (id) {
  return db('assignments').where('id', id).del()
}

module.exports = {
  get,
  list,
  create,
  update,
  destroy
}

