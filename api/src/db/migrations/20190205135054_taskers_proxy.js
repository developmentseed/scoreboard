
exports.up = async function (knex) {
  try {
    await knex.schema.alterTable('taskers', t => {
      t.string('url_proxy')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex) {
  try {
    await knex.schema.alterTable('taskers', t => {
      t.dropColumn('url_proxy')
    })
  } catch (e) {
    console.error(e)
  }
}
