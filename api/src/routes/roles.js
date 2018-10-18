const roles = require('../models/roles')
const { validateRole } = require('../utils/roles')

/**
 * Roles list route
 * /roles
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function list(req, res) {
  const { user } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  try {
    const data = await roles.list()
    return res.send(data)
  }
  catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve roles list')
  }
}

/**
 * Role details route
 * /roles/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function get(req, res) {
  const { user, params: { id } } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    const [role] = await roles.get(id)

    if (!role) {
      return res.boom.notFound()
    }

    return res.send(role)
  }
  catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve project')
  }
}

/**
 * Create role route
 * /roles
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function post(req, res) {
  const { user, body } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  try {
    const [role] = await roles.create(body)
    return res.send(role)
  }
  catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve project')
  }
}

/**
 * Update role route
 * /roles/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function put(req, res) {
  const { user, body, params: { id } } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    const [role] = await roles.update(id, body)
    return res.send(role)
  }
  catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve project')
  }
}

/**
 * Delete role route
 * /roles/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function del(req, res) {
  const { user, params: { id } } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    await roles.destroy(id)
    return res.sendStatus(200)
  }
  catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve project')
  }
}

module.exports = {
  list,
  get,
  post,
  put,
  del
}
