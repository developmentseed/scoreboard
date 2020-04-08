const rp = require('request-promise-native')
const sampleTeams = require('../fixtures/teams.json')
const { getToken, storeToken } = require('../models/teams-access-tokens')
const { teamServiceCredentials } = require('../passport')
const { OSM_TEAMS_SERVICE, OSM_TEAMS_ORG_ID } = require('../config')

/**
 * Methods to grab data from OSM Teams
 */
class OSMTeams {
  constructor (osmid) {
    this.osmid = osmid
  }

  /**
   * Get the access token for this user to sign requests
   * Should be called only after the integration for teams is set up
   */
  async getAccessToken () {
    if (!this.osmid) {
      throw new Error('User is not logged in')
    }

    const token = await getToken(this.osmid)
    if (token.length === 0) {
      throw new Error('No token for user')
    }

    let accessToken = teamServiceCredentials.accessToken.create(token[0])
    if (accessToken.expired()) {
      try {
        accessToken = await accessToken.refresh()
        await storeToken(accessToken.token)
      } catch (error) {
        console.error(error)
        throw new Error(`Error refreshing access token: ${error.message}`)
      }
    }
    return accessToken
  }

  /**
   * Adds authorization headers to request parameters
   * before forwarding to OSM teams service
   *
   * @param {Object} options Request parameters
   */
  async addAuthorization (options) {
    const accessToken = await this.getAccessToken()
    return Object.assign({}, {
      headers: {
        'Authorization': `Bearer ${accessToken.token.access_token}`
      }
    }, options)
  }

  /* Get all teams from the OSM Teams API
   *
   * @returns {Promise} response
   */
  getTeams (id) {
    if (id) {
      return rp(`${OSM_TEAMS_SERVICE}/api/teams?osmId=${id}&organizationId=${OSM_TEAMS_ORG_ID}`)
    }
    return rp(`${OSM_TEAMS_SERVICE}/api/organizations/${OSM_TEAMS_ORG_ID}/teams`)
  }

  getTeamsByOsmId (id) {
    return rp(`${OSM_TEAMS_SERVICE}/api/teams?osmId=${id}&organizationId=${OSM_TEAMS_ORG_ID}`)
  }

  async createTeam (body) {
    var options = await this.addAuthorization({
      method: 'POST',
      uri: `${OSM_TEAMS_SERVICE}/api/organizations/${OSM_TEAMS_ORG_ID}/teams`,
      body,
      json: true
    })
    return rp(options)
  }

  getTeam (id) {
    return rp(`${OSM_TEAMS_SERVICE}/api/teams/${id}`)
  }

  async editTeam (id, body) {
    var options = await this.addAuthorization({
      method: 'PUT',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}`,
      body,
      json: true
    })
    return rp(options)
  }

  async updateMembers (id, body) {
    var options = await this.addAuthorization({
      method: 'PATCH',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}/members`,
      body,
      json: true
    })
    return rp(options)
  }

  async deleteTeam (id) {
    var options = await this.addAuthorization({
      method: 'DELETE',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}`,
      json: true
    })
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
  module.exports = FakeOSMTeams
} else {
  module.exports = OSMTeams
}
