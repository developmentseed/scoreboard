/**
 * Test the TM service code for different TM adapters
 */
const osmesa = require('../../src/services/osmesa')
const test = require('ava')

test.serial('get country', async t => {
  const country = await osmesa.getCountry('BEL')
  console.log('country', country)
  t.true(country && country.name === 'Belgium')
})

test.serial('get user', async t => {
  const user = await osmesa.getUser(19239)
  console.log('user', user)
  t.true(user && user.name === 'ebrelsford')
})

test.serial('get campaign', async t => {
  const campaign = await osmesa.getCampaign(71)
  console.log('campaign', campaign)
  t.truthy(campaign && campaign.tag)
})

test.serial('get updates', async t => {
  const lastUpdated = await osmesa.getUpdates()
  console.log('lastUpdated', lastUpdated)
  t.truthy(lastUpdated)
})
