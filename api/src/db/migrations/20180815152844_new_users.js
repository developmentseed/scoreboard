/*
  We will roll user metadata into a json column
  named user_info and create a new user_stats json

  top level attributes become:
  id, osm_id, full_name, country, user_info, user_stats, last_edit
*/
exports.up = async function (knex, Promise) {
  await knex.schema.table('users', table => {
    table.dropColumns('display_name', 'email', 'status')
    table.json('user_info')
    table.json('user_stats')
  })
}

exports.down = async function (knex, Promise) {
  await knex.schema.table('users', table => {
    table.string('display_name')
    table.string('email')
    table.string('status')
    table.dropColumns('user_info', 'user_stats')
  })
}
