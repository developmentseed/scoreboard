const exclusion = require('../models/exclusion-list')
const { validateRole } = require('../utils/roles')
const { prop } = require('ramda')

/**
 * Exclusion list details route
 * /exclusion-list
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
    const list = await exclusion.list().map(prop('user_id'))

    return res.send(list)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve exclusion list')
  }
}

/**
 * Update exclusion list route
 * /exclusion-list
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */

async function put (req, res) {
  const { user, body } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  try {
    await exclusion.update(body.list)
    return res.sendStatus(200)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not add to exclusion list')
  }
}

module.exports = {
  list,
  put
}
