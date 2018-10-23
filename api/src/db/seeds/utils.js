const countries = require('i18n-iso-countries')

/*
 * n => [users] array of size n
 */
function generateUsers(n, knex) {
  const countryIds = Object.keys(countries.getNames('en'))
  const users = []
  for (let i = 0; i < n; i += 1) {
    const user = {
      osm_id: 100000000 + i,
      full_name: `test${i} McTest`,
      country: countryIds[parseInt(Math.random() * (countryIds.length - 1))]
    }

    users.push(user)
  }

  const usersWithStamps = users.map((user) => Object.assign({}, {
    created_at: knex.fn.now(),
    updated_at: knex.fn.now()
  }, user))

  return usersWithStamps
}

module.exports.generateUsers = generateUsers
