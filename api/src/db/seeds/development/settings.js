const { cache } = require('../../../config')
const { put } = require('../../../models/settings')

const settings = {
  // default
  'osmesa-db': 'postgres://postgres@localhost:5434/postgres'
}

exports.seed = (knex) => knex('settings').del() // delete entries
  .then(async () => {
    const promises = Object.keys(settings).map(key => {
      cache.put(key, settings[key])
      return put(key, settings[key])
    })

    await Promise.all(promises)
  })
