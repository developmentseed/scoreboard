const router = require('express-promise-router')()
const request = require('request')

const user = require('./user')
const users = require('./users')
const campaign = require('./campaign')
const campaigns = require('./campaigns')
const topstats = require('./topstats')
const badges = require('./badges')
const projects = require('./projects')

const { OSMESA_API } = require('../config')

/**
 * Route registration
 */
router.get('/extents/*', (req, res) => {
  const url = `${OSMESA_API}/extents/${req.params[0]}`
  req.pipe(request(url)).pipe(res)
})
router.get('/users/:id', user.get)
router.put('/users/:id', user.put)
router.get('/users', users)
router.get('/campaigns/:id', campaign)
router.get('/campaigns', campaigns)
router.get('/topstats', topstats)
router.get('/projects', projects.list)
router.get('/projects/:id', projects.get)
router.get('/projects/:id/tasks', projects.getTasks)

// badges routes
router.get('/badges', badges.get)
router.get('/badges/:id', badges.get)
router.post('/badges', badges.post)
router.delete('/badges/:id', badges.del)
router.put('/badges/:id', badges.put)

module.exports = router
