'use strict'

const path = require('path')
const test = require('ava')
const request = require('supertest')
const db = require('../../src/db/connection')
let app = require('../../src/index')
const userClocks = require('../../src/users_clock')
const countryList = require('../../../lib/utils/country-list.json')

const dbDirectory = path.join(__dirname, '..', '..', 'src', 'db')
const migrationsDirectory = path.join(dbDirectory, 'migrations')
const seedsDirectory = path.join(dbDirectory, 'seeds', 'test')

test.before(async () => {
  app = await app()
  await db.migrate.latest({ directory: migrationsDirectory })
  await db.seed.run({ directory: seedsDirectory })

  // run users clock
  await userClocks()
})

test.after.always(async () => {
  await db.destroy()
})

test('Test countries list endpoint', async (t) => {
  const res = await request(app)
    .get('/scoreboard/api/countries')
    .expect(200)
  t.is(res.body.subTotal, res.body.records.length)
  t.is(res.body.total, res.body.records.length)
  t.is(res.body.editTotal, res.body.records.reduce((total, { edit_count }) => total + parseInt(edit_count, 10), 0))
})

test('Test countries list endpoint with search', async (t) => {
  const [oneCountry] = await db('user_country_edits').limit(1)

  const res = await request(app)
    .get(`/scoreboard/api/countries?q=${oneCountry.name}`)
    .expect(200)

  t.is(res.body.records.name, oneCountry.name)
})

test('Test countries list endpoint sorting', async (t) => {
  const res = await request(app)
    .get('/scoreboard/api/countries?sortType=Least total')
    .expect(200)
  const records = await db('user_country_edits')
    .select('country_name as name')
    .sum('edit_count as edit_count')
    .groupBy('country_name')
    .orderBy('edit_count')

  t.is(res.body.records[0].name, records[0].name)
})

test('Test getting one country', async (t) => {
  const [oneCountry] = await db('user_country_edits').limit(1)
  const [ { totalEdits } ] = await db('user_country_edits').sum('edit_count as totalEdits').where('country_name', 'ilike', oneCountry.country_name)
  const code = countryList.filter(c => c.name === oneCountry.country_name)[0].code
  const res = await request(app)
    .get(`/scoreboard/api/countries/${code}`)
    .expect(200)

  t.is(res.body.code, code)
  t.truthy(res.body.users.length)
  // Check total edit count
  t.is(res.body.edit_count, totalEdits)
})

test('Test getting a country that doesnt exist', async (t) => {
  const res = await request(app)
    .get('/scoreboard/api/countries/RU')
    .expect(404)

  t.is(res.status, 404)
})
