exports.up = async function (knex, Promise) {
  try {
    await knex.schema.createTable('users', table => {
      table.increments('id')
      table.integer('osm_id')
      table.string('display_name')
      table.string('email')
      table.string('status')
      table.string('full_name')
      table.integer('edit_count')
      table.string('country')
      table.timestamps()
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex, Promise) {
  try {
    await knex.schema.dropTable('users')
  } catch (e) {
    console.error(e)
  }
}
