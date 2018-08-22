const knex = require('knex')
const connections = require('./knexfile')
const { NODE_ENV } = require('../config')

// Initialize knex with the development connection

function create() {
  const config = connections[NODE_ENV]
  if (NODE_ENV === 'test') {
    config.connection.database = 'scoreboard_tests'
  }

  return knex(config)
}

module.exports = create
