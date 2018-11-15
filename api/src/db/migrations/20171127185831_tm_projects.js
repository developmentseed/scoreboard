exports.up = async function (knex, Promise) {
  try {
    await knex.schema.createTable('campaigns', table => {
      table.increments('id')
      table.integer('tm_id')
      table.string('campaign_hashtag')
      table.string('geometry')
      table.float('done')
      table.string('description')
      table.string('author')
      table.integer('status')
      table.string('changeset_comment')
      table.float('priority')
      table.string('name')
      table.string('instructions')
      table.float('validated')
      table.timestamps()
    })

    await knex.schema.createTable('campaigns_hashtags', table => {
      table.increments('id')
      table.string('hashtag')
      table.integer('campaign_id').references('campaigns.id')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex, Promise) {
  try {
    await knex.schema.dropTable('campaigns_hashtags')
    await knex.schema.dropTable('campaigns')
  } catch (e) {
    console.error(e)
  }
}
