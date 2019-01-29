'use strict'

const path = require('path')
const test = require('ava')
const db = require('../../src/db/connection')
const app = require('../../src/index')
const { add, remove, list } = require('../../src/models/exclusion-lists')
const { prop } = require('ramda')

const { createAuthenticatedUser, createAnonymousUser } = require('./helpers')

let adminUser
let authenticatedUser
let anonymousUser

const dbDirectory = path.join(__dirname, '..', '..', 'src', 'db')
const migrationsDirectory = path.join(dbDirectory, 'migrations')
const seedsDirectory = path.join(dbDirectory, 'seeds', 'test')

test.before(async () => {
  await db.migrate.latest({ directory: migrationsDirectory })
  await db.seed.run({ directory: seedsDirectory })
  adminUser = await createAuthenticatedUser(app, [1])
  authenticatedUser = await createAuthenticatedUser(app, [])
  anonymousUser = createAnonymousUser(app)
})

test.after.always(async () => {
  await db.migrate.rollback({ directory: migrationsDirectory })
  await db.destroy()
})

test('add / remove / list role', async t => {
  t.plan(6)
  await add(1)
  await add(2)
  let result = await list()
  t.true(result.length === 2)

  let resultSet = new Set(result.map(prop('user_id')))
  t.true(resultSet.has(1))
  t.true(resultSet.has(2))

  await remove(2)
  result = await list()
  t.true(result.length === 1)
  resultSet = new Set(result.map(prop('user_id')))
  t.true(resultSet.has(1))
  t.true(!resultSet.has(2))
})
