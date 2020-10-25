const { cache } = require('../../../config')
// const usersClock = require('../../../users_clock')

exports.seed = (knex) => knex('users').del() // delete entries
  .then(async () => {
    const osmesaDB = require('knex')({
      client: 'pg',
      connection: cache.get('osmesa-db')
    })

    const users = await osmesaDB('users').select('id as osm_id', 'name as full_name')

    // Make sure all users are unique
    const seen = new Map()
    users.forEach(u => {
      seen.set(u.osm_id, u)
    })

    return knex('users').insert([...seen.values()])
  })
  // Commented because this is run by ava
  //  .then(usersClock)
