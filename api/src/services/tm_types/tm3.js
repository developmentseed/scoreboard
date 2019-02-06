const rp = require('request-promise-native')
const { concat } = require('ramda')
const limit = require('p-limit')(5)
const extractCampaignHashtag = require('../../utils/extractCampaignHashtag')

/**
 * Methods to grab data from tasking manager version 3
 */
class TM3API {
  constructor (url, tasker_id, api_url) {
    this.url = url
    this.api_url = api_url
    this.tasker_id = tasker_id
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

  /* Get all projects from the tasking manager
   *
   * @returns {Promise} response
   */
  async getProjects () {
    let records = []
    let firstResp = await rp({
      uri: `${this.api_url}/api/v1/project/search`,
      headers: { 'Accept-Language': 'en-US,en;q=0.9' }
    })
    let json = JSON.parse(firstResp)

    concat(records, json.results)

    let numPages = json.pagination.pages
    let promises = []
    for (let i = 2; i < numPages; i++) {
      promises.push(limit(() => rp({
        uri: `${this.api_url}/api/v1/project/search?page=${i}`,
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
    return rp({
      uri: `${this.api_url}/api/v1/project/${id}?as_file=false`,
      headers: { 'Accept-Language': 'en-US,en;q=0.9' }
    })
  }

  getProjectAoi (id) {
    return rp({
      uri: `${this.api_url}/api/v1/project/${id}/aoi?as_file=false`
    })
  }

  getTasks (id) {
    return rp({
      uri: `${this.api_url}/api/v1/project/${id}/tasks`
    })
  }

  toDBObjects (records) {
    const sqlObjects = records.map(feature => {
      return {
        priority: feature.priority,
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

      try {
        let { author, areaOfInterest, lastUpdated, created, changesetComment } = JSON.parse(await this.getProject(obj.tm_id))
        obj.geometry = areaOfInterest
        obj.created_at = created
        obj.updated_at = lastUpdated
        obj.changeset_comment = changesetComment
        obj.campaign_hashtag = extractCampaignHashtag(changesetComment, obj.tm_id)
        obj.author = author
      } catch (e) {
        console.error(`Could not add details for project ${obj.tm_id}`)
        console.error(e)
      }

      let rows = await db('campaigns').where({ 'tm_id': obj.tm_id, 'tasker_id': obj.tasker_id })
      if (rows.length === 0) {
        // not found
        return db('campaigns').insert(obj)
      } else {
        return db('campaigns').where('tm_id', obj.tm_id).update(obj)
      }
    }))
    return Promise.all(promises)
  }
}

module.exports = TM3API
