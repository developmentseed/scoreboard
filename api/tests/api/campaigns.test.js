const test = require('ava')
const request = require('supertest')
const db = require('../../src/db/connection')
const app = require('../../src/index')
const path = require('path')

const dbDirectory = path.join(__dirname, '..', '..', 'src', 'db')
const migrationsDirectory = path.join(dbDirectory, 'migrations')
const seedsDirectory = path.join(dbDirectory, 'seeds', 'test')

test.before(async t => {
  await db.migrate.latest({ directory: migrationsDirectory })
  await db.seed.run({ directory: seedsDirectory })
})

test.after.always(async t => {
  await db.migrate.rollback({ directory: migrationsDirectory })
  await db.destroy()
})

test.serial('Get campaigns', async t => {
  const response = await request(app)
    .get('/scoreboard/api/campaigns')
    .expect(200)

  let records = response.body.records
  records.forEach(record => [
    console.log(record.priority)
  ])

  t.truthy(response)
})
