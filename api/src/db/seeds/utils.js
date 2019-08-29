const countries = require('../../../../lib/utils/country-list.json')
const { subDays, format, getTime, subMinutes } = require('date-fns')
const gen = require('random-seed')

/*
 * n => [users] array of size n
 */
function generateUsers (n, knex) {
  const countryNames = countries.map(c => c.name)
  const users = []
  for (let i = 0; i < n; i += 1) {
    const last_edit = getTime(subDays(new Date(), Math.floor(Math.random() * 365 * 2))) / 1000.0
    const user = {
      osm_id: 100000000 + i,
      full_name: `test${i} McTest`,
      country: countryNames[parseInt(Math.random() * (countryNames.length - 1))],
      edit_count: Math.floor(Math.random() * 100000000),
      last_edit: knex.raw(`to_timestamp(${last_edit})`)
    }

    users.push(user)
  }

  const usersWithStamps = users.map((user) => Object.assign({}, {
    created_at: knex.fn.now(),
    updated_at: knex.fn.now()
  }, user))

  return usersWithStamps
}

function generateOSMesaStatus () {
  const stats = ['user_stats_refresh', 'hashtag_stats_refresh', 'country_stats_refresh']
  let stats_return = {}
  stats.forEach((stat) => {
    stats_return[stat] = getTime(subMinutes(new Date(), Math.floor(Math.random() * 120)))
  })
  return stats_return
}

const dataTypes = [
  'buildings',
  'coastlines',
  'other',
  'pois',
  'raillines',
  'roads',
  'waterways'
]

const measurementTypes = [
  'coastline',
  'railline',
  'road',
  'waterway'
]

const editTypes = [
  'added',
  'deleted',
  'modified'
]

const editorExamples = [
  'iD 1.8.5',
  'iD 1.9.7',
  'iD 2.0.0',
  'iD 2.1.3',
  'iD 2.11.1',
  'iD 2.12.2',
  'iD 2.3.2',
  'iD 2.7.0',
  'JOSM/1.5 (10010 SVN en)',
  'JOSM/1.5 (10025 SVN en)',
  'JOSM/1.5 (10161 en)',
  'JOSM/1.5 (10253 SVN en)',
  'JOSM/1.5 (10327 SVN en)',
  'JOSM/1.5 (11370 SVN en)',
  'JOSM/1.5 (9979 en)',
  'Osmosis 0.45-52-gd4e52fd-SNAPSHOT'
]

function generateOSMesaUser (id, name) {
  const rand = gen.create(id)

  function randomDate () {
    return subDays(new Date(), Math.floor(rand.random() * 365 * 2))
  }

  function randomDateIso () {
    return format(randomDate(), 'YYYY-MM-DD[T]HH:mm:ssZZ')
  }

  function createCountsObject () {
    return dataTypes.reduce((obj, item) => {
      for (let edit in editTypes) {
        const amount = rand.intBetween(-200, 500)
        if (amount > 0) {
          obj[`${item}_${editTypes[edit]}`] = amount
        }
      }
      return obj
    }, {})
  }

  function createCountriesObject () {
    return countries.reduce((obj, country) => {
      const amount = rand.intBetween(0, 500)
      if (amount > 0) {
        obj[country.code] = amount
      }
      return obj
    }, {})
  }

  function createMeasurementsObject () {
    return measurementTypes.reduce((obj, item) => {
      for (let edit in editTypes) {
        const amount = rand.floatBetween(-10, 100)
        if (amount > 0) {
          obj[`${item}_km_${editTypes[edit]}`] = amount
        }
      }
      return obj
    }, {})
  }

  function createHashtagsObject () {
    const obj = {}
    let i = 0
    for (i; i <= 100; i++) {
      const amount = rand.intBetween(-500, 500)
      if (amount > 0) {
        obj[`project-${i}`] = amount
      }
    }
    return obj
  }

  function createDateRangeObject () {
    const date = new Date()
    const obj = {}
    let i = 0
    for (i; i <= 100; i++) {
      const amount = rand.intBetween(-500, 500)
      if (amount > 0) {
        const d = format(subDays(date, i), 'YYYY-MM-DD')
        obj[d] = amount
      }
    }
    return obj
  }

  function createEditorsObject () {
    return editorExamples.reduce((obj, editor) => {
      const amount = rand.intBetween(-500, 500)
      if (amount > 0) {
        obj[editor] = amount
      }
      return obj
    }, {})
  }

  return {
    changeset_count: rand.intBetween(1, 100),
    country_changesets: createCountriesObject(),
    country_edits: createCountriesObject(),
    counts: createCountsObject(),
    day_edits: createDateRangeObject(),
    day_changesets: createDateRangeObject(),
    edit_count: rand.intBetween(1, 10000),
    editor_changesets: createEditorsObject(),
    editor_edits: createEditorsObject(),
    hashtag_changesets: createHashtagsObject(),
    hashtag_edits: createHashtagsObject(),
    last_edit: randomDateIso(),
    measurements: createMeasurementsObject(),
    name: name,
    uid: id,
    updated_at: randomDateIso()
  }
}

module.exports = {
  generateUsers,
  generateOSMesaUser,
  generateOSMesaStatus
}
