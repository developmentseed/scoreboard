/*
 * Passport
 */
const passport = require('passport')
const router = require('express-promise-router')()
const OSMStrategy = require('passport-openstreetmap').Strategy

const {
  NODE_ENV,
  OSM_CONSUMER_KEY,
  OSM_CONSUMER_SECRET,
  API_URL,
  APP_URL
} = require('./config')


if (NODE_ENV === 'test') {
  const nullMiddle = (req, res, next) => {
    if (next) {
      next()
    }
  }

  module.exports = {
    passport: {
      initialize: () => nullMiddle,
      session: () => nullMiddle
    },
    authRouter: nullMiddle
  }
}
else {
  passport.serializeUser((user, done) => done(null, user))
  passport.deserializeUser((id, done) => done(null, id))

  passport.use(new OSMStrategy({
    consumerKey: OSM_CONSUMER_KEY,
    consumerSecret: OSM_CONSUMER_SECRET,
    callbackUrl: `${API_URL}/auth/openstreetmap/callback`
  }, (token, tokenSecret, profile, done) => {
    if (profile) {
      return done(null, profile)
    }
    return false
  }))

  /**
   * Routes for auth
   * Used under /auth domain
   */

  /**
   * redirect the user to openstreetmap
   */
  router.get('/openstreetmap',
    passport.authenticate('openstreetmap'))

  /**
   * Callback
   */
  router.get('/openstreetmap/callback',
    passport.authenticate('openstreetmap'),
    (req, res) => {
      if (req.user) {
        res.redirect(APP_URL)
      }

      console.error('could not authenticate')
      res.send('could not authenticate')
    })

  /**
   * User info
   */
  router.get('/userinfo', (req, res) => {
    if (req.user) {
      res.send(req.user)
    }

    else {
      res.boom.notFound('Not authenticated')
    }
  })

  /**
   * Logout
   */
  router.get('/logout', (req, res) => {
    req.logout()
    res.redirect(APP_URL)
  })
  module.exports = {
    passport: passport,
    authRouter: router
  }
}
