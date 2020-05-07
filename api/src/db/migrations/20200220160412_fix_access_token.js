
exports.up = async function (knex) {
  try {
    await knex.schema.table('teams_access_tokens', t => {
      t.dropColumn('expires_in')
      t.datetime('expires_at')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex) {
  try {
    await knex.schema.table('teams_access_tokens', t => {
      t.dropColumn('expires_at')
      t.string('expires_in')
    })
  } catch (e) {
    console.error(e)
  }
}
