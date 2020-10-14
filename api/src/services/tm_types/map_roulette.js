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
    this.opts = opts ? this.validateOpts(opts) : {}
  }
  validateOpts (opts) {
    if (opts.search_params) {
      const searchKeys = new Set(['pid',
        'ps',
        'pe',
        'ct',
        'cs',
        'ce',
        'cd'])
      const searchParams = Object.entries(opts.search_params).filter(([k, val]) => searchKeys.has(k))
      if (searchParams.length !== Object.keys(opts.search_params).length) {
        console.log(`Invalid search params. Options are ${[...searchKeys.values()].join(' ')}`)
      }
      opts.search_params = Object.fromEntries(searchParams)
    }
    return opts
  }

  getUrlForProject (id) {
    return `${this.url}/challenge/${id}`
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
   * TODO this currently statically returns the first 50 objs
  */
  async getProjects () {
    let qs = {
      page: 0,
      limit: 50,
      pe: true,
      ce: true,
      order: 'DESC',
      sort: 'popularity'
    }

    if (this.opts.search_params) {
      qs = { ...this.opts.search_params, ...qs }
    }

    const challenges = []

    while (true) {
      console.log(`requesting map roulette page ${qs.page}`)
      const resp = await rp({
        uri: `${this.api_url}/api/v2/challenges/extendedFind`,
        qs,
        headers: { 'Accept-Language': 'en-US,en;q=0.9' }
      })
      const chunk = JSON.parse(resp)
      challenges.push(...chunk)
      qs.page = qs.page + 1
      if (chunk.length < 50 || qs.page > 10) {
        break
      } else {
        console.log(`got ${chunk.length} challenges`)
      }
    }

    return challenges
  }

  getProject (id) {
    return rp({
      uri: `${this.api_url}/api/v2/challenge/${id}`,
      headers: { 'Accept-Language': 'en-US,en;q=0.9' }
    })
  }

  getProjectStats (id) {
    return rp({
      uri: `${this.api_url}/api/v2/data/challenge/${id}`,
      headers: { 'Accept-Language': 'en-US,en;q=0.9' }
    })
  }

  async getProjectUserStats (id) {
    const qs = {
      monthDuration: -1,
      challengeIds: id,
      limit: 20
    }
    const userData = await rp({
      uri: `${this.api_url}/api/v2/data/user/leaderboard`,
      qs,
      headers: { 'Accept-Language': 'en-US,en;q=0.9' }
    })

    const users = JSON.parse(userData).map(user => {
      const userObj = {
        uid: user.userId,
        name: user.name,
        rank: user.rank,
        score: user.score,
        avgTimeSpent: user.avgTimeSpent,
        completedTasks: user.completedTasks
      }
      return userObj
    })

    const campaignObj = {
      tag: id,
      data: users,
      success: true
    }
    return campaignObj
  }

  getProjectAoi (id) {
    return new Promise((resolve, reject) => {
      rp({
        uri: `${this.api_url}/api/v2/challenge/${id}`,
        headers: { 'Accept-Language': 'en-US,en;q=0.9' }
      })
        .then(res => {
          const { bounding } = JSON.parse(res)
          resolve(bounding)
        })
        .catch(err => console.log(err))
    })
  }

  getTasks (id) {
  }

  toDBObjects (records) {
    const sqlObjects = records.map(challenge => {
      return {
        name: challenge.name,
        description: challenge.description,
        tm_id: challenge.id,
        priority: challenge.defaultPriority,
        created_at: challenge.created,
        updated_at: challenge.modified,
        tasker_id: this.tasker_id,
        geometry: challenge.bounding,
        // HARD CODED VALUES
        status: 'PUBLISHED',
        // TODO Need to query this from MR api
        campaign_hashtag: 'test',
        validated: 0, // placeholder
        done: 0 // placeholder value
      }
    })
      .filter(obj => obj.tm_id > 0)
    return sqlObjects
  }

  updateDB (db, dbObjects) {
    const campaignProms = dbObjects.map(obj => limit(async () => {
      let rows = await db('campaigns').where({ 'tm_id': obj.tm_id, 'tasker_id': obj.tasker_id })

      const dataRes = await rp({
        uri: `${this.api_url}/api/v2/data/challenge/${obj.tm_id}`,
        headers: { 'Accept-Language': 'en-US,en;q=0.9' }
      })
      try {
        const [{ actions: data }] = JSON.parse(dataRes)
        obj.done = (1 - data.available / data.total) * 100
        obj.validated = data.validated / data.total * 100
      } catch (e) {
        if (e instanceof TypeError) {
          console.error(`Challenge ${obj.tm_id} does not have available metadata`)
        }
      }

      if (rows.length === 0) {
        // not found
        return db('campaigns').insert(obj)
      } else {
        return db('campaigns').where('id', rows[0].id).update(obj)
      }
    }))
    return Promise.all(campaignProms)
  }
}

module.exports = MapRouletteAPI
