'use strict'

const path = require('path')
const test = require('ava')
const request = require('supertest')
const connection = require('../src/db/connection')
const app = require('../src/index')
const { omit } = require('ramda')

let db
const dbDirectory = path.join(__dirname, '..', 'src', 'db')
const migrationsDirectory = path.join(dbDirectory, 'migrations')
const seedsDirectory = path.join(dbDirectory, 'seeds', 'test')

test.before(async () => {
  db = connection()
  await db.migrate.latest({ directory: migrationsDirectory })
  await db.seed.run({ directory: seedsDirectory })
})

test.after.always(async () => {
  await db.migrate.rollback({ directory: migrationsDirectory })
  await db.destroy()
})

test('Test of OSMESA api call', async (t) => {
  const res = await request(app)
    .get('/scoreboard/api/users/100000000')
    .expect(200)
  // name should always be included
  t.true('name' in res.body.records)
  // country list should be a list of objects
  t.true(typeof res.body.records.country_list[0] === 'object' &&
    res.body.records.country_list[0] !== null)
  // edit_count should always be a number
  t.false(Number.isNaN(res.body.records.edit_count))
})

test('Pull all users with stats', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users/stats')
    .expect(200)
  // country should always be included
  const numUsers = response.body.records.length
  t.true('country' in response.body.records[numUsers - 1])
  // name should always be included
  t.true('full_name' in response.body.records[0])
  // edit_count should always be a number
  t.false(Number.isNaN(response.body.records[0].edit_count))
})

test('Sort users by most recently active', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users/stats/?q=&page=1&sortType=Most%20recent&active=false')
    .expect(200)
  const users = await db('users')
    .select('country', 'edit_count', 'full_name', 'osm_id')
  users.sort((a, b) => b.last_edit - a.last_edit)
  const resCopy = response.body.records.map(omit(['rank', 'last_edit']))
  t.deepEqual(resCopy, users)
})

test('Search users', async (t) => {
  const sensitiveRes = await request(app)
    .get('/scoreboard/api/users/stats/?q=test')
    .expect(200)

  const insensitiveRes = await request(app)
    .get('/scoreboard/api/users/stats/?q=TesT')
    .expect(200)

  t.is(sensitiveRes.body.records.length, insensitiveRes.body.records.length)
  t.is(sensitiveRes.body.editTotal, insensitiveRes.body.editTotal)
})

test('Sort users by least recently active', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users/stats/?q=&page=1&sortType=Least%20recent&active=false')
    .expect(200)
  const users = await db('users')
    .select('country', 'edit_count', 'full_name', 'osm_id')
  users.sort((a, b) => a.last_edit - b.last_edit)
  const resCopy = response.body.records.map(omit(['rank', 'last_edit']))
  t.deepEqual(resCopy, users)
})

test('Sort users by most edits', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users/stats/?q=&page=1&sortType=Most%20total&active=false')
    .expect(200)
  const users = await db('users')
    .select('country', 'edit_count', 'full_name', 'osm_id')
  users.sort((a, b) => b.edit_count - a.edit_count)
  const resCopy = response.body.records.map(omit(['rank', 'last_edit']))
  t.deepEqual(resCopy, users)
})

test('Sort users by least edits', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users/stats/?q=&page=1&sortType=Least%20total&active=false')
    .expect(200)
  const users = await db('users')
    .select('country', 'edit_count', 'full_name', 'osm_id')
  users.sort((a, b) => a.edit_count - b.edit_count)
  const resCopy = response.body.records.map(omit(['rank', 'last_edit']))
  t.deepEqual(resCopy, users)
})

test.serial('Update user country', async (t) => {
  const updateResponse = await request(app)
    .put('/scoreboard/api/users/100000000').send({ country: 'TZ' })
    .expect(401)

  t.true(updateResponse.body.error === 'Unauthorized')
})
