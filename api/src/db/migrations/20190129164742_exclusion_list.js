
exports.up = async function (knex) {
  try {
    await knex.schema.createTable('exclusion_list', t => {
      t.increments('id')
      t.integer('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex) {
  try {
    await knex.schema.dropTable('exclusion_list')
  } catch (e) {
    console.error(e)
  }
}
