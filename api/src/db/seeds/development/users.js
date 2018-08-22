const generateUsers = require('../utils').generateUsers

exports.seed = (knex) => knex('users').del() // delete entries
  .then(() => knex('users').insert(generateUsers(8, knex)))
