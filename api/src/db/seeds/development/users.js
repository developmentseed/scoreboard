const usersClock = require('../../../users_clock')

const { cache } = require('../../../config')

exports.seed = (knex) => knex('users').del() // delete entries
  .then(async () => {
    const osmesaDB = require('knex')({
      client: 'pg',
      connection: cache.get('osmesa-db')
    })

    const users = await osmesaDB('users').select('id as osm_id', 'name as full_name')
    return knex('users').insert(users)
  })
  .then(usersClock)
