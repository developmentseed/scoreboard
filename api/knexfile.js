const def = {
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite3'
  },
  migrations: {
    directory: './db/migrations',
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
