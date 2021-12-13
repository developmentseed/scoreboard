const db = require('../db/connection')
const { subMonths } = require('date-fns')
const { pluck } = require('ramda')

const users = require('../models/users')
const roles = require('../models/roles')
const exclusion = require('../models/exclusion-list')
const { validateRole } = require('../utils/roles')
const refreshStatus = require('../utils/osmesaStatus.js')

function applyFilters (query, req) {
  const search = req.query.q || ''
  const country = req.query.country || ''
  const tags = req.query.tags || ''
  const active = req.query.active || false

  if (search.length > 0) {
    query = query.where('full_name', 'ilike', `%${search}%`)
  }

  if (country.length > 0) {
    const countries = country.split(',')
    query = query.whereIn('country', countries)
  }

  if (tags.length > 0) {
    query = query.whereRaw(`user_info->>'flair' = ?`, [tags])
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
      .select('osm_id', 'full_name', 'user_info',
        db.raw('case "edit_count" when NULL then 0 else "edit_count" end'),
        'country', 'last_edit')
      .from('users')
      .whereNotIn('id', exclusion.list()))
      .select(
        's.osm_id',
        's.edit_count',
        's.full_name',
        's.user_info',
        's.country',
        's.last_edit',
        db.raw(
          'rank() over (order by s.edit_count desc nulls last) as rank'
        )
      ).from('edits as s')

    let recordQuery = applyFilters(allUsers.clone(), req)
    switch (sortType) {
      case 'Most recent':
        recordQuery = recordQuery.orderByRaw('last_edit desc, full_name')
        break
      case 'Least recent':
        recordQuery = recordQuery.orderByRaw('last_edit asc, full_name')
        break
      case 'Least total':
        recordQuery = recordQuery.orderByRaw('edit_count asc, full_name')
        break
      case 'Alphabetical A-Z':
        recordQuery = recordQuery.orderBy('full_name', 'asc')
        break
      case 'Alphabetical Z-A':
        recordQuery = recordQuery.orderBy('full_name', 'desc')
        break
      case 'Countries A-Z':
        recordQuery = recordQuery.orderByRaw('country asc NULLS LAST')
        break
      case 'Countries Z-A':
        recordQuery = recordQuery.orderByRaw('country desc NULLS LAST')
        break
      default: // Most total edits
        recordQuery = recordQuery.orderByRaw('edit_count desc, full_name  NULLS LAST')
        break
    }

    const refreshDate = await refreshStatus('users')

    const records = await recordQuery
      .limit(25)
      .offset((parseInt(page) - 1) * 25)

    const countries = await db('users').distinct('country').select()
    const tags = pluck('flair', await db('users').pluck('user_info').whereNotNull('user_info'))

    // Create counts
    const realUsers = db('users').whereNotIn('id', exclusion.list())
    const [{ subTotal }] = await applyFilters(realUsers.clone(), req).count('id as subTotal')
    const [{ total }] = await realUsers.clone().count('id as total')
    const [{ active }] = await realUsers.clone().where('edit_count', '>', 0).count('id as active')
    const [{ editTotal }] = await realUsers.clone().sum('edit_count as editTotal')

    return res.send({
      records, subTotal, total, editTotal, countries, active, refreshDate, tags
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

/**
 * Get names route
 * /users/names
 *
 * List the osm names for a set of osm ids. This is a helper route that is used by
 * getAllTeams action.
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 * @async
 */
async function getNames (req, res) {
  const { body } = req
  try {
    const { ids } = body
    const data = await db
      .select('osm_id', 'full_name')
      .from('users')
      .whereIn('osm_id', ids)
    res.send(data)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not get user names')
  }
}

module.exports = {
  stats,
  list,
  getNames
}
