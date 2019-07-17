const rp = require('request-promise-native')
const extractCampaignHashtag = require('../../utils/extractCampaignHashtag')
const { pick, merge } = require('ramda')

/**
 * Methods to grab data from tasking manager version 2
 */
class TM2API {
  constructor (url, tasker_id, api_url, opts) {
    this.url = url
    this.api_url = api_url
    this.tasker_id = tasker_id
    this.opts = opts || {}
  }

  getUrlForProject (id) {
    return `${this.url}/project/${id}`
  }

  /* Get all projects from the tasking manager
   *
   * @returns {Promise} response
   */
  async getProjects () {
    let ids = new Set()
    let keepGoing = true
    let records = []

    let qs = {
      page: 1
    }
    if (this.opts.search_params) {
      qs = Object.assign(this.opts.search_params, qs)
    }

    while (keepGoing) {
      let resp = JSON.parse(await rp({
        uri: `${this.api_url}/projects.json`,
        qs
      }))
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
      qs.page += 1
    }
    return records
  }

  getProject (id) {
    return rp(`${this.api_url}/project/${id}.json`)
  }

  getLastUpdated (id) {
    return this.getProject(id).then(data => {
      return JSON.parse(data)
    }).then(parsed => {
      return parsed.properties.last_update
    })
  }

  getTasks (id) {
    return rp(`${this.api_url}/project/${id}/tasks.json`)
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

      // In tm2, done is a state such that if a square is validated,
      // it is no longer counted as 'mapped'. This makes 100% validated
      // show 0% mapped. To fix this, we reset 'done' to be equal to done + validated
      // such that 100% validation is 100% completion
      properties.done = properties.done + properties.validated

      // Make status a text string
      switch (properties.status) {
        case 0:
          properties.status = 'ARCHIVED'
          break
        case 1:
          properties.status = 'PUBLISHED'
          break
        case 2:
          properties.status = 'DRAFT'
          break
        default:
          properties.status = 'PUBLISHED'
          break
      }

      switch (properties.priority) {
        case 0:
          properties.priority = 'URGENT'
          break
        case 1:
          properties.priority = 'HIGH'
          break
        case 2:
          properties.priority = 'MEDIUM'
          break
        case 3:
          properties.priority = 'LOW'
          break
        default:
          properties.priority = 'MEDIUM'
          break
      }

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
        return db('campaigns').where('id', rows[0].id).update(obj)
      }
    })
    return Promise.all(promises)
  }
}

module.exports = TM2API
