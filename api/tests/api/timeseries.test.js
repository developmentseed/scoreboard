// test timeseries api endpoint

const test = require('ava')
const request = require('supertest')
let app = require('../../src/index')

test.before(async () => {
  app = await app()
})

test.serial('Timeseries required parameter(s)', async (t) => {
  // 200 OK with 1 required parameter (startDate)
  await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-26&countriesFilter=USA|CAN')
    .send()
    .expect(200)
  // 400 Bad request with missing 1 required parameter (startDate
  const response = await request(app)
    .get('/scoreboard/api/timeseries?countriesFilter=USA|CAN')
    .send()
    .expect(400)
  t.is(response.body.message, 'startDate is required')
})

test.serial('Timeseries validates startDate', async (t) => {
  // 200 OK with 1 required parameter
  await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-28&countriesFilter=USA|CAN')
    .send()
    .expect(200)
  // 400 Bad request with invalid startDate
  const response = await request(app)
    .get('/scoreboard/api/timeseries?startDate=xxxxxx&countriesFilter=USA|CAN')
    .send()
    .expect(400)
  t.is(response.body.message, 'the input "xxxxxx" can\'t be parsed as ISO 8601')
})

test.serial('Timeseries validates endDate', async (t) => {
  // 200 OK with valid endDate
  await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-01&endDate=2020-09-28&countriesFilter=USA|CAN')
    .send()
    .expect(200)
  // 400 Bad request with invalid endDate
  const response = await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-01&endDate=xxxxxx&countriesFilter=USA|CAN')
    .send()
    .expect(400)
  t.is(response.body.message, 'the input "xxxxxx" can\'t be parsed as ISO 8601')
})

test.serial('Timeseries validates binInterval', async (t) => {
  // binInterval is an ISO duration string (https://en.wikipedia.org/wiki/ISO_8601#Durations)

  // 200 OK with valid binInterval
  await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-01&binInterval=P1Y2M10DT2H30M&countriesFilter=USA|CAN')
    .send()
    .expect(200)
  // 400 Bad request with invalid binInterval
  const response = await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-01&binInterval=xxxxxx&countriesFilter=USA|CAN')
    .send()
    .expect(400)
  t.is(response.body.message, 'the input "xxxxxx" can\'t be parsed as ISO 8601')
})

test.serial('Timeseries validates userIdsFilter', async (t) => {
  // 200 OK with valid userIdsFilters
  await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-01&userIdsFilter=999')
    .send()
    .expect(200)
  await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-01&userIdsFilter=123|456')
    .send()
    .expect(200)
  // 400 Bad request with invalid userIdsFilters
  const response = await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-01&userIdsFilter=xxxxxx')
    .send()
    .expect(400)
  t.is(response.body.message, 'cannot parse userIdsFilter, expected pipe delimited integers')
})

test.serial('Timeseries requires at least one filter', async (t) => {
  // 200 OK with valid with one or more filters
  await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-01&userIdsFilter=999')
    .send()
    .expect(200)
  await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-01&userIdsFilter=999&countriesFilter=USA|CAN')
    .send()
    .expect(200)
  await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-01&userIdsFilter=123|456')
    .send()
    .expect(200)
  // 400 Bad request with no filters
  const response = await request(app)
    .get('/scoreboard/api/timeseries?startDate=2020-09-01')
    .send()
    .expect(400)
  t.is(response.body.message, 'at least one filter is required')
})
