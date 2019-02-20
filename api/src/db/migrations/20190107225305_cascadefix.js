
exports.up = async function (knex) {
  try {
    await knex.schema.alterTable('assignments', t => {
      t.dropForeign('user_id')
      t.dropForeign('campaign_id')
      t.foreign('user_id').references('users.id').onDelete('CASCADE')
      t.foreign('campaign_id').references('campaigns.id').onDelete('CASCADE')
    })

    await knex.schema.alterTable('favorite_campaigns', t => {
      t.dropForeign('user_id')
      t.dropForeign('campaign_id')
      t.foreign('user_id').references('users.id').onDelete('CASCADE')
      t.foreign('campaign_id').references('campaigns.id').onDelete('CASCADE')
    })

    await knex.schema.alterTable('team_assignments', t => {
      t.dropForeign('campaign_id')
      t.foreign('campaign_id').references('id').inTable('campaigns').onDelete('CASCADE')
    })

    await knex.schema.alterTable('campaigns', t => {
      t.dropForeign('tasker_id')
      t.foreign('tasker_id').references('taskers.id').onDelete('CASCADE')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex) {
  try {
    await knex.schema.alterTable('assignments', t => {
      t.dropForeign('user_id')
      t.dropForeign('campaign_id')
      t.foreign('user_id').references('users.id').onDelete('NO ACTION')
      t.foreign('campaign_id').references('campaigns.id').onDelete('NO ACTION')
    })

    await knex.schema.alterTable('favorite_campaigns', t => {
      t.dropForeign('user_id')
      t.dropForeign('campaign_id')
      t.foreign('user_id').references('users.id').onDelete('NO ACTION')
      t.foreign('campaign_id').references('campaigns.id').onDelete('NO ACTION')
    })

    await knex.schema.alterTable('team_assignments', t => {
      t.dropForeign('campaign_id')
      t.foreign('campaign_id').references('id').inTable('campaigns').onDelete('NO ACTION')
    })

    await knex.schema.alterTable('campaigns', t => {
      t.dropForeign('tasker_id')
      t.foreign('tasker_id').references('taskers.id').onDelete('NO ACTION')
    })
  } catch (e) {
    console.error(e)
  }
}
