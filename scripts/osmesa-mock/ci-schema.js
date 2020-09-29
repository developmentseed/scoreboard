/*
  create the osmesa database schema via a node.js script.
  this is a workaround for CI because in the development environment,
  the database is loaded via different method: :/docker-entrypoint-initdb.d/init.sql
  which will not work in github action's service containers.
 */

const fs = require('fs')
const { Client } = require('pg')

const dsn = process.env.DATABASE_URL
if (!dsn) {
  throw new Error('missing DATABASE_URL')
}

const script = fs.readFileSync('scripts/osmesa-mock/ci-schema.sql').toString()
const client = new Client({
  connectionString: dsn
})
client
  .connect()
  .then(() => {
    console.log('connected')
    console.log('executing query...')
    client.query(script, (err, res) => {
      if (err) {
        throw err
      }
      console.log(`OK (${res.length} results)`)
      client.end()
    })
  })
