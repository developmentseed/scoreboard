const { validateRole } = require('../utils/roles')
const OSMTeams = require('../services/teams')
const OSMesa = require('../services/osmesa')
const db = require('../db/connection')
const { difference } = require('ramda')
const getOsmesaLastRefreshed = require('../utils/osmesaStatus.js')

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
    const { user: { id: osmId = null } = {} } = req
    const teams = new OSMTeams(osmId)
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
    const { id: osmId } = user
    const teams = new OSMTeams(osmId)
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
  try {
    const { id: teamId } = req.params
    const { user: { id: osmId = null } = {} } = req
    const teams = new OSMTeams(osmId)
    const teamData = JSON.parse(await teams.getTeam(teamId))
    const campaigns = await db('campaigns').join(
      db('team_assignments').where('team_id', teamId).as('team_assignments'),
      'team_assignments.campaign_id',
      '=',
      'campaigns.id'
    ).join(db('taskers').select('name as tm_name', 'id as taskers_t_id').as('t'),
      'campaigns.tasker_id', '=', 't.taskers_t_id')
    const teamMemberOsmIds = teamData.members.map(m => m.id)
    const users = await db('users').whereIn('osm_id', teamMemberOsmIds)
    const osmesaStats = await OSMesa.getTeamStats(teamMemberOsmIds)
    const lastRefreshed = await getOsmesaLastRefreshed('team')
    const team = {
      ...teamData,
      campaigns,
      osmesaStats,
      lastRefreshed,
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
  try {
    const { id: osmId } = user
    const { id: teamId } = req.params
    const teams = new OSMTeams(osmId)
    const { campaigns, bio, name, hashtag, location, oldusers, newusers } = body
    const data = await teams.editTeam(teamId, { bio, name, hashtag, location })
    /*

    // Update members
    const add = difference(newusers, oldusers)
    const remove = difference(oldusers, newusers)

    await teams.updateMembers(teamId, { add, remove })

    // Insert assignments
    const assignments = campaigns.map(campaign => ({
      team_id: teamId,
      campaign_id: campaign.id,
      team_priority: campaign.team_priority,
      created_at: db.fn.now(),
      updated_at: db.fn.now()
    }))
    */
    /*

    await db.transaction(async t => {
      await t('team_assignments').where('team_id', teamId).del() // delete existing assingnments
      await t.batchInsert('team_assignments', assignments) // insert new assignments
    })
    */

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
    const { id: osmId } = user
    const { id: teamId } = req.params
    const teams = new OSMTeams(osmId)
    const status = await teams.deleteTeam(teamId)
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
