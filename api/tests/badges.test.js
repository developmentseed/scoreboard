const path = require('path')
const test = require('ava')
const request = require('supertest')
const connection = require('../src/db/connection')
const app = require('../src/index')

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

test('Pull all badges', async (t) => {
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

test('Getting a badge from the db', async (t) => {
  const res = await request(app)
    .get('/scoreboard/api/badges/1')
    .expect(200)
  // name should always be included
  t.true('name' in res.body.badges[0])
})

test.serial('Inserting a badge into the db', async (t) => {
  let res = await request(app)
    .get('/scoreboard/api/badges')
    .expect(200)
  const numBadges = res.body.badges.length
  await request(app)
    .post('/scoreboard/api/badges')
    .send({ name: 'Test Badge', operations: [['>', 'daysTotal', '100']] })
    .expect(200)
  res = await request(app)
    .get(`/scoreboard/api/badges/${numBadges + 1}`)
    .expect(200)
  t.true(res.body.badges[0].name === 'Test Badge')
  t.deepEqual(res.body.badges[0].operations, [['>', 'daysTotal', '100']])
})

test.serial('Updating a badge in the db', async (t) => {
  let res = await request(app)
    .get('/scoreboard/api/badges')
    .expect(200)
  const numBadges = res.body.badges.length
  await request(app)
    .put(`/scoreboard/api/badges/${numBadges}`)
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

test.serial('Earning a badge in the db', async (t) => {
  const users = await db('users')
    .select('osm_id') // .where('edit_count', '>', 1)
  t.log('ids are ', users)
  let stats = await request(app)
    .get(`/scoreboard/api/users/${users[0].osm_id}`)
    .expect(200)
  stats = JSON.parse(stats.text)
  // t.log(typeof stats, stats)
  t.log(typeof stats.badges.earnedBadges, stats.badges.earnedBadges)
  const badgeDetails = Object.entries(stats.badges.earnedBadges).map((eachBadge) => {
    return eachBadge[1]
  })
  t.false(badgeDetails.find((badge) => {
    return badge.name === 'Test Badge Edit'
  }) === null)
})

test.serial('Deleting a badge from the db', async (t) => {
  let res = await request(app)
    .get('/scoreboard/api/badges')
    .expect(200)
  const numBadges = res.body.badges.length
  await request(app)
    .delete(`/scoreboard/api/badges/${numBadges}`)
    .expect(200)
  res = await request(app)
    .get('/scoreboard/api/badges')
    .expect(200)
  t.true(res.body.badges.length === numBadges - 1)
})
