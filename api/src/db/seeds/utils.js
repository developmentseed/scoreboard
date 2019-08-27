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

function generateOSMesaUser (id, name) {
  const rand = gen.create(id)
  let editedCountries = []
  let editedHashtags = []
  let editedTimes = []

  const randomInt = () => parseInt(Math.floor(rand.random() * 1000000))

  for (let i = 20; i < 120; i++) {
    editedHashtags.push({
      'tag': `project-${i}`,
      'edit_count': Math.floor(rand.random() * 1000),
      'changeset_count': Math.floor(rand.random() * 1000)
    })
  }

  for (let i = 1; i < Math.floor(rand.random() * 30); i++) {
    let index = Math.floor(rand.random() * (countries.length - 1))
    editedCountries.push({
      'name': countries[index].name,
      'edit_count': Math.floor(rand.random() * 100),
      'changeset_count': Math.floor(rand.random() * 100)
    })
  }

  for (let i = 0; i < Math.floor(rand.random() * 100); i++) {
    editedTimes.push({
      'day': format(subDays(new Date(), Math.floor(rand.random() * 365 * 2)), 'YYYY-MM-DD'),
      'count': Math.floor(rand.random() * 10)
    })
  }

  return {
    'uid': id,
    'name': name,
    'extent_uri': 'user/test/{z}/{x}/{y}.mvt',
    'buildings_add': randomInt(),
    'buildings_mod': randomInt(),
    'buildings_del': randomInt(),
    'roads_add': randomInt(),
    'km_roads_add': randomInt(),
    'roads_mod': randomInt(),
    'km_roads_mod': randomInt(),
    'roads_del': randomInt(),
    'km_roads_del': randomInt(),
    'railways_add': randomInt(),
    'km_railways_add': randomInt(),
    'railways_mod': randomInt(),
    'km_railways_mod': randomInt(),
    'railways_del': randomInt(),
    'km_railways_del': randomInt(),
    'waterways_add': randomInt(),
    'km_waterways_add': randomInt(),
    'waterways_mod': randomInt(),
    'km_waterways_mod': randomInt(),
    'waterways_del': randomInt(),
    'km_waterways_del': randomInt(),
    'coastlines_add': randomInt(),
    'km_coastlines_add': randomInt(),
    'coastlines_mod': randomInt(),
    'km_coastlines_mod': randomInt(),
    'coastlines_del': randomInt(),
    'km_coastlines_del': randomInt(),
    'poi_add': randomInt(),
    'poi_mod': randomInt(),
    'poi_del': randomInt(),
    'changeset_count': randomInt(),
    'edit_count': randomInt(),
    'editors': [
      {
        'editor': 'iD',
        'count': randomInt()
      },
      {
        'editor': 'JOSM',
        'count': randomInt()
      }
    ],
    'edit_times': editedTimes,
    'country_list': editedCountries,
    'hashtags': editedHashtags
  }
}

// example of new user schema

/*
{
    "changeset_count": 112,
    "country_changesets": {
        "BFA": 11,
        "CHN": 15,
        "CUB": 410,
        "ERI": 206,
        "IRN": 1,
        "IRQ": 62,
        "JAM": 8,
        "JPN": 39,
        "KEN": 26,
        "MEX": 9,
        "NER": 1,
        "NPL": 2,
        "SAU": 8,
        "SDS": 40,
        "SOL": 7,
        "SOM": 1,
        "VEN": 1,
        "VGB": 8,
        "YEM": 2
    },
    "country_edits": {
        "BFA": 93,
        "CHN": 166,
        "CUB": 6415,
        "ERI": 3325,
        "IRN": 2,
        "IRQ": 754,
        "JAM": 192,
        "JPN": 536,
        "KEN": 60,
        "MEX": 48,
        "NER": 115,
        "NPL": 2,
        "SAU": 12,
        "SDS": 935,
        "SOL": 44,
        "SOM": 9,
        "VEN": 3,
        "VGB": 248,
        "YEM": 5
    },
    "counts": {
        "buildings_added": 9078,
        "buildings_modified": 1004,
        "coastlines_added": 2,
        "coastlines_modified": 19,
        "other_added": 501,
        "other_modified": 269,
        "pois_added": 55,
        "pois_modified": 24,
        "raillines_added": 1,
        "raillines_modified": 16,
        "roads_added": 1310,
        "roads_modified": 1289,
        "waterways_added": 26,
        "waterways_modified": 13
    },
    "day_changesets": {
        "2016-03-31": 4,
        "2016-04-04": 30,
        "2016-04-05": 20,
        "2016-04-06": 30,
        "2016-04-07": 28
    },
    "edit_count": 13607,
    "editor_changesets": {
        "JOSM/1.5 (11846 SVN en)": 122,
        "Osmosis 0.45-52-gd4e52fd-SNAPSHOT": 16,
        "iD 1.8.5": 281,
        "iD 1.9.7": 2,
        "iD 2.1.3": 16,
        "iD 2.2.2": 3
    },
    "editor_edits": {
        "JOSM/1.5 (11846 SVN en)": 1249,
        "Osmosis 0.45-52-gd4e52fd-SNAPSHOT": 426,
        "iD 1.8.5": 264,
        "iD 1.9.7": 2,
        "iD 2.1.3": 67,
        "iD 2.2.2": 7
    },
    "hashtag_changesets": {
      "project1": 6,
      "project2": 334,
      "project3": 26,
      "project4": 23,
      "project5": 41
    },
    "hashtag_edits": {
      "project1": 29,
      "project2": 4701,
      "project3": 386,
      "project4": 209,
      "project5": 922
    },
    "last_edit": "2017-10-05T16:57:00Z",
    "measurements": {
      "coastline_km_added": 1.400289389349854,
      "coastline_km_modified": 86.26676638074764,
      "railline_km_added": 0.12335684241334144,
      "railline_km_modified": 7.0846382622749084,
      "road_km_added": 386.319668455548,
      "road_km_modified": 1217.1720400033741,
      "waterway_km_added": 20.79930559655762,
      "waterway_km_modified": 44.66342334900786
    },
    "name": "test",
    "uid": 1,
    "updated_at": "2019-08-22T17:22:07.325945Z"
}
*/

module.exports = {
  generateUsers,
  generateOSMesaUser,
  generateOSMesaStatus
}
