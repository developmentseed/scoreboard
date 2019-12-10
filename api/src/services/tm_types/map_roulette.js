/* const rp = require('request-promise-native')
const limit = require('p-limit')(5)
const extractCampaignHashtag = require('../../utils/extractCampaignHashtag') */

/**
 * Methods to grab data from MapRoulette API
 */
class MapRouletteAPI {
  /**
   * Creates an instance of MapRouletteAPI.
   * @param {*} { url, taskerId, apiUrl, opts }
   * @memberof MapRouletteAPI
   */
  constructor ({ url, taskerId, apiUrl, opts }) {
    this.url = url
    this.api_url = apiUrl
    this.tasker_id = taskerId
    this.opts = opts || {}
  }

  getUrlForProject (id) {
    return `${this.url}/project/${id}`
  }

  getLastUpdated (id) {
    return this.getProject(id).then(data => {
      return JSON.parse(data)
    }).then(parsed => {
      return parsed.lastUpdated
    })
  }

  async getProjects () {
  }

  getProject (id) {
  }

  getProjectAoi (id) {
  }

  getTasks (id) {
  }

  toDBObjects (records) {
  }

  updateDB (db, dbObjects) {
  }
}

module.exports = MapRouletteAPI
