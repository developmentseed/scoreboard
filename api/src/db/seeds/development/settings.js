const { cache } = require('../../../config')

const settings = {
  'osmesa-db': 'postgres://postgres@localhost:5434/postgres'
}

exports.seed = (knex) => knex('settings').del() // delete entries
  .then(async () => {
    const promises = Object.keys(settings).map(key => {
      cache.put(key, settings[key])
      return knex('settings').insert({ setting: key, value: settings[key] })
    })

    await Promise.all(promises)
  })
