
exports.up = async function (knex) {
  try {
    // Enforce constraint
    await knex.schema.alterTable('badges', t => {
      t.unique('name')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex) {
  try {
    await knex.schema.alterTable('badges', t => {
      t.dropUnique('name')
    })
  } catch (e) {
    console.error(e)
  }
}
