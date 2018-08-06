const knex = require('knex')
const connections = require('../knexfile')
const { NODE_ENV } = require('../config')

// Initialize knex with the development connection

function create() {
  const config = connections[NODE_ENV]
  if (NODE_ENV === 'test') {
    config.connection.filename = process.env.TEST_DB_FILENAME
  }

  return knex(config)
}

module.exports = create
