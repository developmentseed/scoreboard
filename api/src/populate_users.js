
const conn = require('./db/connection')
const rp = require('request-promise-native')
const {
  uniqBy, tail, zipObj, merge, prop
} = require('ramda')

/*
 * Populate users lists from a remote csv file
 *
 * @returns {Promise} a response
 */
async function populateUsers () {
  try {
    const db = conn()
    if (!process.env.USERS_URL) throw new Error('Users URL not defined')
    const response = await rp(`${process.env.USERS_URL}`)

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
    const promises = sqlObjects.map(async (obj) => {
      return db('users')
        .where('osm_id', obj.osm_id)
        .then((rows) => {
          const user = {
            osm_id: obj.osm_id,
            full_name: obj.display_name,
            country: obj.country,
            edit_count: 0,
            user_info: {
              full_name: obj.full_name,
              display_name: obj.display_name,
              email: obj.email,
              status: obj.status
            }
          }
          if (rows.length === 0) { // Not found
            return db('users').insert(
              merge(user, {
                updated_at: db.fn.now(),
                created_at: db.fn.now()
              })
            )
          }

          return db('users').where('osm_id', user.osm_id).update(
            merge(user, {
              updated_at: db.fn.now()
            })
          )
        })
    })

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
  populateUsers()
    .then((resp) => {
      console.log(`Updated ${resp.length} records.`)
      process.exit(0)
    })
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
}

module.exports = populateUsers
