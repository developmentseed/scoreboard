'use strict'

const path = require('path')
const test = require('ava')
const db = require('../../src/db/connection')
let app = require('../../src/index')
const { add, remove, list, update, listOSMIds, addOSMId, removeOSMId, updateOSMIds } = require('../../src/models/exclusion-list')
const { prop } = require('ramda')

const { createAuthenticatedUser, createAnonymousUser } = require('./helpers')

let adminUser
let authenticatedUser
let anonymousUser

const dbDirectory = path.join(__dirname, '..', '..', 'src', 'db')
const migrationsDirectory = path.join(dbDirectory, 'migrations')
const seedsDirectory = path.join(dbDirectory, 'seeds', 'test')

test.before(async () => {
  app = await app()
  await db.migrate.latest({ directory: migrationsDirectory })
  await db.seed.run({ directory: seedsDirectory })
  adminUser = await createAuthenticatedUser(app, ['admin'])
  authenticatedUser = await createAuthenticatedUser(app, [])
  anonymousUser = createAnonymousUser(app)
})

test.beforeEach(async () => {
  await db('exclusion_list').truncate()
})

test.after.always(async () => {
  await db.destroy()
})

test.serial('add / remove / list', async t => {
  t.plan(6)
  const users = await db('users').select('id').limit(2)
  await add(users[0].id)
  await add(users[1].id)
  let result = await list()
  t.true(result.length === 2)

  let resultSet = new Set(result.map(prop('user_id')))
  t.true(resultSet.has(users[0].id))
  t.true(resultSet.has(users[1].id))

  await remove(users[1].id)
  result = await list()
  t.true(result.length === 1)
  resultSet = new Set(result.map(prop('user_id')))
  t.true(resultSet.has(users[0].id))
  t.true(!resultSet.has(users[1].id))
})

test.serial('update exclusion list', async t => {
  const users = await db('users').select('id').limit(5)
  await add(users[1].id)
  await add(users[2].id)
  await update([users[2].id, users[3].id, users[4].id])
  let result = await list()
  let resultSet = new Set(result.map(prop('user_id')))
  t.true(result.length === 3)
  t.true(!resultSet.has(users[1].id))
  t.true(resultSet.has(users[2].id))
  t.true(resultSet.has(users[3].id))
  t.true(resultSet.has(users[4].id))
})

test.serial('add / remove / list using osm ids', async t => {
  t.plan(6)
  const users = await db('users').select('osm_id').limit(2)
  await addOSMId(users[0].osm_id)
  await addOSMId(users[1].osm_id)
  let result = await listOSMIds()
  t.true(result.length === 2)

  let resultSet = new Set(result.map(prop('osm_id')))
  t.true(resultSet.has(users[0].osm_id))
  t.true(resultSet.has(users[1].osm_id))

  await removeOSMId(users[0].osm_id)
  result = await listOSMIds()
  t.true(result.length === 1)
  resultSet = new Set(result.map(prop('osm_id')))
  t.true(resultSet.has(users[1].osm_id))
  t.true(!resultSet.has(users[0].osm_id))
})

test.serial('update exclusion list using osm ids', async t => {
  const users = await db('users').select('osm_id').limit(4)
  await addOSMId(users[0].osm_id)
  await addOSMId(users[1].osm_id)
  await updateOSMIds([users[1].osm_id, users[2].osm_id, users[3].osm_id])
  let result = await listOSMIds()
  let resultSet = new Set(result.map(prop('osm_id')))
  t.true(result.length === 3)
  t.true(!resultSet.has(users[0].osm_id))
  t.true(resultSet.has(users[1].osm_id))
  t.true(resultSet.has(users[2].osm_id))
  t.true(resultSet.has(users[3].osm_id))
})

test.serial('get list via api', async t => {
  const users = await db('users').select('osm_id').limit(4)
  await updateOSMIds([users[0].osm_id, users[1].osm_id, users[2].osm_id])

  const { body } = await new Promise((resolve, reject) => {
    adminUser
      .get('/scoreboard/api/exclusion')
      .expect(200)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  t.true(body.length === 3)
})

test.serial('get list via api - not admin', async t => {
  t.plan(0)
  const users = await db('users').select('osm_id').limit(4)
  await updateOSMIds([users[0].osm_id, users[1].osm_id, users[2].osm_id])

  await new Promise((resolve, reject) => {
    authenticatedUser
      .get('/scoreboard/api/exclusion')
      .expect(401)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  await new Promise((resolve, reject) => {
    anonymousUser
      .get('/scoreboard/api/exclusion')
      .expect(401)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })
})

test.serial('update list via api', async t => {
  const users = await db('users').select('osm_id').limit(4)
  await new Promise((resolve, reject) => {
    adminUser
      .put('/scoreboard/api/exclusion')
      .send({ 'list': [users[0].osm_id, users[1].osm_id, users[2].osm_id] })
      .expect(200)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  const result = await listOSMIds()
  t.true(result.length === 3)
  let resultSet = new Set(result.map(prop('osm_id')))
  t.true(resultSet.has(users[0].osm_id))
  t.true(resultSet.has(users[1].osm_id))
  t.true(resultSet.has(users[2].osm_id))
})

test.serial('update list via api - not admin', async t => {
  const users = await db('users').select('osm_id').limit(4)
  t.plan(0)
  await new Promise((resolve, reject) => {
    authenticatedUser
      .put('/scoreboard/api/exclusion')
      .send({ 'list': [users[0].osm_id, users[1].osm_id, users[2].osm_id] })
      .expect(401)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  await new Promise((resolve, reject) => {
    anonymousUser
      .put('/scoreboard/api/exclusion')
      .send({ 'list': [users[0].osm_id, users[1].osm_id, users[2].osm_id] })
      .expect(401)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })
})
