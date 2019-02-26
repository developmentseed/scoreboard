const db = require('../db/connection')
const { subMonths } = require('date-fns')

const users = require('../models/users')
const roles = require('../models/roles')
const exclusion = require('../models/exclusion-list')
const { validateRole } = require('../utils/roles')
const osmesa = require('../services/osmesa')

function applyFilters (query, req) {
  const search = req.query.q || ''
  const country = req.query.country || ''
  const active = req.query.active || false

  if (search.length > 0) {
    query = query.where('full_name', 'ilike', `%${search}%`)
  }

  if (country.length > 0) {
    const countries = country.split(',')
    query = query.whereIn('country', countries)
  }

  if (active) {
    switch (active) {
      case 'active': {
        query = query.where('edit_count', '>', 0)
        break
      }
      case 'active-6-mo': {
        query = query.whereBetween('last_edit', [subMonths(Date.now(), 6), new Date(Date.now())])
        break
      }
      case 'active-3-mo': {
        query = query.whereBetween('last_edit', [subMonths(Date.now(), 3), new Date(Date.now())])
        break
      }
      case 'active-1-mo': {
        query = query.whereBetween('last_edit', [subMonths(Date.now(), 1), new Date(Date.now())])
        break
      }
      default: {
        break
      }
    }
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
    // Create table with ranking
    const allUsers = db.with('edits', (conn) => conn
      .select('osm_id', 'full_name',
        db.raw('case "edit_count" when NULL then 0 else "edit_count" end'),
        'country', 'last_edit')
      .from('users')
      .whereNotIn('id', exclusion.list()))
      .select(
        's.osm_id',
        's.edit_count',
        's.full_name',
        's.country',
        's.last_edit',
        db.raw(
          'rank() over (order by s.edit_count desc nulls last) as rank'
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
        recordQuery = recordQuery.orderBy('rank', 'desc')
        break
      default: // Most total edits
        recordQuery = recordQuery.orderByRaw('edit_count DESC NULLS LAST')
        break
    }

    let refreshDate = ''
    try {
      const refreshStats = await osmesa.getUpdates()
      refreshDate = JSON.parse(refreshStats)['user_stats_refresh']
    } catch (err) {
      console.error(err)
    }

    const records = await recordQuery
      .limit(25)
      .offset((parseInt(page) - 1) * 25)

    const countries = await db('users').distinct('country').select()

    // Create counts
    const realUsers = db('users').whereNotIn('id', exclusion.list())
    const [{ subTotal }] = await applyFilters(realUsers.clone(), req).count('id as subTotal')
    const [{ total }] = await realUsers.clone().count('id as total')
    const [{ active }] = await realUsers.clone().where('edit_count', '>', 0).count('id as active')
    const [{ editTotal }] = await realUsers.clone().sum('edit_count as editTotal')

    return res.send({
      records, subTotal, total, editTotal, countries, active, refreshDate
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

module.exports = {
  stats,
  list
}
