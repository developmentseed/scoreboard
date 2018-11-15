exports.up = async function (knex, Promise) {
  try {
    await knex.schema.createTable('features', table => {
      table.increments('id')
      table.string('name')
      table.json('feature')
      table.timestamps()
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex, Promise) {
  try {
    await knex.schema.dropTable('features')
  } catch (e) {
    console.error(e)
  }
}
