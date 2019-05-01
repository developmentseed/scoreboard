const rp = require('request-promise-native')
const sampleTeams = require('../fixtures/teams.json')
const { getToken, storeToken } = require('../models/teams-access-tokens')
const { APP_URL, OSM_TEAMS_SERVICE, OSM_TEAMS_SERVICE_TOKEN_URL, OSM_TEAMS_CONSUMER_KEY, OSM_TEAMS_SECRET } = require('../config')

const credentials = {
  client: {
    id: OSM_TEAMS_CONSUMER_KEY,
    secret: OSM_TEAMS_SECRET,
  },
  auth: {
    tokenHost: OSM_TEAMS_SERVICE_TOKEN_URL,
    tokenPath: '/oauth2/token',
    authorizePath: '/oauth2/auth'
  }
}

const oauth2 = require('simple-oauth2').create(credentials)

var generateState = function (length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

/**
 * Methods to grab data from OSM Teams
 */
class OSMTeams {
  constructor (osmid) {
    this.osmid = osmid
  }

  login(req, res) {
    let state = generateState(24)
    const authorizationUri = oauth2.authorizationCode.authorizeURL({
      redirect_uri: `${APP_URL}/integrations/teams`,
      scope: 'openid offline',
      state
    })
    req.session.teams_login_csrf = state

    res.redirect(authorizationUri)
  }

  async loginAccept(req, res) {
    const { code, state } = req.query
    /**
     * Token exchange with CSRF handling
     */
    if (state !== req.session.teams_login_csrf) {
      /**
       * Handle this differently
       */
      // req.session.destroy(function (err) {
      //   if (err) console.error(err)
      //   return res.status(500).json('State does not match')
      // })
    } else {
      // Flush csrf
      req.session.teams_login_csrf = null

      // Create options for token exchange
      const options = {
        code,
        redirect_uri: `${APP_URL}/integrations/teams`
      }

      try {
        const result = await oauth2.authorizationCode.getToken(options)

        // Store access token and refresh token
        await storeToken(result)
        return res.redirect('/')

      } catch (error) {
        console.error(error)
        return res.status(500).json('Authentication failed')
      }
    }
  }

  /**
   * Get the access token for this user to sign requests
   * Should be called only after the integration for teams is set up 
   */
  async getAccessToken () {
    const token = await getToken(this.osmid)
    if (token.length == 0) {
      throw new Error('No token for user')
    }

    let accessToken = oauth2.accessToken.create(tokenObject)
    if (accessToken.expired()) {
      try {
        accessToken = await accessToken.refresh();
      } catch (error) {
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
  async addAuthorization(options) {
    const accessToken = this.getAccessToken() 
    return Object.assign({}, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }, options)
  }

  /* Get all teams from the OSM Teams API
   *
   * @returns {Promise} response
   */
  getTeams(id) {
    if (id) {
      return rp(`${OSM_TEAMS_SERVICE}/api/teams?osmId=${id}`)
    }
    return rp(`${OSM_TEAMS_SERVICE}/api/teams`)
  }

  getTeamsByOsmId(id) {
    return rp(`${OSM_TEAMS_SERVICE}/api/teams?osmId=${id}`)
  }

  async createTeam(body) {
    var options = await this.addAuthorization({
      method: 'POST',
      uri: `${OSM_TEAMS_SERVICE}/api/teams`,
      body,
      json: true
    })
    return rp(options)
  }

  getTeam(id) {
    return rp(`${OSM_TEAMS_SERVICE}/api/teams/${id}`)
  }

  editTeam(id, body) {
    var options = await this.addAuthorization({
      method: 'PUT',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}`,
      body,
      json: true
    })
    return rp(options)
  }

  updateMembers(id, body) {
    var options = await this.addAuthorization({
      method: 'PATCH',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}/members`,
      body,
      json: true
    })
    return rp(options)
  }

  deleteTeam(id) {
    var options = await this.addAuthorization({
      method: 'DELETE',
      uri: `${OSM_TEAMS_SERVICE}/api/teams/${id}`,
      json: true
    })
    return rp(options)
  }
}

class FakeOSMTeams {
  getTeams() {
    return Promise.resolve(sampleTeams)
  }

  getTeamsByOsmId(id) {
    return Promise.resolve(sampleTeams)
  }

  createTeam(body) {
    return Promise.resolve(sampleTeams[0])
  }

  getTeam(id) {
    const team = sampleTeams[0]
    team.id = id
    return Promise.resolve(team)
  }

  editTeam(id, body) {
    const team = sampleTeams[0]
    team.id = id
    return Promise.resolve(team, body)
  }

  updateMembers(id, body) {
    return Promise.resolve(sampleTeams[0])
  }

  deleteTeam(id) {
    return Promise.resolve()
  }
}

if (!OSM_TEAMS_SERVICE) {
  module.exports = new FakeOSMTeams()
} else {
  module.exports = new OSMTeams()
}
