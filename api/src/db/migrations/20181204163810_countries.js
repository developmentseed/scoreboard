exports.up = async function (knex, Promise) {
  try {
    await knex.schema.createTable('countries', table => {
      table.increments('id')
      table.string('alpha2')
      table.string('name')
      table.integer('edit_count').defaultTo(0)
      table.timestamps()
      table.unique('alpha2')
    })
    await knex.schema.createTable('user_country_edits', table => {
      table.increments('id')
      table.integer('country_id').references('countries.id').notNull().onDelete('cascade')
      table.integer('user_id').references('users.id').onDelete('cascade')
      table.integer('edit_count').defaultTo(0)
      table.timestamps()
      table.unique(['user_id', 'country_id'])
    })
  } catch (e) {
    console.error(e)
    try {
      await knex.schema.dropTable('countries')
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
  try {
    await knex.schema.dropTable('countries')
  } catch (e) {
    console.error(e)
  }
}
