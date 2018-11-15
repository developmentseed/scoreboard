const path = require('path')
const test = require('ava')
// const request = require('supertest')
const connection = require('../src/db/connection')
// const app = require('../src/index')
const assignments = require('../src/models/assignments')

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

test('create assignment', async (t) => {
  // const [campaign] = await db('campaigns').select().limit(1)

  const [result] = await assignments.create({
    assigner_id: 1,
    assignee_id: 2,
    // campaign_id: 1, TODO: campaign seeds for tests
    due: new Date()
  })

  console.log(result)
  t.truthy(result)
})

test('list assignments', async (t) => {
  const list = await assignments.list()

  console.log(list)
  t.true(list.length > 0)
})
