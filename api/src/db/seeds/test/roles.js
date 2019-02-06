exports.seed = (knex) => {
  return knex('roles')
    .del()
    .then(() => {
      return knex('roles').insert([{ 'id': 1, name: 'admin' }])
    })
}
