const taskers = require('../models/taskers')
const { validateRole } = require('../utils/roles')

/**
 * Taskers list route
 * /taskers
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function list (req, res) {
  const { user } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  try {
    const data = await taskers.list()
    return res.send(data)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve taskers list')
  }
}

/**
 * Taskers details route
 * /taskers/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function get (req, res) {
  const { user, params: { id } } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    const [tasker] = await taskers.get(id)

    if (!tasker) {
      return res.boom.notFound()
    }

    return res.send(tasker)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve tasker')
  }
}

/**
 * Create tasker route
 * /taskers
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function post (req, res) {
  const { user, body } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  try {
    const [tasker] = await taskers.create(body)
    return res.send(tasker)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not create tasker')
  }
}

/**
 * Update tasker route
 * /taskers/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function put (req, res) {
  const { user, body, params: { id } } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    const [tasker] = await taskers.update(id, body)
    return res.send(tasker)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not update tasker')
  }
}

/**
 * Delete tasker route
 * /taskers/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function del (req, res) {
  const { user, params: { id } } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    await taskers.destroy(id)
    return res.sendStatus(200)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not delete tasker')
  }
}

module.exports = {
  list,
  get,
  post,
  put,
  del
}
