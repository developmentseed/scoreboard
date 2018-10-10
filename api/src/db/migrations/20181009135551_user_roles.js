
exports.up = function (knex, Promise) {
  try {
    await knex.schema.table('users', table => {
      table.specificType('roles', 'string[]')
    })
  } 
  catch (e) {
    console.error(e);
  }
}

exports.down = function (knex, Promise) {
  try {
    await knex.schema.table('users', table => {
      table.dropColumn('roles')
    })
  } catch (e) {
    console.error(e)
  }
}
