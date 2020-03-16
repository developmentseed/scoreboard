const pg = require('pg')
// conversion of postgresql bigint (int8) to JS number (from https://github.com/knex/knex/issues/387)
pg.types.setTypeParser(pg.types.builtins.INT8, 'text', parseInt)
const knex = require('knex')
const AWS = require('aws-sdk')
const {
  assoc,
  find,
  propEq,
  reduce,
  sum
} = require('ramda')

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

const editTypes = [
  ['added', 'add'],
  ['modified', 'mod'],
  ['deleted', 'del']
]

const countConversions = [
  ['roads', 'roads'],
  ['waterways', 'waterways'],
  ['coastlines', 'coastlines'],
  ['buildings', 'buildings'],
  ['pois', 'poi'],
  ['raillines', 'railways']
]

const measurementConversions = [
  ['road', 'roads'],
  ['waterway', 'waterways'],
  ['coastline', 'coastlines'],
  ['railline', 'railways']
]

function expandCountObj (type, obj) {
  return Object.keys(obj).map((key) => {
    return {
      [type]: type === 'user' ? Number(key) : key,
      count: obj[key]
    }
  })
}

/**
 * Convert osmesa measurement properties to the shape required by Scoreboard app.
 *
 * Warning: modifies the target object in addition to returning it!
 *
 * @param {Object} target
 * @param {Object} source
 * @returns {Object} converted target object
 */
function convertMeasurementProperties (target, source) {
  measurementConversions.forEach(meas => {
    editTypes.forEach(type => {
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

/**
 * Convert osmesa count properties to the shape required by scoreboard app.
 *
 * Warning: modifies the target object in addition to returning it!
 *
 * @param {Object} target
 * @param {Object} source
 * @returns {Object} converted target object
 */
function convertCountProperties (target, source) {
  countConversions.forEach(count => {
    editTypes.forEach(type => {
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

/**
 * Convert user object from osmesa shape to what is required by scoreboard app.
 *
 * @param {Array} countries result set from osmesa countries table
 * @param {Object} osmesaUserStats object from osmesa user_statistics table
 * @returns {Object} converted user object
 */
function convertUserObjectShape (countries, osmesaUserStats) {
  const {
    id: uid,
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
  } = osmesaUserStats

  const country_list = []
  Object.keys(country_edits).forEach(code => {
    const countryName = find(propEq('code', code))(countries).name
    country_list.push({
      name: countryName,
      edit_count: country_edits[code],
      changeset_count: country_changesets[code]
    })
  })

  const hashtags = Object.keys(hashtag_edits).map(hashtag => {
    return {
      tag: hashtag,
      edit_count: hashtag_edits[hashtag],
      changeset_count: hashtag_changesets[hashtag]
    }
  })

  const editors = expandCountObj('editor', editor_edits)
  const edit_times = expandCountObj('day', day_edits)

  const userObj = {
    uid,
    name,
    edit_count,
    changeset_count,
    last_edit,
    editors,
    edit_times,
    hashtags,
    country_list
  }

  convertCountProperties(userObj, osmesaUserStats)
  convertMeasurementProperties(userObj, osmesaUserStats)
  return userObj
}

class OSMesaDBWrapper {
  constructor () {
    // connection the odmesa db
    this.dbUrl = null
    this.dbConn = knex({ client: 'pg', connection: this.dbUrl })

    // connection to s3
    this.s3bucket = null
    this.s3client = null
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

  async getUser (id) {
    const [data] = await this.db('user_statistics').where({ id })
    const countries = await this.db('countries').select()
    return convertUserObjectShape(countries, data)
  }

  /**
   * Get aggregate data for a list of OSM ids (e.g. all the team members),
   * Includes original user statistics in the response as well.
   *
   * @param {Array} userIds - OSM user Ids of team members
   * @returns {Object} aggregate data and per-user statistics {teamStats, memberStats}
   */
  async getTeamStats (userIds) {
    const userData = await this.db('user_statistics').whereIn('id', userIds)
    const countries = await this.db('countries').select()
    const memberStats = userData.map(data => convertUserObjectShape(countries, data))
    const columnsToSum = [
      'buildings_add',
      'buildings_del',
      'buildings_mod',
      'changeset_count',
      'coastlines_add',
      'coastlines_del',
      'coastlines_mod',
      'edit_count',
      'km_coastlines_add',
      'km_coastlines_del',
      'km_coastlines_mod',
      'km_railways_add',
      'km_railways_del',
      'km_railways_mod',
      'km_roads_add',
      'km_roads_del',
      'km_roads_mod',
      'km_waterways_add',
      'km_waterways_del',
      'km_waterways_mod',
      'poi_add',
      'poi_del',
      'poi_mod',
      'railways_add',
      'railways_del',
      'railways_mod',
      'roads_add',
      'roads_del',
      'roads_mod',
      'waterways_add',
      'waterways_del',
      'waterways_mod'
    ]
    // sum all of the columns into teamStats
    const teamStats = {}
    columnsToSum.forEach(columnName => {
      teamStats[columnName] = sum(memberStats.map(data => data[columnName]))
    })
    // count the unique countries which were edited
    const editedCountries = new Set()
    memberStats.forEach(
      ({ country_list }) => country_list.forEach(
        ({ name }) => editedCountries.add(name)
      )
    )
    teamStats.countryCount = editedCountries.size

    const result = {
      teamStats,
      memberStats
    }
    return result
  }

  async getCampaign (hashtag) {
    const [data] = await this.db('hashtag_statistics').where({ tag: hashtag })
    const userData = await this.db('hashtag_user_statistics').where({ hashtag })

    const users = userData.map(user => {
      const userObj = {
        uid: user.user_id,
        name: user.name,
        edit_count: user.edit_count,
        changeset_count: user.changeset_count,
        last_edit: user.last_edit
      }
      convertCountProperties(userObj, user)
      convertMeasurementProperties(userObj, user)
      return userObj
    })

    const { tag } = data

    const campaignObj = {
      tag,
      extent_uri: `hashtag/${tag}/{z}/{x}/{y}.mvt`,
      users
    }

    convertCountProperties(campaignObj, data)
    convertMeasurementProperties(campaignObj, data)
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
      user_edits: expandCountObj('user', user_edits),
      hashtag_edits: expandCountObj('hashtag', hashtag_edits)
    }

    convertCountProperties(countryObj, data)
    convertMeasurementProperties(countryObj, data)
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
