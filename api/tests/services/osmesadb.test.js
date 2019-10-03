/**
 * Test the TM service code for different TM adapters
 */
const osmesa = require('../../src/services/osmesa')
const test = require('ava')

test.serial('get country', async t => {
  const data = await osmesa.getCountry('GIN')
  const country = JSON.parse(data)
  console.log('country', country)
  t.true(country && country.name === 'Guinea')
})
