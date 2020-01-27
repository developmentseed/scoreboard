const test = require('ava')
const db = require('../../src/db/connection')
let app = require('../../src/index')
const settingsModel = require('../../src/models/settings')

const { createAuthenticatedUser } = require('./helpers')
const path = require('path')

let adminUser

const dbDirectory = path.join(__dirname, '..', '..', 'src', 'db')
const migrationsDirectory = path.join(dbDirectory, 'migrations')
const seedsDirectory = path.join(dbDirectory, 'seeds', 'test')

test.before(async t => {
  await db.migrate.latest({ directory: migrationsDirectory })
  await db.seed.run({ directory: seedsDirectory })
  app = await app()
  adminUser = await createAuthenticatedUser(app, ['admin'])
})

test('set and get settings in model', async t => {
  let valueA = 'valueA'
  await settingsModel.put('settingA', valueA)
  let data = await settingsModel.get('settingA')
  t.is(data, valueA)
})

test('set and get settings', async t => {
  const settings = {
    'settingB': 'valueB',
    'settingC': 'valueC'
  }

  await adminUser.put('/scoreboard/api/settings')
    .send(settings)
    .expect(200)

  let getRes = await adminUser.get('/scoreboard/api/settings')
    .expect(200)

  Object.keys(settings).forEach(setting => {
    t.is(settings[setting], getRes.body[setting])
  })
})
