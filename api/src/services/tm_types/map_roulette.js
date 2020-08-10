const rp = require('request-promise-native')
const limit = require('p-limit')(5)
// const extractCampaignHashtag = require('../../utils/extractCampaignHashtag')

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

  /*
   * For consistency, use Projects to refer to Scoreboard projects
   * MapRoulette uses Projects :: Challenges
   * Challenges are treated as Campaigns.
  */
  async getProjects () {
    let qs = {
      page: 0,
      limit: 10
    }
    if (this.opts.search_params) {
      qs = { ...this.opts.search_params, ...qs }
    }

    const firstResp = await rp({
      uri: `${this.api_url}/api/v2/challenges/featured`,
      qs,
      headers: { 'Accept-Language': 'en-US,en;q=0.9' }
    })
    const challenges = JSON.parse(firstResp)
    return challenges
    // const numPages = json.pagination.pages
    // const promises = []
    /*
    for (let i =1; i <= numPages; i++) {
      qs.page = i
      promises.push(limit(() => rp({
        uri: ``,
        qs,
        headers: { 'Accept-Language': 'en-US,en;q=0.9' }
      })))
    }
    Promise.all(challenges).then( resps => {
      resps.forEach( resp => {
        const { results } = resp.json()
        results.forEach( challenge => {
          challenges.push(challenge)
        })
      })
      return challenges
    })
    */
  }

  getProject (id) {
  }

  getProjectAoi (id) {
  }

  getTasks (id) {
  }

  toDBObjects (records) {
    const sqlObjects = records.map(challenge => ({
      name: challenge.name,
      description: challenge.description,
      tm_id: challenge.id,
      priority: challenge.defaultPriority,
      status: 'PUBLISHED',
      created_at: challenge.created,
      updated_at: challenge.modified,
      geometry: challenge.bounding,
      tasker_id: this.tasker_id,
      campaign_hashtag: 'test',
      validated: 0,
      done: 0
    }))
    return sqlObjects
  }

  updateDB (db, dbObjects) {
    const proms = dbObjects.map(obj => limit(async () => {
      let rows = await db('campaigns').where({ 'tm_id': obj.tm_id, 'tasker_id': obj.tasker_id })
      if (rows.length === 0) {
        // not found
        return db('campaigns').insert(obj)
      } else {
        return db('campaigns').where('id', rows[0].id).update(obj)
      }
    }))

    return Promise.all(proms)
  }
}

module.exports = MapRouletteAPI
