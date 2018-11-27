
exports.up = async function (knex, Promise) {
  try {
    await knex.schema.alterTable('campaigns', function (t) {
      t.string('priority').alter()
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex, Promise) {
  try {
    await knex.schema.alterTable('campaigns', function (t) {
      t.integer('priority').alter()
    })
  } catch (e) {
    console.error(e)
  }
}
