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

test.serial('get team stats', async t => {
  // these osmIds are not on a team actually, but the getTeamStats() just
  // takes a list of osmIds which could also be the team members.
  const osmIds = [33757, 19239]
  const stats = await osmesa.getTeamStats(osmIds)
  const { teamStats, memberStats } = stats
  t.is(memberStats.length, 2)
  const memberNames = memberStats.map(data => data.name)
  t.true(memberNames.includes('Minh Nguyen'))
  t.true(memberNames.includes('ebrelsford'))

  const integerCheck = Number.isInteger
  const floatCheck = x => typeof x === 'number'

  const expectedTeamStats = {
    buildings_add: integerCheck,
    buildings_del: integerCheck,
    buildings_mod: integerCheck,
    changeset_count: integerCheck,
    coastlines_add: integerCheck,
    coastlines_del: integerCheck,
    coastlines_mod: integerCheck,
    countryCount: integerCheck,
    edit_count: integerCheck,
    km_coastlines_add: floatCheck,
    km_coastlines_del: floatCheck,
    km_coastlines_mod: floatCheck,
    km_railways_add: floatCheck,
    km_railways_del: floatCheck,
    km_railways_mod: floatCheck,
    km_roads_add: floatCheck,
    km_roads_del: floatCheck,
    km_roads_mod: floatCheck,
    km_waterways_add: floatCheck,
    km_waterways_del: floatCheck,
    km_waterways_mod: floatCheck,
    poi_add: integerCheck,
    poi_del: integerCheck,
    poi_mod: integerCheck,
    railways_add: integerCheck,
    railways_del: integerCheck,
    railways_mod: integerCheck,
    roads_add: integerCheck,
    roads_del: integerCheck,
    roads_mod: integerCheck,
    waterways_add: integerCheck,
    waterways_del: integerCheck,
    waterways_mod: integerCheck
  }
  Object.keys(expectedTeamStats).forEach(k => {
    const predicate = expectedTeamStats[k]
    t.true(predicate(teamStats[k]), `unexpected ${k}`)
  })
})
