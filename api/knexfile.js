const def = {
  client: 'sqlite3',
  connection: {
    filename: process.env.DB_PATH || './db.sqlite3'
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'knex_migrations'
  },
  useNullAsDefault: true
}

module.exports = {
  development: def,
  staging: def,
  production: def
}
