const db = require('./db/connection')
const { TM } = require('./services/tm')

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
      let tm = new TM(id, type, url)
      let projects = await tm.getProjects()
      let dbObjects = await tm.toDBObjects(projects)
      await TM.updateDB(db, dbObjects)
      await db('taskers').where('id', id).update('last_update', db.fn.now())
      console.log(`Updated ${name}`)
    }
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
