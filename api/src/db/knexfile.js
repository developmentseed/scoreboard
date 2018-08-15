const path = require('path')

const test = {
  client: 'sqlite3',
  connection: {
    filename: ':memory:'
  },
  seeds: {
    directory: path.join(__dirname, 'seeds', 'test')
  },
  migrations: {
    directory: path.join(__dirname, './migrations'),
    tableName: 'knex_migrations'
  },
  useNullAsDefault: true

}

const def = {
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, 'db.sqlite3')
  },
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
    }
  }, def),
  staging: def,
  production: def
}
