const rp = require('request-promise-native')
const extractCampaignHashtag = require('../../utils/extractCampaignHashtag')
const { pick, merge } = require('ramda')

/**
 * Methods to grab data from tasking manager version 2
 */
class TM2API {
  constructor (url, tasker_id) {
    this.url = url
    this.tasker_id = tasker_id
  }

  /* Get all projects from the tasking manager
   *
   * @returns {Promise} response
   */
  async getProjects () {
    let ids = new Set()
    let page = 1
    let keepGoing = true
    let records = []

    while (keepGoing) {
      let resp = JSON.parse(await rp(`${this.url}/projects.json?page=${page}`))
      let features = resp.features
      for (let i = 0; i < features.length; i++) {
        let feature = features[i]
        let id = feature.id

        /*
        As soon as there is a repeated id, we should
        stop grabbing data
        */
        if (ids.has(id)) {
          keepGoing = false
          break
        } else {
          ids.add(id)
          records.push(feature)
        }
      }
      page++
    }
    return records
  }

  getProject (id) {
    return rp(`${this.url}/project/${id}.json`)
  }

  getTasks (id) {
    return rp(`${this.url}/project/${id}/tasks.json`)
  }

  toDBObjects (records) {
    const sqlObjects = records.map((feature) => {
      const properties = pick([
        'done',
        'description',
        'author',
        'status',
        'changeset_comment',
        'priority',
        'name',
        'instructions',
        'validated'
      ], feature.properties)
      properties.priority = properties.priority.toString()
      const noPropertiesFeature = merge(feature, { properties: {} })
      const mainHashtag = extractCampaignHashtag(properties.changeset_comment, feature.id)
      const {
        created: created_at, last_update: updated_at // eslint-disable-line camelcase
      } = feature.properties
      return merge(properties, {
        campaign_hashtag: mainHashtag,
        created_at,
        updated_at,
        geometry: JSON.stringify(noPropertiesFeature),
        tm_id: feature.id,
        tasker_id: this.tasker_id
      })
    })

    return sqlObjects
  }

  updateDB (db, dbObjects) {
    const promises = dbObjects.map(async obj => {
      let rows = await db('campaigns').where({ 'tm_id': obj.tm_id, 'tasker_id': obj.tasker_id })
      if (rows.length === 0) {
        // not found
        return db('campaigns').insert(obj)
      } else {
        return db('campaigns').where('tm_id', obj.tm_id).update(obj)
      }
    })
    return Promise.all(promises)
  }
}

module.exports = TM2API
