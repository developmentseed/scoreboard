'use strict'

const os = require('os')
const path = require('path')
const fs = require('fs-extra')
const nock = require('nock')
const test = require('ava')
const request = require('supertest')
const connection = require('../db/connection')
const app = require('../index')
const osmesa = require('./fixtures/osmesa_api_user_output.json')
const mostRecentlyActive = require('./fixtures/most_recently_active')
const leastRecentlyActive = require('./fixtures/least_recently_active')
const mostEdits = require('./fixtures/most_edits')
const leastEdits = require('./fixtures/least_edits')

const {
  OSMESA_API
} = require('../config')

let tempPath
let db

test.before(async () => {
  tempPath = path.join(os.tmpdir(), 'scoreboard', `${Date.now()}`, path.sep)
  fs.mkdirpSync(tempPath)
  process.env.TEST_DB_FILENAME = path.join(tempPath, 'db.sqlite3')

  db = connection()
  await db.migrate.latest()
  // add a few records
  await db('users').insert([{
    id: 1, osm_id: 2, edit_count: 3, display_name: 'A', country: 'US', last_edit: '500'
  },
  {
    id: 2, osm_id: 3, edit_count: 5, display_name: 'B', country: 'Norway', last_edit: '250'
  },
  {
    id: 3, osm_id: 4, edit_count: 10, display_name: 'C', country: 'Portugal', last_edit: '5'
  },
  {
    id: 4, osm_id: 1, edit_count: 25, display_name: 'D', country: 'US', last_edit: '700'
  }]
  ) //eslint-disable-line function-paren-newline
  nock(OSMESA_API)
    .get('/users/1')
    .reply(200, osmesa)
})

test.after.always(() => {
  fs.removeSync(tempPath)
})

test('Test of OSMESA api call', async (t) => {
  const res = await request(app)
    .get('/scoreboard/api/users/1')
    .expect(200)
  t.is(res.body.id, '1')
})

test('Pull all users', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users')
    .expect(200)
  t.is(4, response.body.records.length)
})

test('Sort users by most recently active', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users?q=&page=1&sortType=Most%20recent&active=false')
    .expect(200)
  t.deepEqual(response.body.records, mostRecentlyActive)
})

test('Sort users by least recently active', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users?q=&page=1&sortType=Least%20recent&active=false')
    .expect(200)
  t.deepEqual(response.body.records, leastRecentlyActive)
})

test('Sort users by most edits', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users?q=&page=1&sortType=Most%20total&active=false')
    .expect(200)
  t.deepEqual(response.body.records, mostEdits)
})

test('Sort users by least edits', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users?q=&page=1&sortType=Least%20total&active=false')
    .expect(200)
  t.deepEqual(response.body.records, leastEdits)
})
