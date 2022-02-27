const rp = require('request-promise-native')
const sampleTeams = require('../fixtures/teams.json')
const { getToken, storeToken } = require('../models/teams-access-tokens')
const { teamServiceCredentials } = require('../passport')
const { OSM_TEAMS_SERVICE, OSM_TEAMS_ORG_ID } = require('../config')
const { prop, includes, map } = require('ramda')

/**
 * Methods to grab data from OSM Teams
 */
class OSMTeams {
  /**
   * Constructor
   *
   * @param osmid {number} openstreetmap user id
   */
  constructor (osmid) {
    this.osmid = Number(osmid)
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

    let { access_token, refresh_token, expires_at } = token[0]
    let accessToken = teamServiceCredentials.createToken({
      token_type: 'Bearer',
      access_token,
      refresh_token,
      expires_at
    })
    if (accessToken.expired()) {
      try {
        accessToken = await accessToken.refresh()
        await storeToken(accessToken)
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

  async createTeam (body) {
    const options = await this.addAuthorization({
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

  getTeamMembers (id) {
    return rp(`${OSM_TEAMS_SERVICE}/api/teams/${id}/members`)
  }

  /**
   * Check if user has permission to create a team. The user needs to be either an
   * owner of the organization, or a manager of the organization.
   *
   * @returns {Promise}
   */
  async canCreateTeam () {
    try {
      const options = await this.addAuthorization({
        method: 'GET',
        uri: `${OSM_TEAMS_SERVICE}/api/organizations/${OSM_TEAMS_ORG_ID}/staff`,
        json: true
      })
      const org = await rp(options)
      const { owners, managers } = org
      let ids = owners.map(prop('id')).concat(managers.map(prop('id')))
      ids = map(parseInt, ids)
      return includes(this.osmid, ids)
    } catch (e) {
      console.error(e)
      return false
    }
  }

  /**
   * Check if user has permission to edit a team. The user needs to be either an
   * owner of the organization, or a moderator of the team. Note: this should be
   * the same as osm-teams's own team:edit permission.
   *
   * @param id {number} The osm-teams team id
   * @returns {Promise<boolean>}
   * @async
   */
  async canEditTeam (id) {
    try {
      const [orgOpts, teamOpts] = await Promise.all([
        this.addAuthorization({
          method: 'GET',
          uri: `${OSM_TEAMS_SERVICE}/api/organizations/${OSM_TEAMS_ORG_ID}/staff`,
          json: true
        }),
        this.addAuthorization({
          method: 'GET',
          uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}/members`,
          json: true
        })
      ])
      const [org, team] = await Promise.all([ rp(orgOpts), rp(teamOpts) ])
      const { owners } = org
      const { moderators } = team
      const getId = prop('id')
      const allowedEditorIds = new Set(owners.map(getId).concat(moderators.map(getId)))
      return allowedEditorIds.has(this.osmid)
    } catch (ex) {
      // this would occur when user is not logged in and getAccessToken throws.
      console.error(ex)
      return false
    }
  }

  async editTeam (id, body) {
    const options = await this.addAuthorization({
      method: 'PUT',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}`,
      body,
      json: true
    })
    return rp(options)
  }

  async updateMembers (id, body) {
    const options = await this.addAuthorization({
      method: 'PATCH',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}/members`,
      body,
      json: true
    })
    return rp(options)
  }

  async deleteTeam (id) {
    const options = await this.addAuthorization({
      method: 'DELETE',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}`,
      json: true
    })
    return rp(options)
  }

  async assignModerator (id, osmId) {
    var options = await this.addAuthorization({
      method: 'PUT',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}/assignModerator/${osmId}`,
      json: true
    })
    return rp(options)
  }

  async removeModerator (id, osmId) {
    var options = await this.addAuthorization({
      method: 'PUT',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}/removeModerator/${osmId}`,
      json: true
    })
    return rp(options)
  }

  /* Get all staff members of an organization from the OSM Teams API
   *
   * @returns {Promise} response
   */
  async getOrganizationStaff () {
    try {
      const options = await this.addAuthorization({
        method: 'GET',
        uri: `${OSM_TEAMS_SERVICE}/api/organizations/${OSM_TEAMS_ORG_ID}/staff`,
        json: true
      })
      const org = await rp(options)
      return org
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async addOwner (osmId) {
    var options = await this.addAuthorization({
      method: 'PUT',
      uri: `${OSM_TEAMS_SERVICE}/api/organizations/${OSM_TEAMS_ORG_ID}/addOwner/${osmId}`,
      json: true
    })
    return rp(options)
  }

  async removeOwner (osmId) {
    var options = await this.addAuthorization({
      method: 'PUT',
      uri: `${OSM_TEAMS_SERVICE}/api/organizations/${OSM_TEAMS_ORG_ID}/removeOwner/${osmId}`,
      json: true
    })
    return rp(options)
  }

  async addManager (osmId) {
    var options = await this.addAuthorization({
      method: 'PUT',
      uri: `${OSM_TEAMS_SERVICE}/api/organizations/${OSM_TEAMS_ORG_ID}/addManager/${osmId}`,
      json: true
    })
    return rp(options)
  }

  async removeManager (osmId) {
    var options = await this.addAuthorization({
      method: 'PUT',
      uri: `${OSM_TEAMS_SERVICE}/api/organizations/${OSM_TEAMS_ORG_ID}/removeManager/${osmId}`,
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

  canEditTeam (id) {
    return Promise.resolve(false)
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
