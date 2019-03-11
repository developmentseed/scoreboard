const generateUsers = require('../utils').generateUsers
const usersClock = require('../../../users_clock')

exports.seed = (knex) => knex('users').del() // delete entries
  .then(() => knex('users').insert(generateUsers(30, knex)))
  .then(usersClock)
