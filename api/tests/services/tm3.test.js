/**
 * Test the TM service code for different TM adapters
 */
const { TM } = require('../../src/services/tm')
const test = require('ava')
const path = require('path')
const http = require('http')
const yakbak = require('yakbak')
const { has } = require('ramda')

const tm3proxy = http.createServer(yakbak('https://tasks.openstreetmap.us', {
  dirname: path.join(__dirname, '..', 'tapes')
}))

test.beforeEach.cb(t => {
  tm3proxy.listen(4848, t.end)
})

test.serial('Test TM3', async t => {
  const tm = new TM(1, 'tm3', 'http://localhost:4848')
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
  const tm = new TM(1, 'tm3', 'http://localhost:4848')
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
  const tm = new TM(1, 'tm3', 'http://tasks.openstreetmap.us', 'http://localhost:4848')
  let projects = await tm.getProjects() // Should get from the proxy

  const project = projects.find(p => p.projectId === 77)
  t.truthy(project)

  const url = tm.getUrlForProject(project.projectId)
  t.is(url, `http://tasks.openstreetmap.us/project/77`)
})
