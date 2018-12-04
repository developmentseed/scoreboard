const connection = require('../db/connection')

const db = connection()

/**
 * get an assignment
 *
 * @param {int} id - id of a role
 * @returns {Promise<string>} a response
 */
function get (id) {
  return db('assignments').where('id', id)
}

/**
 * find assignments by user ID
 *
 * @param {string} name - user ID
 * @returns {Promise} a response
 */
function findByUserID (user_id) {
  return db('campaigns').where('id', 'in', db('assignments').select('campaign_id').where('user_id', '=', user_id))
}

/**
 * find assignments by OSM ID
 *
 * @param {string} name - OSM ID
 * @returns {Promise} a response
 */
async function findByOsmID (osm_id) {
  // Match OSM ID to user ID
  const user_id = await db('users').select('id').where('osm_id', '=', osm_id)
  return findByUserID(user_id[0]['id'])
}

/**
 * create an assignment
 *
 * @param {Object} data - params for new assignment
 * @returns {Promise} a response
 */
function create (data) {
  return db('assignments').insert(data).returning('*')
}

/**
 * Check whether an assignment already exists
 *
 * @param {Integer} CampaignID
 * @param {Integer} osmID
 * @returns {Promise} a response
 */
function findAssignedByIDs (campaignID, osmID) {
  console.log('Here')
  return db('assignments').select('id').where({ campaign_id: campaignID, user_id: db('users').select('id').where('osm_id', '=', osmID).limit(1) })
}

/**
 * delete an assigment
 *
 * @param {int} id - assignment id
 * @returns {Promise} a response
 */
function destroy (id) {
  return db('assignments').where('id', id).del()
}

module.exports = {
  get,
  findByUserID,
  findByOsmID,
  findAssignedByIDs,
  create,
  destroy
}
