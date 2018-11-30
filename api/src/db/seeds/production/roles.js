exports.seed = (knex) => {
  return knex('roles')
    .del()
    .then(() => {
      return knex('roles').insert([{ name: 'admin' }])
    })
}
