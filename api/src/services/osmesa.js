const rp = require('request-promise-native')
const fs = require('fs')
const path = require('path')
const knex = require('knex')

const { OSMESA_API, OSMESA_DB } = require('../config')
const { generateOSMesaUser, generateOSMesaStatus } = require('../db/seeds/utils')

const osmesaUserObj = {
  uid: -1,
  name: '',
  edit_count: 0,
  buildings_add: 0,
  buildings_mod: 0,
  buildings_del: 0,
  roads_add: 0,
  km_roads_add: 0,
  roads_mod: 0,
  km_roads_mod: 0,
  roads_del: 0,
  km_roads_del: 0,
  railways_add: 0,
  km_railways_add: 0,
  railways_mod: 0,
  km_railways_mod: 0,
  railways_del: 0,
  km_railways_del: 0,
  waterways_add: 0,
  km_waterways_add: 0,
  waterways_mod: 0,
  km_waterways_mod: 0,
  waterways_del: 0,
  km_waterways_del: 0,
  coastlines_add: 0,
  coastlines_mod: 0,
  coastlines_del: 0,
  km_coastlines_add: 0,
  km_coastlines_mod: 0,
  km_coastlines_del: 0,
  poi_add: 0,
  poi_mod: 0,
  poi_del: 0,
  changeset_count: 0,
  editors: [],
  edit_times: [],
  country_list: [],
  hashtags: []
}

module.exports.osmesaUserObj = osmesaUserObj

class OSMesaDBWrapper {
  constructor () {
    this.db = knex({
      client: 'pg',
      connection: OSMESA_DB
    })

    this.editTypes = [
      ['added', 'add'],
      ['modified', 'mod'],
      ['deleted', 'del']
    ]

    this.countConversions = [
      ['roads', 'roads'],
      ['waterways', 'waterways'],
      ['coastlines', 'coastlines'],
      ['buildings', 'buildings'],
      ['pois', 'poi']
    ]

    this.measurementConversions = [
      ['road', 'roads'],
      ['waterway', 'waterways'],
      ['coastline', 'coastlines'],
      ['railline', 'railway']
    ]
  }

  // turns the new schema into the old schema for objects like user_edits
  expandCountObj (type, obj) {
    return Object.keys(obj).map((key) => {
      return {
        [type]: type === 'user' ? Number(key) : key,
        count: obj[key]
      }
    })
  }

  convertCountProperties (target, source) {
    this.countConversions.forEach(count => {
      this.editTypes.forEach(type => {
        if (
          target &&
          source &&
          source.count &&
          source.count[`${count[0]}_km_${type[0]}`]
        ) {
          target[`km_${count[1]}_${type[1]}`] = source.count[`${count[0]}_km_${type[0]}`]
        }
      })
    })
  }

  convertMeasurementProperties (target, source) {
    this.measurementConversions.forEach(meas => {
      this.editTypes.forEach(type => {
        if (
          target &&
          source &&
          source.measurements &&
          source.measurements[`${meas[0]}_km_${type[0]}`]
        ) {
          target[`km_${meas[1]}_${type[1]}`] = source.measurements[`${meas[0]}_km_${type[0]}`]
        }
      })
    })
  }

  async getUser (id) {
    let [data] = await this.db('user_statistics').where({ id })

    // change shape of response
    const {
      edit_count,
      changeset_count,
      name,
      last_edit,
      editor_edits: editors,
      day_edits: edit_times,
      hashtag_edits: hashtags,
      country_edits: country_list
    } = data

    const userObj = {
      uid: data.id,
      name,
      edit_count,
      changeset_count,
      last_edit,
      editors,
      edit_times,
      hashtags,
      country_list
    }

    this.convertCountProperties(userObj, data)
    this.convertMeasurementProperties(userObj, data)
    return userObj
  }

  async getCampaign (hashtag_id) {
    const [data] = await this.db('hashtag_statistics').where({ hashtag_id })
    const { tag } = data

    const campaignObj = {
      tag,
      extent_uri: `hashtag/${tag}/{z}/{x}/{y}.mvt`,
      // TODO: is users suppused to be the full user statistics for each user?
      users: []
    }

    this.convertCountProperties(campaignObj, data)
    this.convertMeasurementProperties(campaignObj, data)
    return campaignObj
  }

  async getCountry (country_code) {
    const [data] = await this.db('country_statistics').where({ country_code })

    const {
      country_id,
      country_name,
      edit_count,
      changeset_count,
      last_edit,
      updated_at,
      hashtag_edits,
      user_edits
    } = data

    const countryObj = {
      country_id,
      name: country_name,
      last_edit,
      updated_at,
      changeset_count,
      edit_count,
      user_edits: this.expandCountObj('user', user_edits),
      hashtag_edits: this.expandCountObj('hashtag', hashtag_edits)
    }

    this.convertCountProperties(countryObj, data)
    this.convertMeasurementProperties(countryObj, data)
    return countryObj
  }

  async getUpdates () {
    const data = await this.db('refreshments').select()

    return data.reduce((obj, { mat_view, updated_at }) => {
      switch (mat_view) {
        case 'country_statistics': {
          obj.country_stats_refresh = updated_at
          break
        }
        case 'hashtag_statistics': {
          obj.hashtag_stats_refresh = updated_at
          break
        }
        case 'hashtag_user_statistics': {
          obj.hashtag_user_stats_refresh = updated_at
          break
        }
        case 'user_statistics': {
          obj.stats_user_refresh = updated_at
          break
        }
      }

      return obj
    })
  }
}

/**
 * Methods to grab data from OSMesa stat server
 */
class OSMesaAPI {
  /* Get a user by id from the OSMesa API
   *
   * @param {string} id - User ID
   * @returns {Promise} response
   */
  getUser (id) {
    return rp(`${OSMESA_API}/users/${id}`)
  }

  getCampaign (id) {
    return rp(`${OSMESA_API}/campaigns/${id}`)
  }

  getCountry (code) {
    return rp(`${OSMESA_API}/country-stats/${code}`)
  }

  getUpdates () {
    return rp(`${OSMESA_API}/status`)
  }
}

class FakeOSMesaAPI {
  getUser (id) {
    const sampleuser = generateOSMesaUser(id, `test${(id - 100000000)}`)
    return Promise.resolve(JSON.stringify(sampleuser))
  }

  getCampaign (id) {
    // to check the notfound page we fake a 404 response
    if (id === 'notfound') {
      return Promise.reject(new Error('not found'))
    }
    const samplecampaign = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'samplecampaign.json'), 'utf-8'))
    for (let i = 0; i < 10; i++) {
      let user = generateOSMesaUser(100000000 + i, `test${i}`)
      user['edits'] = user['changeset_count']
      samplecampaign.users.push(user)
    }
    samplecampaign.tag = `project-${id}`
    return Promise.resolve(JSON.stringify(samplecampaign))
  }

  getCountry (code) {
    // to check the notfound page we fake a 404 response
    if (code === 'notfound') {
      return Promise.reject(new Error('not found'))
    }
    const samplecountry = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'samplecountry.json'), 'utf-8'))
    samplecountry.tag = `${code}`
    return Promise.resolve(JSON.stringify(samplecountry))
  }

  getUpdates () {
    const status = generateOSMesaStatus()
    return Promise.resolve(JSON.stringify(status))
  }
}

if (OSMESA_DB) {
  module.exports = new OSMesaDBWrapper()
} else if (!OSMESA_API) {
  module.exports = new FakeOSMesaAPI()
} else {
  module.exports = new OSMesaAPI()
}
