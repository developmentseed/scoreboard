const OSMTeams = require('../services/teams')
// const db = require('../db/connection')
const { pathOr } = require('ramda')
// const getOsmesaLastRefreshed = require('../utils/osmesaStatus.js')
// const { validateRole } = require('../utils/roles')

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

module.exports = {
  list
}
