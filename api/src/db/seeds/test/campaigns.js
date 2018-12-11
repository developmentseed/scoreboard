const campaigns = require('../../../fixtures/campaigns.json')

exports.seed = (knex) => {
  return knex('campaigns')
    .del()
    .then(() => {
      return knex('campaigns').insert(campaigns)
    })
}
