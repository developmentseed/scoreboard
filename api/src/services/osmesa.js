const knex = require('knex')
const AWS = require('aws-sdk')

const { find, propEq, reduce, assoc } = require('ramda')

const { cache } = require('../config')

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
    // connection the odmesa db
    this.dbUrl = null
    this.dbConn = knex({ client: 'pg', connection: this.dbUrl })

    // connection to s3
    this.s3bucket = null
    this.s3client = null

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
      ['railline', 'railways']
    ]
  }

  db (tableName) {
    const dbUrl = cache.get('osmesa-db')
    if (dbUrl !== this.dbUrl) {
      this.dbUrl = dbUrl
      this.dbConn = knex({
        client: 'pg',
        connection: this.dbUrl
      })
    }
    return this.dbConn(tableName)
  }

  tiles (prefix, z, x, y) {
    const s3bucket = cache.get('osmesa-s3-bucket')
    const s3prefix = cache.get('osmesa-s3-prefix')
    if (this.s3bucket !== s3bucket) {
      const accessKeyId = cache.get('osmesa-s3-key')
      const secretAccessKey = cache.get('osmesa-s3-secret')
      this.s3bucket = s3bucket
      this.s3client = new AWS.S3({
        accessKeyId,
        secretAccessKey,
        params: {
          Bucket: s3bucket
        }
      })
    }
    return this.s3client.getObject({
      Key: `${s3prefix}/${prefix}/${z}/${x}/${y}.mvt`
    }).createReadStream()
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
          source.counts &&
          source.counts[`${count[0]}_${type[0]}`]
        ) {
          target[`${count[1]}_${type[1]}`] = source.counts[`${count[0]}_${type[0]}`]
        } else {
          target[`${count[1]}_${type[1]}`] = 0
        }
      })
    })

    return target
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
        } else {
          target[`km_${meas[1]}_${type[1]}`] = 0
        }
      })
    })
    return target
  }

  async getUser (id) {
    let [data] = await this.db('user_statistics').where({ id })
    let countries = await this.db('countries').select()

    // change shape of response
    const {
      edit_count,
      changeset_count,
      name,
      last_edit,
      editor_edits,
      day_edits,
      hashtag_edits,
      hashtag_changesets,
      country_edits,
      country_changesets
    } = data

    let country_list = []
    Object.keys(country_edits).forEach(code => {
      const countryName = find(propEq('code', code))(countries).name
      country_list.push({
        name: countryName,
        edit_count: country_edits[code],
        changeset_count: country_changesets[code]
      })
    })

    let hashtags = Object.keys(hashtag_edits).map(hashtag => {
      return {
        tag: hashtag,
        edit_count: hashtag_edits[hashtag],
        changeset_count: hashtag_changesets[hashtag]
      }
    })

    let editors = this.expandCountObj('editor', editor_edits)
    let edit_times = this.expandCountObj('day', day_edits)

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

  async getCampaign (hashtag) {
    const [data] = await this.db('hashtag_statistics').where({ tag: hashtag })
    const userData = await this.db('hashtag_user_statistics').where({ hashtag })

    let users = userData.map(user => {
      const userObj = {
        uid: user.user_id,
        name: user.name,
        edit_count: user.edit_count,
        changeset_count: user.changeset_count,
        last_edit: user.last_edit
      }
      this.convertCountProperties(userObj, user)
      this.convertMeasurementProperties(userObj, user)
      return userObj
    })

    const { tag } = data

    const campaignObj = {
      tag,
      extent_uri: `hashtag/${tag}/{z}/{x}/{y}.mvt`,
      users
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
    if (data.length === 0) {
      return {
        country_statistics: Date.now(),
        hashtag_user_statistics: Date.now(),
        hashtag_statistics: Date.now(),
        user_statistics: Date.now()
      }
    }

    return reduce((acc, curr) => assoc(curr.mat_view, curr.updated_at, acc), {}, data)
  }
}

module.exports = new OSMesaDBWrapper()
