// test timeseries api endpoint

const test = require('ava')
const request = require('supertest')
let app = require('../../src/index')

test.before(async () => {
  app = await app()
})

test.serial('Timeseries required parameter(s)', async (t) => {
  // 200 OK with 1 required parameter
  await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-26')
    .send()
    .expect(200)
  // 400 Bad request with missing 1 required parameter
  const response = await request(app)
    .get('/scoreboard/api/timeseries')
    .send()
    .expect(400)
  t.is(response.body.message, 'startDate is required')
})
