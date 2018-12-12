const countries = require('../../../../lib/utils/country-list.json')
const { subDays, format, getTime } = require('date-fns')

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

const randomInt = () => parseInt(Math.floor(Math.random() * 1000000))
const randomFloat = () => parseFloat(Math.random() * 1000000).toFixed(2)

function generateOSMesaUser (id, name) {
  let editedCountries = []
  let editedHashtags = []
  let editedTimes = []
  for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
    let index = Math.floor(Math.random() * (countries.length - 1))

    editedCountries.push({
      'name': countries[index].name,
      'count': Math.floor(Math.random() * 100)
    })

    editedHashtags.push({
      'tag': `project-${i}`,
      'count': Math.floor(Math.random() * 1000)
    })
  }

  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    editedTimes.push({
      'day': format(subDays(new Date(), Math.floor(Math.random() * 365 * 2)), 'YYYY-MM-DD'),
      'count': Math.floor(Math.random() * 10)
    })
  }

  return {
    'uid': id,
    'name': name,
    'extent_uri': 'user/test/{z}/{x}/{y}.mvt',
    'buildings_add': randomInt(),
    'buildings_mod': randomInt(),
    'roads_add': randomInt(),
    'km_roads_add': randomInt(),
    'roads_mod': randomInt(),
    'km_roads_mod': randomInt(),
    'waterways_add': randomInt(),
    'km_waterways_add': randomInt(),
    'poi_add': randomInt(),
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

module.exports.generateUsers = generateUsers
module.exports.generateOSMesaUser = generateOSMesaUser
