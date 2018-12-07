const { validateRole } = require('../utils/roles')
const OSMTeams = require('../services/teams')
const connection = require('../db/connection')

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
    const data = await OSMTeams.getTeams()
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

  if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
    return res.boom.unauthorized('Not authorized')
  }

  try {
    const team = await OSMTeams.createTeam(body)
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
    const db = connection()
    const data = JSON.parse(await OSMTeams.getTeam(req.params.id))
    const campaigns = await db('team_assignments').where('team_id', req.params.id)
    const team = {
      id: data.id,
      bio: data.bio,
      hashtag: data.hashtag,
      name: data.name,
      campaigns: campaigns.map(c => c.campaign_id)
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
    const { campaigns, bio, name, hashtag } = body
    const team_id = req.params.id
    const data = await OSMTeams.editTeam(team_id, { bio, name, hashtag })

    // Insert assignments
    const db = connection()
    const assignments = campaigns.map(campaign_id => ({ team_id, campaign_id }))
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
    const status = await OSMTeams.deleteTeam(req.params.id)
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
