const connection = require('../db/connection')

function applyFilters (query, req) {
  const search = req.query.q || ''

  if (search.length > 0) {
    query = query.where('name', 'like', `%${search}%`)
  }

  return query
}

/**
 * All Users and their stats route
 * /users/stats
 *
 * The users route displays all the users from the external
 * users source
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function stats (req, res) {
  const page = req.query.page || 1
  const sortType = req.query.sortType || ''

  try {
    const db = connection()

    // Create table with ranking
    const allCountries = db.with('edits', (conn) => conn
      .select('name', 'edit_count')
      .from('countries'))
      .select(
        's.name',
        's.edit_count',
        db.raw(
          `(select count(*)+1 from edits as r
        where r.edit_count > s.edit_count) as rank`
        )
      ).from('edits as s')

    let recordQuery = applyFilters(allCountries.clone(), req)
    switch (sortType) {
      // case 'Most recent':
      //   recordQuery = recordQuery.orderBy('last_edit', 'desc')
      //   break
      // case 'Least recent':
      //   recordQuery = recordQuery.orderBy('last_edit', 'asc')
      //   break
      case 'Least total':
        recordQuery = recordQuery.orderBy('edit_count', 'asc')
        break
      default: // Most total edits
        recordQuery = recordQuery.orderBy('edit_count', 'desc')
        break
    }

    const records = await recordQuery
      .limit(25)
      .offset((parseInt(page) - 1) * 25)

    // Create counts
    const countries = db('countries')
    const [{ subTotal }] = await applyFilters(countries.clone(), req).count('id as subTotal')
    const [{ total }] = await countries.clone().count('id as total')
    const [{ editTotal }] = await countries.clone().sum('edit_count as editTotal')

    return res.send({
      records, subTotal, total, editTotal
    })
  } catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve records')
  }
}

/**
 * User list route
 * /users
 *
 * The users route displays all the users from the external
 * users source
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
/*
async function list (req, res) {
  if (!req.user || !req.user.roles || !validateRole(req.user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  try {
    const data = await users.list()
    const userList = await Promise.all(data.map(async (user) => {
      if (user.roles) {
        user.roles = await roles.getRoles(user.roles)
      }
      return user
    }))
    return res.send(userList)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve users list')
  }
}
*/
module.exports = {
  stats
}
