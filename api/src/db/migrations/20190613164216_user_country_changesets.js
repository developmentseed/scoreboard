
exports.up = async (knex) => {
  try {
    await knex.schema.alterTable('user_country_edits', t => {
      t.integer('changeset_count').defaultTo(0)
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async (knex) => {
  try {
    await knex.schema.alterTable('user_coountry_edits', t => {
      t.dropColumn('changeset_count')
    })

  } catch (e) {
    console.error(e)
  }
}
