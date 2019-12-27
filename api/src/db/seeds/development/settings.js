exports.seed = (knex) => knex('settings').del() // delete entries
  .then(async () => {
    await knex('settings').insert([
      { key: 'osmesa-db', value: 'postgres://postgres@localhost:5434/postgres' }
    ])
  })
