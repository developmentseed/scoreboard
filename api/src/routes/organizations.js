const OSMTeams = require('../services/teams')
const { pathOr } = require('ramda')

/**
 * manager/owner list route
 * /organizations
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function list (req, res) {
  try {
    const osmId = pathOr(null, ['user', 'id'], req)
    const teamService = new OSMTeams(osmId)
    const organization = await teamService.getOrganization()
    return res.send({ organization })
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve organization list')
  }
}

/**
 * Organization addOwner route
 * /organizations/:id/addOwner/:osmId
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function addOwner (req, res) {
  const { user } = req
  const { osmId } = req.params
  const teamService = new OSMTeams(user.id)
  try {
    await teamService.addOwner(osmId)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not update team')
  }
}

/**
 * Organizations removeOwner route
 * /organizations/:id/removeOwner/:osmId
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function removeOwner (req, res) {
  const { user } = req
  const { osmId } = req.params
  const teamService = new OSMTeams(user.id)
  try {
    await teamService.removeOwner(osmId)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not update team')
  }
}

/**
 * Organization addManager route
 * /organizations/:id/addModerator/:osmId
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function addManager (req, res) {
  const { user } = req
  const { osmId } = req.params
  const teamService = new OSMTeams(user.id)
  try {
    await teamService.addManager(osmId)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not update team')
  }
}

/**
 * Organizations removeManager route
 * /organizations/:id/removeManager/:osmId
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function removeManager (req, res) {
  const { user } = req
  const { osmId } = req.params
  const teamService = new OSMTeams(user.id)
  try {
    await teamService.removeManager(osmId)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not update team')
  }
}

module.exports = {
  list,
  addOwner,
  removeOwner,
  addManager,
  removeManager
}
