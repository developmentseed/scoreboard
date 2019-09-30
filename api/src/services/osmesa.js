const rp = require('request-promise-native')
const fs = require('fs')
const path = require('path')
const knex = require('knex')

const { OSMESA_API, OSMESA_DB } = require('../config')
const { generateOSMesaUser, generateOSMesaStatus } = require('../db/seeds/utils')

export const osmesaUserObj = {
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

class OSMesaDBWrapper {
  constructor () {
    this.db = knex({
      client: 'pg',
      connection: OSMESA_DB
    })
  }

  async getUser (id) {
    let conn = await this.db()
    let data = await conn('user_statistics').where({ id })

    // change shape of response
    const { edit_count, changeset_count, name, last_edit,
      editor_edits: editors,
      day_edits: edit_times,
      hashtag_edits: hashtags,
      country_edits: country_list
    } = data

    const measurementConversions = [
      ['road', 'roads'],
      ['waterway', 'waterways'],
      ['coastline', 'coastlines'],
      ['railline', 'railway']
    ]

    const countConversions = [
      ['roads', 'roads'],
      ['waterways', 'waterways'],
      ['coastlines', 'coastlines'],
      ['buildings', 'buildings'],
      ['pois', 'poi']
    ]

    const editTypes = [
      ['added', 'add'],
      ['modified', 'mod'],
      ['deleted', 'del']
    ]

    let userObj = {
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

    measurementConversions.forEach(meas => {
      editTypes.forEach(type => {
        userObj[`km_${meas[1]}_${type[1]}`] = data.measurements[`${meas[0]}_km_${type[0]}`]
      })
    })

    countConversions.forEach(count => {
      editTypes.forEach(type => {
        userObj[`km_${count[1]}_${type[1]}`] = data.count[`${count[0]}_km_${type[0]}`]
      })
    })
    return userObj
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
