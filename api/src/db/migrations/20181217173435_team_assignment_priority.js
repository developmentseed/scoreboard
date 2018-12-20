
exports.up = async function (knex) {
  try {
    await knex.schema.alterTable('team_assignments', t => {
      t.integer('team_priority')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex) {
  try {
    await knex.schema.alterTable('team_assignments', t => {
      t.dropColumn('team_priority')
    })
  } catch (e) {
    console.error(e)
  }
}
