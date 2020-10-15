/**
 * Test the TM service code for different TM adapters
 */

const { TaskingManagerFactory } = require('../../src/services/tm')
const db = require('../../src/db/connection')
const test = require('ava')
const path = require('path')
const http = require('http')
const yakbak = require('yakbak')
const { has, equals, all } = require('ramda')

const mrproxy = http.createServer(yakbak('https://maproulette.org', {
  dirname: path.join(__dirname, '..', 'tapes')
}))

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

test.beforeEach.cb(t => {
  mrproxy.listen(4848, t.end)
})

test.afterEach.cb(t => {
  mrproxy.close(t.end)
})

test.serial('Test Map Roulette', async t => {
  const tm = TaskingManagerFactory.createInstance({ id: 1, type: 'mr', url: 'http://localhost:4848' })
  let projects = await tm.getProjects()
  t.true(projects.length > 0)

  let project = projects[1]
  let hasAllKeys = true
  let keysToCheck = [
    'name',
    'description',
    'defaultPriority',
    'bounding',
    'created'
  ]

  keysToCheck.forEach(key => {
    hasAllKeys = hasAllKeys && has(key, project)
  })
  t.true(hasAllKeys)
})

test.serial('Test TM3 schema', async t => {
  const tm = TaskingManagerFactory.createInstance({ id: 1, type: 'mr', url: 'http://localhost:4848' })
  let projects = await tm.getProjects()

  let project = projects[1]
  let keysToCheck = [
    'name',
    'description',
    'defaultPriority',
    'bounding',
    'created'
  ]

  t.plan(keysToCheck.length)

  keysToCheck.forEach(key => {
    t.true(has(key, project))
  })
})

test.serial('Test URL forming', async t => {
  const tm = TaskingManagerFactory.createInstance({ id: 1, type: 'mr', url: 'http://maproulette.org', opts: { proxy: 'http://localhost:4848' } })
  let projects = await tm.getProjects() // Should get from the proxy
  const project = projects.find(p => p.id === 14634)
  t.truthy(project)

  const url = tm.getUrlForProject(project.id)
  t.is(url, `http://maproulette.org/challenge/14634`)
})

test.serial('Test extra params', async t => {
  // Sort response with date
  const tm = TaskingManagerFactory.createInstance({ id: 2,
    type: 'mr',
    url: 'http://localhost:4848',
    opts: {
      search_params: {
        'cd': 1
      }
    } })

  let projects = await tm.getProjects()
  let levels = projects.map(p => p.difficulty)
  t.true(all(equals(1), levels))
})

/*
test.only('Duplicate', async t => {
  // count is from seed
  const [first] = await db('campaigns').count()

  // Try adding the tasks again
  const [mr] = await db('taskers').where('type', 'mr')
  const tm = TaskingManagerFactory.createInstance({ id: mr.id, type: 'mr', url: 'http://maproulette.prg', opts: { proxy: 'http://localhost:4848' } })
  let projects = await tm.getProjects() // Should get from the proxy
  let dbObjects = await tm.toDBObjects(projects)
  await tm.updateDB(db, dbObjects)

  const [second] = await db('campaigns').count()
  t.is(first.count, second.count)
}) */
