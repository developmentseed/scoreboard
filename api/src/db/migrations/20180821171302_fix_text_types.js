
exports.up = async function (knex, Promise) {
  await knex.schema.alterTable('campaigns', table => {
    table.text('geometry').alter()
    table.text('description').alter()
    table.text('changeset_comment').alter()
    table.text('instructions').alter()
  })
}

exports.down = async function (knex, Promise) {
  await knex.schema.alterTable('campaigns', table => {
    table.string('geometry').alter()
    table.string('description').alter()
    table.string('changeset_comment').alter()
    table.string('instructions').alter()
  })
}
