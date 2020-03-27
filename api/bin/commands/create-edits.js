const dbSettings = require('../../src/models/settings')
const db = require('../../src/db/connection')
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
    // Check if this user has logged in before to scoreboard
    const [user] = await db('users').where('osm_id', osmId)
    if (!user) {
      console.error(`This user doesn't exist in the Scoreboard database.`)
      return process.exit(1)
    }

    // Grab the encrypted settings and put them in the cache to decrypt
    const settings = await dbSettings.list()
    settings.forEach(({ setting, value }) => {
      cache.put(setting, value)
    })

    const osmesaDBURL = cache.get('osmesa-db')
    const osmesaDB = await knex({ client: 'pg', connection: osmesaDBURL })

    // Check if this user already has edits in osmesa
    // const [osmesaUser] = await osmesaDB('users').where('id', osmId)
    // if (osmesaUser) {
    //   console.error(`This user already has statistics in the OSMesa database`)
    //   return process.exit(1)
    // }

    // Clone the changesets and assign them all to the new user
    const changesets = await osmesaDB('changesets').select().orderByRaw('random()').limit(100)
    const newChangesets = []
    changesets.forEach(c => {
      const newChangeset = Object.assign({}, c)
      newChangeset.user_id = osmId
      newChangesets.push(newChangeset)
    })

    const insertPromises = newChangesets.map(c =>
      osmesaDB('changesets').where('id', c.id).update(c).returning('id'))
    await Promise.all(insertPromises)

    // get the user's displayname from the scoreboard db
    // add the user to osmesa
    await osmesaDB('users').insert({ id: user.osm_id, name: user.full_name })

    // refresh the materialized views
    await osmesaDB.schema.raw(`REFRESH MATERIALIZED VIEW hashtag_statistics`)
    await osmesaDB.schema.raw(`REFRESH MATERIALIZED VIEW country_statistics`)
    await osmesaDB.schema.raw(`REFRESH MATERIALIZED VIEW user_statistics`)
    await osmesaDB.schema.raw(`REFRESH MATERIALIZED VIEW hashtag_user_statistics`)

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
