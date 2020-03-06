const path = require('path')
const test = require('ava')
const db = require('../../src/db/connection')
const favorites = require('../../src/models/favorite-campaigns')

const dbDirectory = path.join(__dirname, '..', '..', 'src', 'db')
const migrationsDirectory = path.join(dbDirectory, 'migrations')
const seedsDirectory = path.join(dbDirectory, 'seeds', 'test')

test.before(async () => {
  await db.migrate.latest({ directory: migrationsDirectory })
  await db.seed.run({ directory: seedsDirectory })
})

test.after.always(async () => {
  await db.destroy()
})

test.serial('create favorite', async (t) => {
  const [campaign] = await db('campaigns').select().limit(2)
  const users = await db('users').select('id').limit(1)

  const [result] = await favorites.create({
    user_id: users[1],
    campaign_id: campaign.id
  })
  t.truthy(result.id)
})

test.serial('list favorites', async (t) => {
  const list = await favorites.list()
  t.true(list.length > 0)
})
