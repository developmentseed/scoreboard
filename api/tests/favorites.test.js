const path = require('path')
const test = require('ava')
// const request = require('supertest')
const connection = require('../src/db/connection')
// const app = require('../src/index')
const favorites = require('../src/models/favorite-campaigns')

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

test.serial('create favorite', async (t) => {
  const [campaign] = await db('campaigns').select().limit(2)

  const [result] = await favorites.create({
    user_id: 2,
    campaign_id: campaign.id
  })

  t.truthy('result', result.id)
})

test.serial('list favorites', async (t) => {
  const list = await favorites.list()
  t.true(list.length > 0)
})
