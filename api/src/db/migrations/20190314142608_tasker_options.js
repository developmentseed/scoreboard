/**
 * We move the url proxy to a json object that contains
 * more options
 */
exports.up = async function (knex) {
  try {
    // Create a new options column
    await knex.schema.alterTable('taskers', t => {
      t.json('options')
    })

    // Add the proxy column to the new column
    let currentTaskers = await knex('taskers').select()
    let promises = currentTaskers.map(t => knex('taskers').where('id', t.id).update({
      options: { proxy: t.url_proxy }
    }))
    await Promise.all(promises)

    // Drop the old column
    await knex.schema.alterTable('taskers', t => {
      t.dropColumn('url_proxy')
    })

  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex) {
  try {
    // Create the url_proxy column
    await knex.schema.alterTable('taskers', t => {
      t.string('url_proxy')
    })

    // Add the proxy column to the new column
    let currentTaskers = await knex('taskers').select()
    let promises = currentTaskers.map(t => knex('taskers').where('id', t.id).update({
      url_proxy: t.options.proxy
    }))
    await Promise.all(promises)

    // Drop the options column
    await knex.schema.alterTable('taskers', t => {
      t.dropColumn('options')
    })
  } catch (e) {
    console.error(e)
  }
}
