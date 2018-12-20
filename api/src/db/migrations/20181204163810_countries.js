exports.up = async function (knex, Promise) {
  try {
    await knex.schema.createTable('user_country_edits', table => {
      table.increments('id')
      table.string('country_name')
      table.integer('user_id').references('users.id').onDelete('cascade')
      table.integer('edit_count').defaultTo(0)
      table.timestamps()
      table.unique(['user_id', 'country_name'])
    })
  } catch (e) {
    console.error(e)
    try {
      await knex.schema.dropTable('user_country_edits')
    } catch (e) {
      console.error(e)
    }
  }
}

exports.down = async function (knex, Promise) {
  try {
    await knex.schema.dropTable('user_country_edits')
  } catch (e) {
    console.error(e)
  }
}
