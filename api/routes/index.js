const router = require('express-promise-router')()
const user = require('./user')
const users = require('./users')
const campaign = require('./campaign')
const campaigns = require('./campaigns')
const topstats = require('./topstats')
const request = require('request')
const { OSMESA_API } = require('../config')

/**
 * Route registration
 */
router.get('/extents/*', (req, res) => {
  const url = `${OSMESA_API}/extents/${req.params[0]}`
  req.pipe(request(url)).pipe(res)
})
router.get('/users/:id', user)
router.get('/users', users)
router.get('/campaigns/:id', campaign)
router.get('/campaigns', campaigns)
router.get('/topstats', topstats)

module.exports = router
