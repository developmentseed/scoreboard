'use strict'

const path = require('path')
const test = require('ava')
const db = require('../../src/db/connection')
let app = require('../../src/index')
const { validateRole } = require('../../src/utils/roles')
const roles = require('../../src/models/roles')

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

test.after.always(async () => {
  await db.destroy()
})

const userRoles = [{
  name: 'admin'
}]

test('validate role', (t) => {
  const result = validateRole(userRoles, 'admin')
  t.true(result)
})

test('fail to validate role', (t) => {
  const result = validateRole(userRoles, 'does_not_exist')
  t.false(result)
})

test('get roles list via js', async (t) => {
  const data = await roles.list()
  t.true(data.length > 0)
})

test('get role via js', async (t) => {
  const [admin] = await db('roles').where({ 'name': 'admin' })

  const [role] = await roles.get(admin.id)
  t.true(role.name === 'admin')
})

test('get role via js by name', async (t) => {
  const [admin] = await db('roles').where({ 'name': 'admin' })

  const [role] = await roles.findByName('admin')
  t.true(role.id === admin.id)
})

test('create role via js', async (t) => {
  const [role] = await roles.create({ name: 'team leader' })
  t.truthy(role)
})

test('update role via js', async (t) => {
  const [role] = await roles.create({ name: 'rename this' })
  const [updatedRole] = await roles.update(role.id, { name: 'renamed' })
  t.truthy(updatedRole.name === 'renamed')
})

test('delete role via js', async (t) => {
  const [role] = await roles.create({ name: 'delete me' })
  await roles.destroy(role.id)
  const notFound = await roles.get(role.id)
  t.true(notFound.length === 0)
})

test.only('get roles using id array via js', async (t) => {
  await roles.create({ name: 'additional role' })
  const tworoles = await db('roles').select('name', 'id').limit(2)

  const list1 = await roles.getRolesByName([tworoles[0].name, tworoles[1].name])
  const list2 = await roles.getRoles([tworoles[0].id, tworoles[1].id])

  t.true(list1.length > 0)
  t.true(list2.length > 0)
  t.deepEqual(list1, list2)
})

test('userinfo route includes roles', async (t) => {
  const { body } = await new Promise((resolve, reject) => {
    adminUser
      .get('/auth/userinfo')
      .expect(200)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  t.truthy(body.roles)
  t.true(body.roles[0].name === 'admin')
})

test('get roles list via api', async (t) => {
  const { body } = await new Promise((resolve, reject) => {
    adminUser
      .get('/scoreboard/api/roles')
      .expect(200)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  t.true(body.length > 0)
})

test('get role via api', async (t) => {
  const [admin] = await roles.findByName('admin')
  const { body } = await new Promise((resolve, reject) => {
    adminUser
      .get(`/scoreboard/api/roles/${admin.id}`)
      .expect(200)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  t.true(body.id === admin.id)
  t.true(body.name === 'admin')
})

test('create role via api', async (t) => {
  const { body } = await new Promise((resolve, reject) => {
    adminUser
      .post('/scoreboard/api/roles')
      .send({ name: 'api role' })
      .expect(200)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  t.true(body.name === 'api role')
})

test('update role via api', async (t) => {
  const createResponse = await new Promise((resolve, reject) => {
    adminUser
      .post('/scoreboard/api/roles')
      .send({ name: 'change this' })
      .expect(200)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  const { body } = await new Promise((resolve, reject) => {
    adminUser
      .put(`/scoreboard/api/roles/${createResponse.body.id}`)
      .send({ name: 'updated api role' })
      .expect(200)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  t.true(body.name === 'updated api role')
})

test('delete role via api', async (t) => {
  const createResponse = await new Promise((resolve, reject) => {
    adminUser
      .post('/scoreboard/api/roles')
      .send({ name: 'delete this' })
      .expect(200)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  await new Promise((resolve, reject) => {
    adminUser
      .delete(`/scoreboard/api/roles/${createResponse.body.id}`)
      .expect(200)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  const getResponse = await new Promise((resolve, reject) => {
    adminUser
      .get(`/scoreboard/api/roles/${createResponse.body.id}`)
      .expect(404)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  t.true(getResponse.error.status === 404)
})

test('must be admin to use roles api', async (t) => {
  const authenticatedResponse = await new Promise((resolve, reject) => {
    authenticatedUser
      .get('/scoreboard/api/roles')
      .expect(401)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  const anonymousResponse = await new Promise((resolve, reject) => {
    anonymousUser
      .get('/scoreboard/api/roles')
      .expect(401)
      .end((err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })

  t.truthy(authenticatedResponse.error)
  t.truthy(anonymousResponse.error)
})
