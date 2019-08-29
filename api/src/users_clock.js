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
 * @param {Array[Date]} dayEdits
 */
function getLastEdit (dayEdits) {
  const days = Object.keys(dayEdits).map((day) => parse(day))
  return head(days.sort(compareDesc))
}

async function updateCountries (userID, countryEdits, countryChangesets) {
  const countryEditTotal = {}
  const countryChangesetTotal = {}
  const countries = Object.keys(countryEdits)

  // get total edits for a given user
  const promises = countries.map((country) => {
    if (isState(country)) {
      country = 'United States of America'
    }

    if (!countryEditTotal[country]) {
      countryEditTotal[country] = 0
      countryChangesetTotal[country] = 0
    }

    if (countryEdits[country]) countryEditTotal[country] += countryEdits[country]
    if (countryChangesets[country]) countryChangesetTotal[country] += countryChangesets[country]

    return updateUserCountryEdit(
      userID,
      country,
      countryEditTotal[country],
      countryChangesetTotal[country]
    )
  })

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
          obj.last_edit = getLastEdit(data.day_edits)
          await updateCountries(obj.id, data.country_edits, data.country_changesets)
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
