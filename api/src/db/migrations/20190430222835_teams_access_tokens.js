
exports.up = async function (knex) {
  try {
    await knex.schema.table('users', t => {
      t.unique('osm_id')
    })

    await knex.schema.createTable('teams_access_tokens', t => {
      t.increments('id').primary()
      t.integer('osm_id').references('users.osm_id').onDelete('CASCADE')
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
    await knex.raw(`
    ALTER TABLE users
    DROP CONSTRAINT users_osm_id_unique CASCADE
    `)
  } catch (e) {
    console.error(e)
  }
}
