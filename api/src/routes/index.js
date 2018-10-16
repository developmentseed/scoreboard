const router = require('express-promise-router')()
const request = require('request')

const user = require('./user')
const users = require('./users')
const campaign = require('./campaign')
const campaigns = require('./campaigns')
const topstats = require('./topstats')
const projects = require('./projects')
const roles = require('./roles')

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
router.get('/roles', roles.list)
router.post('/roles', roles.post)
router.get('/roles/:id', roles.get)
router.put('/roles/:id', roles.put)
router.delete('/roles/:id', roles.del)

module.exports = router
