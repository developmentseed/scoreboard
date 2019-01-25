/**
 * Test the TM service code for different TM adapters
 */
const { TM } = require('../../src/services/tm')
const test = require('ava')
const path = require('path')
const http = require('http')
const yakbak = require('yakbak')
const { has } = require('ramda')

const tm2proxy = http.createServer(yakbak('https://tasks.openstreetmap.id', {
  dirname: path.join(__dirname, '..', 'tapes')
}))

test.beforeEach.cb(t => {
  tm2proxy.listen(4849, t.end)
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
