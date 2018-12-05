const { validateRole } = require('../utils/roles')
const OSMTeams = require('../services/teams')

/**
 * Teams list route
 * /teams
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function list (req, res) {
  try {
    const data = await OSMTeams.getTeams()
    return res.send(data)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve teams list')
  }
}

/**
 * Create teams route
 * /teams
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
    const team = await OSMTeams.createTeam(body)
    return res.send(team)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not create team')
  }
}

/**
 * Teams get route
 * /teams/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function get (req, res) {
  try {
    const data = await OSMTeams.getTeam(req.params.id)
    return res.send(data)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve team')
  }
}

/**
 * Teams put route
 * /teams/:id
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
    const data = await OSMTeams.editTeam(req.params.id, body)
    return res.send(data)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not update team')
  }
}

/**
 * Teams delete route
 * /teams/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function del (req, res) {
  const { user } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  try {
    const status = await OSMTeams.deleteTeam(req.params.id)
    return res.sendStatus(status)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not delete team')
  }
}

module.exports = {
  list,
  post,
  get,
  put,
  del
}
