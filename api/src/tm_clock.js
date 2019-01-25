const db = require('./db/connection')
const { TM } = require('./services/tm')
const bbox = require('@turf/bbox').default
const bboxPolygon = require('@turf/bbox-polygon').default
const { featureCollection } = require('@turf/helpers')

/**
 * Worker runs in a clock process and updates the cache
 * that holds Tasking Manager statistics
 *
 * @returns {Promise} a response
 */
async function tmWorker () {
  try {
    // Get taskers
    let taskers = await db('taskers').select()
    for (let i = 0; i < taskers.length; i++) {
      let { id, type, url, name } = taskers[i]
      console.log(`Updating projects for ${name}`)
      let tm = new TM(id, type, url)
      console.log('Getting projects from API..')
      let projects = await tm.getProjects()
      let dbObjects = await tm.toDBObjects(projects)

      console.log('Updating database..')
      await tm.updateDB(db, dbObjects)
      await db('taskers').where('id', id).update('last_update', db.fn.now())
      console.log(`${name} updated\n\n`)
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
  tmWorker()
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
