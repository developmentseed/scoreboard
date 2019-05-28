const { compareDesc, parse } = require('date-fns')
const {
  merge, head
} = require('ramda')
const sumEdits = require('./utils/sum_edits')
const pLimit = require('p-limit')
const OSMesa = require('./services/osmesa')
const db = require('./db/connection')
const { updateUserCountryEdit, isState } = require('./models/userCountryEdits')

/*
 * Given the edit times for a user get the last edit
 *
 * @param {Array[Date]} editTimes
 */
function getLastEdit (editTimes) {
  const days = editTimes.map((time) => parse(time.day))
  return head(days.sort(compareDesc))
}

async function updateCountries (userID, countryEditList) {
  const countryTotal = {}

  // get total edits for a given user
  countryEditList.forEach((tuple) => {
    let countryName = tuple.name
    if (isState(countryName)) {
      countryName = 'United States of America'
    }
    if (!countryTotal[countryName]) {
      countryTotal[countryName] = 0
    }
    countryTotal[countryName] += tuple.count
  })

  // edit countries for each user
  const promises = Object.keys(
    countryTotal
  ).map((country) => updateUserCountryEdit(
    userID,
    country,
    countryTotal[country]
  ))
  return Promise.all(promises)
}

/*
 * Worker runs in a clock process and updates the cache
 * that holds users
 *
 * @returns {Promise} a response
 */
async function usersWorker () {
  try {
    const users = await db('users').select('id', 'osm_id') // Get all users

    // run only 100 concurrent events
    const limit = pLimit(100)
    const promises = users.map((obj) => limit(async () => {
      // Get edit count from OSMesa
      try {
        const resp = await OSMesa.getUser(obj.osm_id)

        if (resp.length) {
          const data = JSON.parse(resp)
          obj.edit_count = sumEdits(data) || 0
          obj.last_edit = getLastEdit(data.edit_times)
          await updateCountries(obj.id, data.country_list)
        }
      } catch (e) {
        if (e.statusCode !== 404) {
          // Only log if there was a server error
          console.error(`${obj.osm_id} not retrieved from OSMesa`, e.message)
        }
      }

      return db('users')
        .where('osm_id', obj.osm_id)
        .then(() => db('users').where('osm_id', obj.osm_id).update(
          merge(obj, {
            updated_at: db.fn.now()
          })
        ))
    }))

    // Return a single promise wrapping all the
    // SQL statements
    return Promise.all(promises)
  } catch (e) {
    console.error(e)
    return Promise.resolve()
  }
}

// Run
if (require.main === module) {
  usersWorker()
    .then(async resp => {
      console.log(`Updated ${resp.length} records.`)
      await db('user_update').where('id', '=', 1)
        .update({ last_update: new Date() })
      await db.destroy()
      process.exit(0)
    })
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
}

module.exports = usersWorker
