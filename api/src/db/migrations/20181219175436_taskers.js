
exports.up = async function (knex) {
  try {
    await knex.schema.createTable('taskers', t => {
      t.increments('id').primary()
      t.string('name')
      t.string('url')
      t.string('type')
      t.string('description')
      t.datetime('last_update')
    })

    await knex.schema.alterTable('campaigns', t => {
      t.integer('tasker_id').references('taskers.id')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex) {
  try {
    await knex.schema.alterTable('campaigns', t => {
      t.dropColumn('tasker_id')
    })

    await knex.schema.dropTable('taskers')
  } catch (e) {
    console.error(e)
  }
}
