const rp = require('request-promise-native')
const { OSM_TEAMS_SERVICE } = require('../config')

/**
 * Methods to grab data from OSM Teams
 */
class OSMTeams {
  /* Get all teams from the OSM Teams API
   *
   * @returns {Promise} response
   */
  getTeams () {
    return rp(`${OSM_TEAMS_SERVICE}/api/teams`)
  }

  createTeam (body) {
    var options = {
      method: 'POST',
      uri: `${OSM_TEAMS_SERVICE}/api/teams`,
      body,
      json: true
    }
    return rp(options)
  }

  getTeam (id) {
    return rp(`${OSM_TEAMS_SERVICE}/api/teams/${id}`)
  }

  editTeam (id, body) {
    var options = {
      method: 'PUT',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}`,
      body,
      json: true
    }
    return rp(options)
  }

  updateMembers (id, body) {
    var options = {
      method: 'PATCH',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}/members`,
      body,
      json: true
    }
    return rp(options)
  }

  deleteTeam (id) {
    var options = {
      method: 'DELETE',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}`,
      json: true
    }
    return rp(options)
  }
}

module.exports = new OSMTeams()
