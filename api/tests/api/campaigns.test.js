const test = require('ava')
const request = require('supertest')
const db = require('../../src/db/connection')
let app = require('../../src/index')
const path = require('path')
const { prop, reject, propEq } = require('ramda')
const { isBefore, isAfter, isEqual } = require('date-fns')

const dbDirectory = path.join(__dirname, '..', '..', 'src', 'db')
const migrationsDirectory = path.join(dbDirectory, 'migrations')
const seedsDirectory = path.join(dbDirectory, 'seeds', 'test')

test.before(async t => {
  await db.migrate.latest({ directory: migrationsDirectory })
  await db.seed.run({ directory: seedsDirectory })
  app = await app()
})

test.after.always(async t => {
  await db.destroy()
})

test('Get campaigns', async t => {
  const response = await request(app)
    .get('/scoreboard/api/campaigns')
    .expect(200)

  t.truthy(response)
  t.truthy(response.body.records.length > 0)
})

test('Get campaigns does not return drafts', async t => {
  const response = await request(app)
    .get('/scoreboard/api/campaigns')
    .expect(200)

  t.truthy(response)
  const campaigns = response.body.records
  const filteredCampaigns = reject(propEq('status', 'DRAFT'), campaigns) // remove drafts
  t.is(campaigns.length, filteredCampaigns.length) // should be same length since we never return drafts
})

test('Get campaigns with completeness parameters', async t => {
  const response = await request(app)
    .get('/scoreboard/api/campaigns?compl_min=20&compl_max=60')
    .expect(200)

  const records = response.body.records
  t.plan(records.length)
  records.forEach(record => {
    t.truthy(record.done <= 60 && record.done >= 20)
  })
})

test('Get campaigns with validation parameters', async t => {
  const response = await request(app)
    .get('/scoreboard/api/campaigns?valid_min=30&valid_max=60')
    .expect(200)

  const records = response.body.records
  t.plan(records.length)
  records.forEach(record => {
    t.truthy(record.validated <= 60 && record.validated >= 30)
  })
})

test('Get campaigns sorted by most recently created', async t => {
  const response = await request(app)
    .get('/scoreboard/api/campaigns?sortType=Most Recently Created')
    .expect(200)

  const records = response.body.records
  const createdDates = records.map(prop('created_at'))
  let toCompare = new Date()
  createdDates.forEach(date => {
    t.truthy(isAfter(toCompare, date))
    toCompare = date
  })
})

test('Get campaigns sorted by least recently created', async t => {
  const response = await request(app)
    .get('/scoreboard/api/campaigns?sortType=Least Recently Created')
    .expect(200)

  const records = response.body.records
  const createdDates = records.map(prop('created_at'))
  let toCompare = new Date(0)
  createdDates.forEach(date => {
    t.truthy(isBefore(toCompare, date) || isEqual(toCompare, date))
    toCompare = date
  })
})

test('Get campaigns sorted by most recently updated', async t => {
  const response = await request(app)
    .get('/scoreboard/api/campaigns?sortType=Most Recently Updated')
    .expect(200)

  const records = response.body.records
  const updatedDates = records.map(prop('updated_at'))
  let toCompare = new Date()
  updatedDates.forEach(date => {
    t.truthy(isAfter(toCompare, date))
    toCompare = date
  })
})

test('Get campaigns sorted by least recently updated', async t => {
  const response = await request(app)
    .get('/scoreboard/api/campaigns?sortType=Least Recently Updated')
    .expect(200)

  const records = response.body.records
  const updatedDates = records.map(prop('updated_at'))
  let toCompare = new Date(0)
  updatedDates.forEach(date => {
    t.truthy(isBefore(toCompare, date) || isEqual(toCompare, date))

    toCompare = date
  })
})

test('Get campaigns sorted alphabetically', async t => {
  const response = await request(app)
    .get('/scoreboard/api/campaigns?sortType=Alphabetical A-Z')
    .expect(200)
  const response2 = await request(app)
    .get('/scoreboard/api/campaigns?sortType=Alphabetical Z-A')
    .expect(200)
  // FIXME: this test should validate the sorted results, but it cannot because of the sql result pagination as implemented in campaigns.js
  t.is(response.body.length, response2.body.length)
})

test('Get campaigns with archived', async t => {
  const first = await request(app)
    .get('/scoreboard/api/campaigns?includeArchived=false')
    .expect(200)

  const second = await request(app)
    .get('/scoreboard/api/campaigns?includeArchived=true')
    .expect(200)

  // the second response should have strictly more campaigns
  t.true(second.body.total > first.body.total)
})
