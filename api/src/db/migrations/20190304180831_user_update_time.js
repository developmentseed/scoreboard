
exports.up = async function (knex, Promise) {
  try {
    await knex.schema.createTable('user_update', t => {
      t.increments('id').primary()
      t.datetime('last_update')
    })
    await knex('user_update').insert({ 'id': 1 })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex, Promise) {
  try {
    await knex.schema.dropTable('user_update')
  } catch (e) {
    console.error(e)
  }
}
