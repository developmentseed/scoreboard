/**
 * Test the TM service code for different TM adapters
 */
const osmesa = require('../../src/services/osmesa')
const test = require('ava')

test.serial('get country', async t => {
  const country = await osmesa.getCountry('GIN')
  console.log('country', country)
  t.true(country && country.name === 'Guinea')
})

test.serial('get user', async t => {
  const user = await osmesa.getUser(1)
  console.log('user', user)
  t.true(user && user.name === 'user_1')
})

test.serial('get campaign', async t => {
  const campaign = await osmesa.getCampaign(1)
  console.log('campaign', campaign)
  t.truthy(campaign && campaign.tag)
})

test.serial('get updates', async t => {
  const lastUpdated = await osmesa.getUpdates()
  console.log('lastUpdated', lastUpdated)
  t.truthy(lastUpdated)
})
