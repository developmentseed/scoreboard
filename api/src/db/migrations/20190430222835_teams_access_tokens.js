
exports.up = async function (knex) {
  try {
    await knex.schema.createTable('teams_access_tokens', t => {
      t.increments('id').primary()
      t.integer('osm_id').references('users.osm_id')
      t.string('access_token')
      t.string('refresh_token')
      t.string('expires_in')
    })
  } catch (e) {
    console.error(e)
  }
  
}

exports.down = async function (knex) {
  try {
    await knex.schema.dropTable('teams_access_tokens')
  } catch (e) {
    console.error(e)
  }
}
