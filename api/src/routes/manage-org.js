const OSMTeams = require('../services/teams')
const OSMesa = require('../services/osmesa')
const db = require('../db/connection')
const { difference, pathOr } = require('ramda')
const getOsmesaLastRefreshed = require('../utils/osmesaStatus.js')
const { validateRole } = require('../utils/roles')

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
    const osmId = pathOr(null, ['user', 'id'], req)
    const teamService = new OSMTeams(osmId)
    const teams = await teamService.getTeams()
    let canCreate = false
    try {
      canCreate = await teamService.canCreateTeam()
    } catch (e) {
      /**
       * If there is no osm-teams token for user, we catch the error and fail silently
       * by letting canCreate = false (default). In other cases, we're interested in the error so
       * we log it.
       *
       */
      if (e.message !== 'No token for user') {
        console.error(e)
      }
    }
    return res.send({ teams: JSON.parse(teams), canCreate })
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve teams list')
  }
}

/**
 * Get users
 * /manage-org
 *
 *
 * @param {string} query - the request object
 * @param {object} req - the request object
 * @returns {Promise} a response
 */
async function getUsers (query, req) {
  const search = req.query.q || ''
  if (search.length > 0) {
    query = query.where('full_name', 'ilike', `%${search}%`)
  }
  console.log('query', query)
  return query
}

/**
 * Teams addModerator route
 * /teams/:id/addModerator/:osmId
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function assignModerator (req, res) {
  const { user } = req
  const { id: teamId, osmId } = req.params
  const teams = new OSMTeams(user.id)
  try {
    await teams.assignModerator(teamId, osmId)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not update team')
  }
}

/**
 * Teams removeModerator route
 * /teams/:id/removeModerator/:osmId
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function removeModerator (req, res) {
  const { user } = req
  const { id: teamId, osmId } = req.params
  const teams = new OSMTeams(user.id)
  try {
    await teams.removeModerator(teamId, osmId)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not update team')
  }
}

module.exports = {
  list,
  getUsers,
  assignModerator,
  removeModerator
}
