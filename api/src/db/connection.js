const knex = require('knex')
const connections = require('./knexfile')
const { NODE_ENV } = require('../config')

// Initialize knex with the development connection
const config = connections[NODE_ENV]

if (process.env.CI) {
  // If in a CI the connection is the database url
  config.connection = process.env.DATABASE_URL
}

module.exports = knex(config)
