const router = require('express-promise-router')()
const request = require('request')

const user = require('./user')
const users = require('./users')
const campaign = require('./campaign')
const campaigns = require('./campaigns')
const topstats = require('./topstats')
const badges = require('./badges')
const roles = require('./roles')
const favorites = require('./favorite-campaigns')
const teams = require('./teams')
const countries = require('./countries')
const country = require('./country')
const taskers = require('./taskers')

const { OSMESA_API } = require('../config')

/**
 * Route registration
 */
router.get('/extents/*', (req, res) => {
  const url = `${OSMESA_API}/tiles/${req.params[0]}`
  req.pipe(request(url)).pipe(res)
})
router.get('/users', users.list)
router.get('/users/stats', users.stats)
router.get('/users/:id', user.get)
router.put('/users/:id', user.put)
router.get('/campaigns/:tasker_id-:tm_id', campaign)
router.get('/campaigns', campaigns)
router.get('/topstats', topstats)
router.get('/roles', roles.list)
router.post('/roles', roles.post)
router.get('/roles/:id', roles.get)
router.put('/roles/:id', roles.put)
router.delete('/roles/:id', roles.del)
router.get('/countries', countries.stats)
router.get('/countries/:code', country.get)

// badges routes
router.get('/badges', badges.get)
router.get('/badges/:id', badges.get)
router.post('/badges', badges.post)
router.delete('/badges/:id', badges.del)
router.put('/badges/:id', badges.put)

// favorites routes
router.get('/favorites', favorites.list)
router.get('/favorites/:id', favorites.get)
router.post('/favorites', favorites.post)
router.delete('/favorites/:id', favorites.del)

// teams routes
router.get('/teams', teams.list)
router.post('/teams', teams.post)
router.get('/teams/:id', teams.get)
router.put('/teams/:id', teams.put)
router.delete('/teams/:id', teams.del)

// taskers routes
router.get('/taskers', taskers.list)
router.post('/taskers', taskers.post)
router.get('/taskers/:id', taskers.get)
router.put('/taskers/:id', taskers.put)
router.delete('/taskers/:id', taskers.del)

module.exports = router
