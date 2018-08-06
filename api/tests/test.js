'use strict'

const knex = require('knex')
const os = require('os')
const path = require('path')
const fs = require('fs-extra')
const connection = require('../db/connection')
// const { test: knexConfig } = require('../knexfile.js')
const test = require('ava')
const users = require('../routes/users')

let tempPath
let db

test.before(async () => {
  tempPath = path.join(os.tmpdir(), 'scoreboard', `${Date.now()}`, path.sep)
  fs.mkdirpSync(tempPath)
  process.env.TEST_DB_FILENAME = path.join(tempPath, 'db.sqlite3')

  db = connection()
  await db.migrate.latest()

  // add a few records
  const a = await db('users').insert({ id: 1, osm_id: 2, edit_count: 3, display_name: 'test', country: 'US' })
  console.log(a)

})

test.after.always(() => {
  fs.removeSync(tempPath)
})

test('my first test', async (t) => {
  console.log(await users({
    query: {}
  }, {
    send: (...args) => console.log(args[0].records)
  }))
  t.is(1, 2)

})