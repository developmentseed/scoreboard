const rp = require('request-promise-native')
const { concat } = require('ramda')
const limit = require('p-limit')(5)
const extractCampaignHashtag = require('../../utils/extractCampaignHashtag')

/**
 * @param {FeatureCollection} fc
 * @returns {Map[ProjectId, Feature]}
 * Takes the feature collection of mapResults from the projects
 * of the TM3 api and builds a reverse index of project ids to geometries
 */
function buildMapResultsIndex (fc) {
  let features = {}
  for (let i = 0; i < fc.features.length; i++) {
    let feature = fc.features[i]
    let projectId = feature.properties.projectId
    features[projectId] = feature
  }
  return features
}

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
    let mapResultsIndex = buildMapResultsIndex(json.mapResults);

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

      // Combine mapResults with records
      responses.forEach(response => {
        let results = JSON.parse(response).results
        results.forEach(project => {
          project.geometry = mapResultsIndex[project.projectId]
          projects.push(project)
        })
      })

      return projects
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
        geometry: feature.geometry,
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
}

module.exports = TM3API
