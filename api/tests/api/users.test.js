'use strict'

const path = require('path')
const test = require('ava')
const request = require('supertest')
const db = require('../../src/db/connection')
let app = require('../../src/index')
const userClocks = require('../../src/users_clock')
const { omit, prop, contains } = require('ramda')

const dbDirectory = path.join(__dirname, '..', '..', 'src', 'db')
const migrationsDirectory = path.join(dbDirectory, 'migrations')
const seedsDirectory = path.join(dbDirectory, 'seeds', 'test')

test.before(async () => {
  await db.migrate.latest({ directory: migrationsDirectory })
  await db.seed.run({ directory: seedsDirectory })
  console.log('db')
  app = await app()

  // run users clock
  await userClocks()
})

test.after.always(async () => {
  await db.destroy()
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

test.serial('Get user names from osm ids', async (t) => {
  const allUsersResponse = await request(app)
    .get('/scoreboard/api/users/stats')
  const ids = allUsersResponse.body.records.map(prop('osm_id'))
  const params = { ids }
  const response = await request(app)
    .post('/scoreboard/api/users/names').send(params)
    .expect(200)
  const records = response.body
  t.is(records.length, ids.length)
  records.forEach(({ osm_id, full_name }) => {
    t.truthy(osm_id)
    t.truthy(full_name)
  })
})

test('Sort users by most recently active', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users/stats/?q=&page=1&sortType=Most%20recent&active=false')
    .expect(200)
  const users = await db('users')
    .select('full_name', 'last_edit')
    .orderByRaw('last_edit desc, full_name')
    .limit(25)
  const resCopy = response.body.records.map(prop('full_name'))
  const usersCopy = users.map(prop('full_name'))
  t.deepEqual(resCopy, usersCopy)
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
    .select('country', 'edit_count', 'full_name', 'osm_id', 'last_edit')
    .orderByRaw('last_edit asc, full_name')
    .limit(25)
  const resCopy = response.body.records.map(omit(['rank', 'last_edit']))
  const usersCopy = users.map(omit(['last_edit']))
  t.deepEqual(resCopy, usersCopy)
})

test('Sort users by most edits', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users/stats/?q=&page=1&sortType=Most%20total&active=false')
    .expect(200)
  const users = await db('users')
    .orderByRaw('edit_count desc, full_name NULLS LAST')
    .limit(25)
  const resCopy = response.body.records.map(prop('full_name'))
  t.deepEqual(resCopy, users.map(prop('full_name')))
})

test('Sort users by least edits', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users/stats/?q=&page=1&sortType=Least%20total&active=false')
    .expect(200)

  const users = (await db('users')
    .select('full_name')
    .orderByRaw('edit_count asc, full_name NULLS LAST')
    .limit(25)
  ).map(prop('full_name'))

  const respUsers = response.body.records.map(prop('full_name'))

  // check that it's the same user list
  respUsers.forEach(name => {
    t.true(contains(name, users))
  })
})

test('Sort users alphabetically a-z', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users/stats/?q=&page=1&sortType=Alphabetical A-Z&active=false')
    .expect(200)
  const users = await db('users')
    .select('full_name')
    .orderBy('full_name', 'asc')
    .limit(25)
  const names = users.map(prop('full_name'))
  const resCopy = response.body.records.map(prop('full_name'))
  t.deepEqual(resCopy, names)
})

test('Sort users alphabetically z-a', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users/stats/?q=&page=1&sortType=Alphabetical Z-A&active=false')
    .expect(200)

  const users = await db('users')
    .select('full_name')
    .orderBy('full_name', 'desc')
    .limit(25)
  const names = users.map(prop('full_name'))
  const resCopy = response.body.records.map(prop('full_name'))
  t.is(resCopy.length, names.length)
  t.deepEqual(resCopy, names)
})

test('Sort users by country alphabetically a-z', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users/stats/?q=&page=1&sortType=Countries A-Z&active=false')
    .expect(200)
  const users = await db('users')
    .select('country')
    .orderByRaw('country asc NULLS LAST')
    .limit(25)
  const countries = users.map(prop('country'))
  const resCopy = response.body.records.map(prop('country'))
  t.deepEqual(resCopy, countries)
})

test('Sort users by country alphabetically z-a', async (t) => {
  const response = await request(app)
    .get('/scoreboard/api/users/stats/?q=&page=1&sortType=Countries Z-A&active=false')
    .expect(200)

  const users = await db('users')
    .select('country')
    .orderByRaw('country desc NULLS LAST')
    .limit(25)
  const countries = users.map(prop('country'))
  const resCopy = response.body.records.map(prop('country'))
  t.is(resCopy.length, countries.length)
  t.deepEqual(resCopy, countries)
})

test.serial('Update user country', async (t) => {
  const updateResponse = await request(app)
    .put('/scoreboard/api/users/100000000').send({ country: 'TZ' })
    .expect(401)

  t.true(updateResponse.body.error === 'Unauthorized')
})
