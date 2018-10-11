
exports.up = async function (knex, Promise) {
  try {
    await knex.schema.table('users', table => {
      table.specificType('roles', 'text[]')
    })
  } 
  catch (e) {
    console.error(e);
  }
}

exports.down = async function (knex, Promise) {
  try {
    await knex.schema.table('users', table => {
      table.dropColumn('roles')
    })
  } catch (e) {
    console.error(e)
  }
}
