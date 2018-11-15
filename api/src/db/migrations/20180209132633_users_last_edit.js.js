exports.up = async function (knex, Promise) {
  try {
    await knex.schema.table('users', table => {
      table.date('last_edit')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex, Promise) {
  try {
    await knex.schema.table('users', table => {
      table.dropColumn('last_edit')
    })
  } catch (e) {
    console.error(e)
  }
}
