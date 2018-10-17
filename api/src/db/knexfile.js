const path = require('path')
const config = require('../config')

const test = {
  client: 'pg',
  debug: process.env.KNEX_DEBUG || false,
  seeds: {
    directory: path.join(__dirname, 'seeds', 'test')
  },
  connection: config.DATABASE_URL,
  migrations: {
    directory: path.join(__dirname, './migrations'),
    tableName: 'knex_migrations'
  },
  useNullAsDefault: true

}

const def = {
  client: 'pg',
  connection: config.DATABASE_URL,
  migrations: {
    directory: path.join(__dirname, './migrations'),
    tableName: 'knex_migrations'
  },
  useNullAsDefault: true
}

module.exports = {
  test: test,
  development: Object.assign({}, {
    seeds: {
      directory: path.join(__dirname, 'seeds', 'development')
    },
    debug: process.env.KNEX_DEBUG || false
  }, def),
  staging: def,
  production: def
}
