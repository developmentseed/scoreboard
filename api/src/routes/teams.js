const { validateRole } = require('../utils/roles')
const OSMTeams = require('../services/teams')
const db = require('../db/connection')
const { difference } = require('ramda')

/**
 * Teams list route
 * /teams
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function list (req, res) {
  try {
    let osmid = req.user ? req.user.id : null
    let teams = new OSMTeams(osmid)
    const data = await teams.getTeams()
    return res.send(data)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve teams list')
  }
}

/**
 * Create teams route
 * /teams
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function post (req, res) {
  const { user, body } = req

  if (!user) {
    return res.boom.unauthorized('Not authorized')
  }

  try {
    let osmid = req.user ? req.user.id : null
    let teams = new OSMTeams(osmid)
    const team = await teams.createTeam(body)
    return res.send(team)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not create team')
  }
}

/**
 * Teams get route
 * /teams/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function get (req, res) {
  let osmid = req.user ? req.user.id : null
  let teams = new OSMTeams(osmid)
  try {
    const data = JSON.parse(await teams.getTeam(req.params.id))
    console.log(data)
    const campaigns = await db('campaigns').join(
      db('team_assignments').where('team_id', req.params.id).as('team_assignments'),
      'team_assignments.campaign_id',
      '=',
      'campaigns.id'
    ).join(db('taskers').select('name as tm_name', 'id as taskers_t_id').as('t'),
      'campaigns.tasker_id', '=', 't.taskers_t_id')
    const users = await db('users').whereIn('osm_id', data.members.map(m => m.id))
    const team = {
      id: data.id,
      bio: data.bio,
      hashtag: data.hashtag,
      name: data.name,
      location: data.location,
      campaigns,
      users
    }
    return res.send(team)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve team')
  }
}

/**
 * Teams put route
 * /teams/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function put (req, res) {
  const { user, body } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  try {
    let teams = new OSMTeams(req.user.id)
    const { campaigns, bio, name, hashtag, oldusers, newusers } = body
    const team_id = req.params.id
    const data = await teams.editTeam(team_id, { bio, name, hashtag })

    // Update members
    let add = difference(newusers, oldusers)
    let remove = difference(oldusers, newusers)

    await teams.updateMembers(team_id, { add, remove })

    // Insert assignments
    const assignments = campaigns.map(campaign => ({
      team_id,
      campaign_id: campaign.id,
      team_priority: campaign.team_priority,
      created_at: db.fn.now(),
      updated_at: db.fn.now()
    }))

    await db.transaction(async t => {
      await t('team_assignments').where('team_id', team_id).del() // delete existing assingnments
      await t.batchInsert('team_assignments', assignments) // insert new assignments
    })

    return res.send(data)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not update team')
  }
}

/**
 * Teams delete route
 * /teams/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function del (req, res) {
  const { user } = req

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  try {
    let teams = new OSMTeams(req.user.id)
    const status = await teams.deleteTeam(req.params.id)
    return res.sendStatus(status)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not delete team')
  }
}

module.exports = {
  list,
  post,
  get,
  put,
  del
}
