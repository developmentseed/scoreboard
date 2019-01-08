const rp = require('request-promise-native')
const { concat } = require('ramda')
const limit = require('p-limit')(5)
const extractCampaignHashtag = require('../../utils/extractCampaignHashtag')

/**
 * Methods to grab data from tasking manager version 3
 */
class TM3API {
  constructor (url, tasker_id) {
    this.url = url
    this.tasker_id = tasker_id
  }

  /* Get all projects from the tasking manager
   *
   * @returns {Promise} response
   */
  async getProjects () {
    let records = []
    let firstResp = await rp({
      uri: `${this.url}/api/v1/project/search`,
      headers: { 'Accept-Language': 'en-US,en;q=0.9' }
    })
    let json = JSON.parse(firstResp)

    concat(records, json.results)

    let numPages = json.pagination.pages
    let promises = []
    for (let i = 2; i < numPages; i++) {
      promises.push(limit(() => rp({
        uri: `${this.url}/api/v1/project/search?page=${i}`,
        headers: { 'Accept-Language': 'en-US,en;q=0.9' }
      })))
    }
    return Promise.all(promises).then(responses => {
      let projects = []

      responses.forEach(response => {
        let results = JSON.parse(response).results
        results.forEach(project => {
          projects.push(project)
        })
      })

      return projects
    })
  }

  getProject (id) {
    return rp(`${this.url}/api/v1/project/${id}`)
  }

  getProjectAoi (id) {
    return rp({
      uri: `${this.url}/api/v1/project/${id}/aoi?as_file=false`
    })
  }

  getTasks (id) {
    return rp({
      uri: `${this.url}/api/v1/project/${id}/tasks`
    })
  }

  toDBObjects (records) {
    const sqlObjects = records.map(feature => {
      const {
        created: created_at, last_update: updated_at // eslint-disable-line camelcase
      } = feature
      const mainHashtag = extractCampaignHashtag(rp.changesetComment, feature.projectId)
      return {
        priority: feature.priority,
        campaign_hashtag: mainHashtag,
        created_at,
        updated_at,
        name: feature.name,
        description: feature.shortDescription,
        validated: feature.percentValidated,
        done: feature.percentMapped,
        tm_id: feature.projectId,
        tasker_id: this.tasker_id
      }
    })

    return sqlObjects
  }

  updateDB (db, dbObjects) {
    const promises = dbObjects.map(obj => limit(async () => {
      let rows = await db('campaigns').where({ 'tm_id': obj.tm_id, 'tasker_id': obj.tasker_id })
      if (rows.length === 0) {
        // not found
        let aoi = await this.getProjectAoi(obj.tm_id)
        obj.geometry = aoi
        return db('campaigns').insert(obj)
      } else {
        if (!rows[0].geometry) { // Only get the geometry once
          let aoi = await this.getProjectAoi(obj.tm_id)
          obj.geometry = aoi
        }
        return db('campaigns').where('tm_id', obj.tm_id).update(obj)
      }
    }))
    return Promise.all(promises)
  }
}

module.exports = TM3API
