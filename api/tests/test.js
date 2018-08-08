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
const userData = require('./fixtures/user_data.json')

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
  await db('users').insert(userData)
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
  const users = userData
  users.sort((a, b) => b.last_edit - a.last_edit)
  const resCopy = response.body.records
  resCopy.forEach((x) => {
    delete x.rank
  })
  t.deepEqual(resCopy, users)
})

test('Sort users by least recently active', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users?q=&page=1&sortType=Least%20recent&active=false')
    .expect(200)
  const users = userData
  users.sort((a, b) => a.last_edit - b.last_edit)
  const resCopy = response.body.records
  resCopy.forEach((x) => {
    delete x.rank
  })
  t.deepEqual(resCopy, users)
})

test('Sort users by most edits', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users?q=&page=1&sortType=Most%20total&active=false')
    .expect(200)
  const users = userData
  users.sort((a, b) => b.edit_count - a.edit_count)
  const resCopy = response.body.records
  resCopy.forEach((x) => {
    delete x.rank
  })
  t.deepEqual(resCopy, users)
})

test('Sort users by least edits', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users?q=&page=1&sortType=Least%20total&active=false')
    .expect(200)
  const users = userData
  users.sort((a, b) => a.edit_count - b.edit_count)
  const resCopy = response.body.records
  resCopy.forEach((x) => {
    delete x.rank
  })
  t.deepEqual(resCopy, users)
})
