const rp = require('request-promise-native')

/**
 * Methods to grab data from tasking manager version 2
 */
class TM2API {
  constructor (url) {
    this.url = url
  }

  /* Get all projects from the tasking manager
   *
   * @returns {Promise} response
   */
  getProjects () {
    return rp(`${this.url}/projects.json`)
  }

  getProject (id) {
    return rp(`${this.url}/project/${id}.json`)
  }

  getTasks (id) {
    return rp(`${this.url}/project/${id}/tasks.json`)
  }
}

module.exports = {
  TM2API
}
