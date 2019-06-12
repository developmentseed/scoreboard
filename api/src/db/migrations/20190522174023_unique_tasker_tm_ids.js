
exports.up = async function (knex) {
  try {
    await knex.schema.alterTable('campaigns', t => {
      t.unique(['tasker_id', 'tm_id'])
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex) {
  try {
    await knex.schema.alterTable('campaigns', t => {
      t.dropUnique(['tasker_id', 'tm_id'])
    })
  } catch (e) {
    console.error(e)
  }
}
