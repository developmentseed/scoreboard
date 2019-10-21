const usersClock = require('../../../users_clock')
const { OSMESA_DB } = require('../../../config')
const osmesaDB = require('knex')({
  client: 'pg',
  connection: OSMESA_DB
})

exports.seed = (knex) => knex('users').del() // delete entries
  .then(async () => {
    const users = await osmesaDB('users').select('id as osm_id', 'name as full_name')
    return knex('users').insert(users)
  })
  .then(usersClock)
