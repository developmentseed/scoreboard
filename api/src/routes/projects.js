const TM = require('../services/tm')

const tm = new TM()

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
    const projects = await tm.getProjects()
    return res.send({ records: projects })
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
    const project = await tm.getProject(id)
    return res.send(project)
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
    const tasks = await tm.getTasks(id)
    return res.send(tasks)
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
