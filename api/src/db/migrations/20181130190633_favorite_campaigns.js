
exports.up = async (knex, Promise) => {
  try {
    await knex.schema.createTable('favorite_campaigns', (table) => {
      table.increments('id')
      table.integer('user_id').references('users.id')
      table.integer('campaign_id').references('campaigns.id')
      table.unique(['user_id', 'campaign_id'])
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async (knex, Promise) => {
  try {
    await knex.schema.dropTable('favorite_campaigns')
  } catch (e) {
    console.error(e)
  }
}
