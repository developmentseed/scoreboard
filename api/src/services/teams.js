const rp = require('request-promise-native')
const { OSM_TEAMS_SERVICE } = require('../config')
const sampleTeams = require('../fixtures/teams.json')

/**
 * Methods to grab data from OSM Teams
 */
class OSMTeams {
  /* Get all teams from the OSM Teams API
   *
   * @returns {Promise} response
   */
  getTeams (id) {
    if (id) {
      return rp(`${OSM_TEAMS_SERVICE}/api/teams?osmId=${id}`)
    }
    return rp(`${OSM_TEAMS_SERVICE}/api/teams`)
  }

  getTeamsByOsmId (id) {
    return rp(`${OSM_TEAMS_SERVICE}/api/teams?osmId=${id}`)
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

class FakeOSMTeams {
  getTeams () {
    return Promise.resolve(sampleTeams)
  }

  getTeamsByOsmId (id) {
    return Promise.resolve(sampleTeams)
  }

  createTeam (body) {
    return Promise.resolve(sampleTeams[0])
  }

  getTeam (id) {
    const team = sampleTeams[0]
    team.id = id
    return Promise.resolve(team)
  }

  editTeam (id, body) {
    const team = sampleTeams[0]
    team.id = id
    return Promise.resolve(team, body)
  }

  updateMembers (id, body) {
    return Promise.resolve(sampleTeams[0])
  }

  deleteTeam (id) {
    return Promise.resolve()
  }
}

if (!OSM_TEAMS_SERVICE) {
  module.exports = new FakeOSMTeams()
} else {
  module.exports = new OSMTeams()
}
