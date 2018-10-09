const path = require('path')

const def = {
  client: 'sqlite3',
  connection: {
    filename: process.env.DB_PATH || path.join(__dirname, 'db.sqlite3')
  },
  migrations: {
    directory: path.join(__dirname, 'db/migrations'),
    tableName: 'knex_migrations'
  },
  useNullAsDefault: true
}

module.exports = {
  test: def,
  development: def,
  staging: def,
  production: def
}
