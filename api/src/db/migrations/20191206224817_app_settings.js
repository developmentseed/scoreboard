
exports.up = async function (knex) {
  try {
    await knex.schema.createTable('settings', t => {
      t.string('setting').primary()
      t.string('value')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex) {
  try {
    await knex.schema.dropTable('settings')
  } catch (e) {
    console.error(e)
  }
}
