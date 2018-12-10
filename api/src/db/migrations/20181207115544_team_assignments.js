
exports.up = async function (knex) {
  try {
    await knex.schema.createTable('team_assignments', table => {
      table.increments('id')
      table.integer('team_id')
      table.integer('campaign_id').references('id').inTable('campaigns')
      table.timestamps()
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex) {
  try {
    await knex.schema.dropTable('team_assignments')
  } catch (e) {
    console.error(e)
  }
}
