const { TM } = require('../services/tm')

const {
  TM_URL,
  TM_VERSION,
} = require('../config')

/**
 * Project list route
 * /projects
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function list(req, res) {
  try {
    const projects = await TM.getProjects()
    return res.send({
      tasking_manager_url: TM_URL,
      tasking_manager_version: TM_VERSION,
      records: JSON.parse(projects)
    })
  }
  catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve project')
  }
}

/**
 * Project details route
 * /projects/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function get(req, res) {
  const { id } = req.params
  if (!id) {
    return res.boom.badRequest('Invalid id')
  }
  try {
    const project = await TM.getProject(id)
    return res.send({
      tasking_manager_url: TM_URL,
      tasking_manager_version: TM_VERSION,
      feature: JSON.parse(project)
    })
  }
  catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve project')
  }
}

/**
 * Project tasks route
 * /projects/:id/tasks
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function getTasks(req, res) {
  const { id } = req.params
  if (!id) {
    return res.boom.badRequest('Invalid id')
  }
  try {
    const tasks = await TM.getTasks(id)
    return res.send({
      tasking_manager_url: TM_URL,
      tasking_manager_version: TM_VERSION,
      tasks: JSON.parse(tasks)
    })
  }
  catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve project')
  }
}

module.exports = {
  list,
  get,
  getTasks
}
