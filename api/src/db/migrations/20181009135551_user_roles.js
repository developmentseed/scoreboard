
exports.up = async function (knex, Promise) {
  try {
    await knex.schema.createTable('roles', (table) => {
      table.increments('id')
      table.string('name')
      table.timestamps(false, true)
    })

    await knex.schema.table('users', (table) => {
      table.specificType('roles', 'int[]')
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
