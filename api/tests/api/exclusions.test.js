'use strict'

const path = require('path')
const test = require('ava')
const db = require('../../src/db/connection')
const app = require('../../src/index')
const { add, remove, list, update } = require('../../src/models/exclusion-list')
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

test.serial('add / remove / list', async t => {
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

test.serial('update exclusion list', async t => {
  await add(1)
  await add(2)
  await update([2, 3, 4])
  let result = await list()
  let resultSet = new Set(result.map(prop('user_id')))
  t.true(result.length === 3)
  t.true(!resultSet.has(1))
  t.true(resultSet.has(2))
  t.true(resultSet.has(3))
  t.true(resultSet.has(4))
})

test.serial('get list via api', async t => {
  await update([2, 3, 4])

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
  await update([2, 3, 4])

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
  await new Promise((resolve, reject) => {
    adminUser
      .put('/scoreboard/api/exclusion')
      .send({ 'list': [2, 3, 4] })
      .expect(200)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  const result = await list()
  t.true(result.length === 3)
  let resultSet = new Set(result.map(prop('user_id')))
  t.true(resultSet.has(2))
  t.true(resultSet.has(3))
  t.true(resultSet.has(4))
})

test.serial('update list via api - not admin', async t => {
  t.plan(0)
  await new Promise((resolve, reject) => {
    authenticatedUser
      .put('/scoreboard/api/exclusion')
      .send({ 'list': [2, 3, 4] })
      .expect(401)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  await new Promise((resolve, reject) => {
    anonymousUser
      .put('/scoreboard/api/exclusion')
      .send({ 'list': [2, 3, 4] })
      .expect(401)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

})
