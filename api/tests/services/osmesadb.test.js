/**
 * Test the OSMESA service code
 */
const test = require('ava')
const path = require('path')

const osmesa = require('../../src/services/osmesa')
const db = require('../../src/db/connection')

const dbDirectory = path.join(__dirname, '..', '..', 'src', 'db')
const migrationsDirectory = path.join(dbDirectory, 'migrations')
const seedsDirectory = path.join(dbDirectory, 'seeds', 'test')

test.before(async t => {
  await db.migrate.latest({ directory: migrationsDirectory })
  await db.seed.run({ directory: seedsDirectory })
})

test.after.always(async t => {
  await db.destroy()
})

test.serial('get country', async t => {
  const country = await osmesa.getCountry('AGO')
  t.true(country && country.name === 'Angola')
})

test.serial('get user', async t => {
  const user = await osmesa.getUser(19239)
  t.true(user && user.name === 'ebrelsford')
})

test.serial('get campaign', async t => {
  const campaign = await osmesa.getCampaign('osmus-tasks-153')
  t.truthy(campaign && campaign.tag)
})

test.serial('get updates', async t => {
  const lastUpdated = await osmesa.getUpdates()
  t.truthy(lastUpdated)
})
