/**
 * Test the TM service code for different TM adapters
 */
const osmesa = require('../../src/services/osmesa')
const test = require('ava')

test.serial('get country', async t => {
  const country = await osmesa.getCountry('AGO')
  t.true(country && country.name === 'Angola')
})

test.serial('get user', async t => {
  const user = await osmesa.getUser(19239)
  t.true(user && user.name === 'ebrelsford')
})

test.serial('get campaign', async t => {
  const campaign = await osmesa.getCampaign('osmus-tasks-153')
  t.truthy(campaign && campaign.tag)
})

test.serial('get updates', async t => {
  const lastUpdated = await osmesa.getUpdates()
  t.truthy(lastUpdated)
})
