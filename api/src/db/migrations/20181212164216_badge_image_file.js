
exports.up = async function (knex, Promise) {
  try {
    await knex('badges').del()
    await knex.schema.table('badges', (table) => {
      table.string('imageFile')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex, Promise) {
  await knex('badges').del()
  await knex.schema.table('badges', (table) => {
    table.dropColumn('imageFile')
  })
}
