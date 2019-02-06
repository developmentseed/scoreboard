const path = require('path')
const test = require('ava')
const request = require('supertest')
const db = require('../../src/db/connection')
const app = require('../../src/index')
const runBadgeSeed = require('../../src/db/seeds/test/badges').seed
const { createAuthenticatedUser } = require('./helpers')

let adminUser

const dbDirectory = path.join(__dirname, '..', '..', 'src', 'db')
const migrationsDirectory = path.join(dbDirectory, 'migrations')
const seedsDirectory = path.join(dbDirectory, 'seeds', 'test')

test.before(async () => {
  await db.migrate.latest({ directory: migrationsDirectory })
  await db.seed.run({ directory: seedsDirectory })
  adminUser = await createAuthenticatedUser(app, [1])
})

test.beforeEach(async () => {
  await runBadgeSeed(db)
})

test.after.always(async () => {
  await db.destroy()
})

test.serial('Pull all badges', async (t) => {
  const res = await request(app)
    .get('/scoreboard/api/badges')
    .expect(200)
  const numBadges = res.body.badges.length
  if (numBadges > 0) {
    // name should always be included
    t.true('name' in res.body.badges[numBadges - 1])
  }
  t.true(numBadges === 10)
})

test.serial('Getting a badge from the db', async (t) => {
  const res = await request(app)
    .get('/scoreboard/api/badges/1')
    .expect(200)
  // name should always be included
  t.true('name' in res.body.badges[0])
})

test.serial('Inserting a badge into the db', async (t) => {
  let postRes = await adminUser
    .post('/scoreboard/api/badges')
    .send({ name: 'Test Badge', operations: [['>', 'daysTotal', '100']] })
    .expect(200)

  let getRes = await adminUser
    .get(`/scoreboard/api/badges/${postRes.body.id}`)
    .expect(200)
  t.true(getRes.body.badges[0].name === 'Test Badge')
  t.deepEqual(getRes.body.badges[0].operations, [['>', 'daysTotal', '100']])
})

test.serial('Try inserting a badge with the same name', async t => {
  await adminUser
    .post('/scoreboard/api/badges')
    .send({ name: 'Test Duplicate Badge', operations: [['>', 'daysTotal', '100']] })
    .expect(200)
  let res = await adminUser
    .post('/scoreboard/api/badges')
    .send({ name: 'Test Duplicate Badge', operations: [['>', 'daysTotal', '100']] })
    .expect(400)

  t.true(res.status === 400)
})

test.serial('Updating a badge in the db', async (t) => {
  let res = await adminUser
    .get('/scoreboard/api/badges')
    .expect(200)

  const numBadges = res.body.badges.length

  await adminUser
    .put(`/scoreboard/api/badges/${numBadges}`)
    .set('Accept-Encoding', 'identity')
    .send({
      name: 'Test Badge Edit',
      operations: [['>', 'daysTotal', '1'], ['>=', 'daysInRow', '1']]
    })
    .expect(200)

  res = await request(app)
    .get(`/scoreboard/api/badges/${numBadges}`)
    .expect(200)
  t.true(res.body.badges[0].name === 'Test Badge Edit')
  t.deepEqual(res.body.badges[0].operations,
    [['>', 'daysTotal', '1'], ['>=', 'daysInRow', '1']])
})

test.serial('Try updating a badge with the same name', async t => {
  let postRes = await adminUser
    .post('/scoreboard/api/badges')
    .send({ name: 'Test Badge 1', operations: [['>', 'daysTotal', '100']] })
    .expect(200)

  await adminUser
    .post('/scoreboard/api/badges')
    .send({ name: 'Test Badge 2', operations: [['>', 'daysTotal', '100']] })
    .expect(200)

  let res2 = await adminUser
    .put(`/scoreboard/api/badges/${postRes.body.id}`)
    .set('Accept-Encoding', 'identity')
    .send({
      name: 'Test Badge 2'
    })
    .expect(400)

  t.true(res2.status === 400)
})

test.serial('Deleting a badge from the db', async (t) => {
  let res = await adminUser
    .get('/scoreboard/api/badges')
    .expect(200)

  const numBadges = res.body.badges.length

  await adminUser
    .delete(`/scoreboard/api/badges/${numBadges}`)
    .expect(200)

  res = await adminUser
    .get('/scoreboard/api/badges')
    .expect(200)

  t.true(res.body.badges.length === numBadges - 1)
})
