const db = require('./db/connection')
const { TaskingManagerFactory } = require('./services/tm')
const bbox = require('@turf/bbox').default
const bboxPolygon = require('@turf/bbox-polygon').default
const dbSettings = require('./models/settings')
const { featureCollection } = require('@turf/helpers')
const { cache } = require('./config')

/**
 * Worker runs in a clock process and updates the cache
 * that holds Tasking Manager statistics
 *
 * @returns {Promise} a response
 */
async function tmWorker (isCmd) {
  try {
    // Get taskers
    let taskers = await db('taskers').select()
    for (let i = 0; i < taskers.length; i++) {
      let { id, type, url, name, options } = taskers[i]
      if (isCmd) console.log(`Updating projects for ${name}`)
      let tm = TaskingManagerFactory.createInstance({ id, type, url, opts: options })
      if (isCmd) console.log('Getting projects from API..')
      let projects = await tm.getProjects()
      let dbObjects = await tm.toDBObjects(projects)

      if (isCmd) console.log('Updating database..')
      await tm.updateDB(db, dbObjects)
      await db('taskers').where('id', id).update('last_update', db.fn.now())
      if (isCmd) console.log(`${name} updated\n\n`)
    }

    // Get all features and turn them into a single featurecollection
    let geometries = await db('campaigns').select('geometry')
    let bboxes = geometries.map(geom => bbox(JSON.parse(geom.geometry)))
    let features = bboxes.map(bboxPolygon)
    let fc = featureCollection(features)
    await db.transaction(async trx => {
      await trx('features').where('name', 'tm_campaigns').del()
      await trx('features').insert({
        'name': 'tm_campaigns',
        'feature': fc,
        'created_at': db.fn.now(),
        'updated_at': db.fn.now()
      })
    })
  } catch (e) {
    console.error(e)
    return Promise.reject(e)
  }
}

// Run
if (require.main === module) {
  dbSettings.list().then(settings =>
    // load the cache
    settings.forEach(({ setting, value }) => {
      cache.put(setting, value)
    })
  )
    .then(() => tmWorker(true))
    .then(() => {
      console.log(`Updated task records.`)
      process.exit(0)
    })
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
}

module.exports = tmWorker
