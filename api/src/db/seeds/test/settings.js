const { cache } = require('../../../config')
const { put } = require('../../../models/settings')

const settings = {
  'osmesa-db': process.env.OSMESA_DB
    ? process.env.OSMESA_DB
    : 'postgres://postgres@localhost:5437/postgres'
}

exports.seed = (knex) => knex('settings').del() // delete entries
  .then(async () => {
    const promises = Object.keys(settings).map(key => {
      cache.put(key, settings[key])
      return put(key, settings[key])
    })

    await Promise.all(promises)
  })
