const assignments = require('../models/assignments')
const { isAdmin } = require('../../../lib/utils/roles.js')

/**
 * Assignments list route
 * /assignments
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function list (req, res) {
  const { query } = req

  try {
    const data = await assignments.list(query)
    return res.send(data)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve assignment list')
  }
}

/**
 * Assignment details route
 * /assignments/:id
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function get (req, res) {
  const { user, params: { id } } = req

  if (!user || !isAdmin(user.roles)) {
    // TODO: who should be kept from viewing assignments?
    // return res.boom.unauthorized('Not authorized')
  }

  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    const [assignment] = await assignments.get(id)

    if (!assignment) {
      return res.boom.notFound()
    }

    return res.send(assignment)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve assignment')
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

  if (!user || !isAdmin(user.roles) || !body.assignee_id || user.id !== body.assignee_id) {
    return res.boom.unauthorized('Not authorized')
  }

  try {
    const [assignment] = await assignments.create(body)
    return res.send(assignment)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not create assignment')
  }
}

/**
 * Update assignment route
 * /assignments/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function put (req, res) {
  const { user, body, params: { id } } = req

  if (!user || !isAdmin(user.roles) || !body.assignee_id || user.id !== body.assignee_id) {
    return res.boom.unauthorized('Not authorized')
  }

  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    const [assignment] = await assignments.update(id, body)
    return res.send(assignment)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not update assignment')
  }
}

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

  if (!user || !isAdmin(user.roles) || !body.assignee_id || user.id !== body.assignee_id) {
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
  list,
  get,
  post,
  put,
  del
}
