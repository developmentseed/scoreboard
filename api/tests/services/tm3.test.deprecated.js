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

const tm3proxy = http.createServer(yakbak('https://tasks.openstreetmap.us', {
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
  tm3proxy.listen(4848, t.end)
})

test.afterEach.cb(t => {
  tm3proxy.close(t.end)
})

test.serial('Test TM3', async t => {
  const tm = TaskingManagerFactory.createInstance({ id: 1, type: 'tm3', url: 'http://localhost:4848' })
  let projects = await tm.getProjects()
  t.true(projects.length > 0)

  let project = projects[0]
  let hasAllKeys = true
  let keysToCheck = [
    'priority',
    'name',
    'shortDescription',
    'percentValidated',
    'percentMapped',
    'projectId'
  ]

  keysToCheck.forEach(key => {
    hasAllKeys = hasAllKeys && has(key, project)
  })
  t.true(hasAllKeys)
})

test.serial('Test TM3 schema', async t => {
  const tm = TaskingManagerFactory.createInstanceM({ id: 1, type: 'tm3', url: 'http://localhost:4848' })
  let projects = await tm.getProjects()

  let project = projects[0]
  let keysToCheck = [
    'priority',
    'name',
    'shortDescription',
    'percentValidated',
    'percentMapped',
    'projectId'
  ]
  t.plan(keysToCheck.length)

  keysToCheck.forEach(key => {
    t.true(has(key, project))
  })
})

test.serial('Test URL forming', async t => {
  const tm = TaskingManagerFactory.createInstance({ id: 1, type: 'tm3', url: 'http://tasks.openstreetmap.us', opts: { proxy: 'http://localhost:4848' } })
  let projects = await tm.getProjects() // Should get from the proxy
  const project = projects.find(p => p.projectId === 77)
  t.truthy(project)

  const url = tm.getUrlForProject(project.projectId)
  t.is(url, `http://tasks.openstreetmap.us/project/77`)
})

test.serial('Test extra params', async t => {
  // Sort response with date
  const tm = TaskingManagerFactory.createInstance({ id: 1,
    type: 'tm3',
    url: 'http://localhost:4848',
    opts: {
      search_params: {
        'mapperLevel': 'BEGINNER'
      }
    } })

  let projects = await tm.getProjects()
  let levels = projects.map(p => p.mapperLevel)
  t.true(all(equals('BEGINNER'), levels))
})

test.only('Duplicate campaigns', async t => {
  // count is from seed
  const [first] = await db('campaigns').count()

  // Try adding the tasks again
  const [tm3] = await db('taskers').where('name', 'test tm3')
  const tm = TaskingManagerFactory.createInstance({ id: tm3.id, type: 'tm3', url: 'http://tasks.openstreetmap.us', opts: { proxy: 'http://localhost:4848' } })
  let projects = await tm.getProjects() // Should get from the proxy
  let dbObjects = await tm.toDBObjects(projects)
  await tm.updateDB(db, dbObjects)

  const [second] = await db('campaigns').count()
  t.is(first.count, second.count)
})
