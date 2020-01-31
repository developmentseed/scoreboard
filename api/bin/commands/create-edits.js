const dbSettings = require('../../src/models/settings')
const { cache } = require('../../src/config')
const knex = require('knex')

/**
 * Print usage of this command
 */
function printUsage () {
  console.error('--osm-id required')
}

/**
 * Command to assign edits to a user
 * Takes a random user from fabricator and copies over random statistics
 * for the supplied user
 */
async function command (args, flags) {
  const { osmId } = flags

  if (!osmId) {
    printUsage()
    return process.exit(1)
  }

  try {
    // Grab the encrypted settings and put them in the cache to decrypt
    const settings = await dbSettings.list()
    settings.forEach(({ setting, value }) => {
      cache.put(setting, value)
    })

    const osmesaDBURL = cache.get('osmesa-db')
    const osmesaDB = await knex({ client: 'pg', connection: osmesaDBURL })

    // Clone the changesets and assign them all to the new user
    const changesets = await osmesaDB('changesets').select().orderByRaw('random()').limit(10)
    const newChangesets = []
    changesets.forEach(c => {
      const newChangeset = Object.assign({}, c)
      newChangeset.user_id = osmId
      newChangesets.push(newChangeset)
    })

    const insertPromises = newChangesets.map(c =>
      osmesaDB('changesets').where('id', c.id).update(c).returning('id'))
    const ids = await Promise.all(insertPromises)
    await osmesaDB.destroy()
    process.exit()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

const args = []

const flags = [
  {
    name: 'osm-id',
    alias: 'osmId',
    type: 'integer'
  }
]

module.exports = { command, args, flags }
