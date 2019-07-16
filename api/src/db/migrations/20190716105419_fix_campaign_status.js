
exports.up = async function (knex) {
  try {
    await knex.schema.alterTable('campaigns', t => {
      t.string('status').alter()
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex) {
  try {
    await knex.schema.alterTable('campaigns', t => {
      t.integer('status').alter()
    })
  } catch (e) {
    console.error(e)
  }
}
