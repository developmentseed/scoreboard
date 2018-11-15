/*
 * Passport
 */
const passport = require('passport')
const router = require('express-promise-router')()
const OSMStrategy = require('passport-openstreetmap').Strategy
const MockStrategy = require('passport-mock-strategy')

const users = require('./models/users')
const roles = require('./models/roles')
const { validateRole } = require('./utils/roles')

const {
  NODE_ENV,
  OSM_CONSUMER_KEY,
  OSM_CONSUMER_SECRET,
  APP_URL
} = require('./config')

/*
* Authorization check for making sure a user has permission to edit a user
* Currently a user can edit their own record
* Or a user with `admin` role can edit user records
*/
function canEditUser (req, userID) {
  if (!req.user || !req.user.id) return false
  if (req.user.roles && validateRole(req.user.roles, 'admin')) return true
  return req.user.id === userID
}

passport.serializeUser((osmProfile, done) => {
  done(null, osmProfile)
})

passport.deserializeUser((osmProfile, done) => {
  done(null, osmProfile)
})

if (NODE_ENV === 'test') {
  passport.use(new MockStrategy({
    name: 'openstreetmap',
    passReqToCallback: true,
    user: {
      roles: []
    }
  }, async (req, user, done) => {
    // allow tests to set roles to test user permissions
    if (req.query.roles) {
      user.roles = await roles.getRoles(req.query.roles.split(','))
    } else {
      user.roles = []
    }

    req.user = user
    done(null, user)
  }))
} else {
  passport.use(new OSMStrategy({
    requestTokenURL: 'https://www.openstreetmap.org/oauth/request_token',
    accessTokenURL: 'https://www.openstreetmap.org/oauth/access_token',
    userAuthorizationURL: 'https://www.openstreetmap.org/oauth/authorize',
    consumerKey: OSM_CONSUMER_KEY,
    consumerSecret: OSM_CONSUMER_SECRET,
    callbackURL: `${APP_URL}/auth/openstreetmap/callback`
  }, async (token, tokenSecret, profile, done) => {
    try {
      let [user] = await users.findByOsmId(profile.id)
      if (user) {
        profile.roles = await roles.getRoles(user.roles)
        done(null, profile)
      } else {
        const data = {
          osm_id: profile.id,
          full_name: profile.displayName,
          roles: []
        }
        user = await users.create(data)
        done(null, profile)
      }
    } catch (err) {
      done(err)
    }
  }))
}

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
    } else {
      res.boom.unauthorized('could not authenticate')
    }
  })

/**
 * User info
 */
router.get('/userinfo', (req, res) => {
  if (req.user) {
    res.send(req.user)
  } else {
    res.boom.unauthorized('Not authenticated')
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
  authRouter: router,
  canEditUser: canEditUser
}
