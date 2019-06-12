/**
 * Test the TM service code for different TM adapters
 */
const { TM } = require('../../src/services/tm')
const db = require('../../src/db/connection')
const test = require('ava')
const path = require('path')
const http = require('http')
const yakbak = require('yakbak')
const { compareAsc } = require('date-fns')
const { has, sort } = require('ramda')

const tm2proxy = http.createServer(yakbak('https://tasks.openstreetmap.id', {
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
  tm2proxy.listen(4849, t.end)
})

test.afterEach.cb(t => {
  tm2proxy.close(t.end)
})

test.serial('Test TM2 response', async t => {
  const tm = new TM(1, 'tm2', 'http://localhost:4849')
  let projects = await tm.getProjects()
  t.true(projects.length > 0)
})

test.serial('Test TM2 schema', async t => {
  const tm = new TM(1, 'tm2', 'http://localhost:4849')
  let projects = await tm.getProjects()

  let project = projects[0]
  let keysToCheck = [
    'done',
    'description',
    'author',
    'status',
    'changeset_comment',
    'priority',
    'name',
    'instructions',
    'validated'
  ]
  t.plan(keysToCheck.length)

  keysToCheck.forEach(key => {
    t.true(has(key, project.properties))
  })
})

test.serial('Test URL forming', async t => {
  const tm = new TM(1, 'tm2', 'http://tasks.openstreetmap.id', { proxy: 'http://localhost:4849' })
  let projects = await tm.getProjects() // Should get from the proxy

  const project = projects.find(p => p.id === 361)
  t.truthy(project)

  const url = tm.getUrlForProject(project.id)
  t.is(url, `http://tasks.openstreetmap.id/project/361`)
})

test.serial('Test extra params', async t => {
  // Sort response with date
  const tm = new TM(1, 'tm2', 'http://localhost:4849', {
    search_params: {
      'sort_by': 'created'
    }
  })

  let projects = await tm.getProjects()
  let dates = projects.map(p => p.properties.created)
  t.deepEqual(dates, sort(compareAsc, dates), 'dates are sorted')
})

test.serial('Duplicate campaigns', async t => {
  // count is from seed
  const [first] = await db('campaigns').count()

  // Try adding the tasks again
  const [tm2] = await db('taskers').where('name', 'test tm2')
  const tm = new TM(tm2.id, 'tm2', 'http://tasks.openstreetmap.id', { proxy: 'http://localhost:4849' })
  let projects = await tm.getProjects() // Should get from the proxy
  let dbObjects = await tm.toDBObjects(projects)
  await tm.updateDB(db, dbObjects)

  const [second] = await db('campaigns').count()
  t.is(first.count, second.count)
})
