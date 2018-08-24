const connection = require('../db/connection')
const {
  split, trim
} = require('ramda')
const { subMonths } = require('date-fns')
const { FILTERED_USERS } = require('../config')

function applyFilters(query, req) {
  const search = req.query.q || ''
  const country = req.query.country || ''
  const active = req.query.active || false

  if (search.length > 0) {
    query = query.where('full_name', 'like', `%${search}%`)
  }

  if (country.length > 0) {
    const countries = country.split(',')
    query = query.whereIn('country', countries)
  }

  if (active && active === 'true') {
    // Filter for users that have edited in the past 6 months
    query = query.whereBetween('last_edit', [subMonths(Date.now(), 6), Date.now()])
  }


  return query
}

/**
 * All Users Route
 * /users
 *
 * The users route displays all the users from the external
 * users source
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
module.exports = async (req, res) => {
  const page = req.query.page || 1
  const filteredUsers = split(',', FILTERED_USERS).map(trim)
  const sortType = req.query.sortType || ''

  try {
    const db = connection()

    // Create table with ranking
    const allUsers = db.with('edits', (conn) => conn
      .select('osm_id', 'full_name', 'edit_count', 'country', 'last_edit')
      .from('users')
      .whereNotIn('osm_id', filteredUsers))
      .select(
        's.osm_id',
        's.edit_count',
        's.full_name',
        's.country',
        's.last_edit',
        db.raw(
          `(select count(*)+1 from edits as r
        where r.edit_count > s.edit_count) as rank`
        )
      ).from('edits as s')

    let recordQuery = applyFilters(allUsers.clone(), req)
    switch (sortType) {
    case 'Most recent':
      recordQuery = recordQuery.orderBy('last_edit', 'desc')
      break
    case 'Least recent':
      recordQuery = recordQuery.orderBy('last_edit', 'asc')
      break
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

    const countries = await db('users').distinct('country').select()

    // Create counts
    const realUsers = db('users').whereNotIn('osm_id', filteredUsers)
    const [{ subTotal }] = await applyFilters(realUsers.clone(), req).count('id as subTotal')
    const [{ total }] = await realUsers.clone().count('id as total')
    const [{ editTotal }] = await realUsers.clone().sum('edit_count as editTotal')

    return res.send({
      records, subTotal, total, editTotal, countries
    })
  }
  catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve records')
  }
}
