const { USERS_URL, OSMESA_API } = require('./config')
const rp = require('request-promise-native')
const conn = require('./db/connection')
const { compareDesc, parse } = require('date-fns')
const {
  uniqBy, tail, zipObj, merge, map, props, sum, head, prop
} = require('ramda')

/*
 * Given the edit times for a user get the last edit
 *
 * @param {Array[Date]} editTimes
 */
function getLastEdit(editTimes) {
  const days = editTimes.map((time) => parse(time.day))
  return head(days.sort(compareDesc))
}

const summable = [
  'buildings_add',
  'buildings_mod',
  'poi_add',
  'roads_add',
  'roads_mod',
  'waterways_add'
]

/*
 * Given a records object, sum all the summable edits
 * and return the number back as the sum of all edits
 *
 * @param {Object} records
 */
const sumEdits = (records) => {
  const summableProperties = map((x) => Number(x))(props(summable, records))
  return sum(summableProperties)
}

/*
 * Worker runs in a clock process and updates the cache
 * that holds users
 *
 * @returns {Promise} a response
 */
async function usersWorker() {
  if (!USERS_URL) throw new Error('Users URL not defined')

  try {
    const response = await rp(`${USERS_URL}`)

    const lines = tail(response.split('\n'))

    // Parse CSV and turn to SQLObjects
    let sqlObjects = lines
      .filter((line) => line.length > 0)
      .map((line) => {
        const parts = line.split(',')
        return zipObj(
          ['osm_id', 'display_name', 'email', 'status', 'full_name', 'country'],
          parts
        )
      })

    // Filter out duplicates
    sqlObjects = uniqBy(prop('osm_id'), sqlObjects)

    // Map user info to knex objects
    const delay = (time) => new Promise((res) => setTimeout(() => res(), time))
    const promises = sqlObjects.map(async (obj) => {
      // Get edit count from OSMesa
      await delay(50)
      try {
        const resp = await rp(`${OSMESA_API}/users/${obj.osm_id}`)

        if (resp.length) {
          const data = JSON.parse(resp)
          obj.edit_count = sumEdits(data) || 0
          obj.last_edit = getLastEdit(data.edit_times)
        }
      }
      catch (e) {
        console.error(`${obj.osm_id} not retrieved from OSMesa`, e.message)
      }

      return conn('users')
        .where('email', obj.email)
        .then((rows) => {
          if (rows.length === 0) { // Not found
            return conn('users').insert(
              merge(obj, {
                updated_at: conn.fn.now(),
                created_at: conn.fn.now()
              })
            )
          }

          return conn('users').where('email', obj.email).update(
            merge(obj, {
              updated_at: conn.fn.now()
            })
          )
        })
    })

    // Return a single promise wrapping all the
    // SQL statements
    return Promise.all(promises)
  }
  catch (e) {
    console.error(e)
    return Promise.resolve()
  }
}

// Run
if (require.main === module) {
  usersWorker()
    .then((resp) => {
      console.log(`Updated ${resp.length} records.`)
      process.exit(0)
    })
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
}

module.exports = usersWorker
