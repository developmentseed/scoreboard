// const connection = require('../db/connection')
const assignments = require('../models/assignments')

/**
 * Assignment details route
 * /assignments
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */

async function get (req, res) {
  // console.log(req)
  const { user, params: { campaign_id } } = req

  if (!user || !user.id) {
    return res.boom.badRequest('Invalid user')
  }
  if (typeof campaign_id === 'undefined') {
    try {
      const assigned = await assignments.findByOsmID(user.id)
      return res.send(assigned)
    } catch (err) {
      console.error(err)
      return res.boom.badRequest('Could not retrieve assignment')
    }
  } else {
    try {
      const assigned = await assignments.findAssignedByIDs(campaign_id, user.id)
      return res.send(assigned)
    } catch (err) {
      console.error(err)
      return res.boom.badRequest('Could not retrieve assignment')
    }
  }
}

/**
 * Create assignment route
 * /assignment
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */

async function post (req, res) {
  const { user, body } = req

  if (!user || !user.id) {
    return res.boom.unauthorized('Invalid user')
  }

  try {
    const [assigned] = assignments.create(body)
    return res.send(assigned)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not create assignment')
  }
}

/**
 * Update assignment route
 * /assignments/:campaignid
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
/*
async function put (req, res) {
  const { user, params: { campaignid } } = req

  if (!user) {
    return res.boom.unauthorized('Not authorized')
  }

  if (!campaignid) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    const db = connection()
    const [assignment] = await assignments.update(id, body)
    return res.send(assignment)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not update assignment')
  }
}
*/
/**
 * Delete assignment route
 * /assignments/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */

async function del (req, res) {
  const { user, params: { id } } = req

  if (!user) {
    return res.boom.unauthorized('Not authorized')
  }

  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    await assignments.destroy(id)
    return res.sendStatus(200)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not delete assignment')
  }
}

module.exports = {
  // list,
  get,
  post,
  // put,
  del
}
