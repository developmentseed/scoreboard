exports.up = async (knex, Promise) => {
  try {
    await knex.schema.createTable('assignments', (table) => {
      table.increments('id')
      table.integer('assignee_id').references('users.id')
      table.integer('assigner_id').references('users.id')
      table.integer('campaign_id').references('campaigns.id')
      table.date('due')
      table.timestamps(false, true)
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async (knex, Promise) => {
  try {
    await knex.schema.dropTable('assignments')
  } catch (e) {
    console.error(e)
  }
}
