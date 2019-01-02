const rp = require('request-promise-native')

/**
 * Methods to grab data from tasking manager version 3
 */
class TM3API {
  constructor (url) {
    this.url = url
  }
  /* Get all projects from the tasking manager
   *
   * @returns {Promise} response
   */

  getProjects () {
    return rp({
      uri: `${this.url}/api/v1/project/search?mapperLevel=ALL`,
      headers: { 'Accept-Language': 'en-US,en;q=0.9' }
    })
  }

  getProject (id) {
    return rp(`${this.url}/api/v1/project/${id}`)
  }

  getTasks (id) {
    return rp({
      uri: `${this.url}/api/v1/project/${id}/tasks`
    })
  }
}

module.exports = {
  TM3API
}
