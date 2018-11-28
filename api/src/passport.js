/*
 * Passport
 */
const passport = require('passport')
const xml2js = require('xml2js')
const router = require('express-promise-router')()
const OSMStrategy = require('passport-openstreetmap').Strategy
const InternalOAuthError = require('passport-oauth').InternalOAuthError
const MockStrategy = require('passport-mock-strategy')

const users = require('./models/users')
const roles = require('./models/roles')
const { validateRole } = require('./utils/roles')

const {
  NODE_ENV,
  OSM_CONSUMER_KEY,
  OSM_CONSUMER_SECRET,
  OSM_DOMAIN,
  OSM_DOMAIN_INTERNAL,
  APP_URL
} = require('./config')

/**
 * override the userProfile method of OSMStrategy to allow for custom osm endpoints
 */
OSMStrategy.prototype.userProfile = function (token, tokenSecret, params, done) {
  this._oauth.get(`${OSM_DOMAIN_INTERNAL}/api/0.6/user/details`, token, tokenSecret, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)) }

    var parser = new xml2js.Parser()
    parser.parseString(body, function (err, xml) {
      if (err) { return done(err) };

      var profile = { provider: 'openstreetmap' }
      profile.id = xml.user['@'].id;
      profile.displayName = xml.user['@'].display_name

      profile._raw = body
      profile._xml2json =
      profile._xml2js = xml

      done(null, profile)
    })
  })
}

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
    requestTokenURL: `${OSM_DOMAIN_INTERNAL}/oauth/request_token`,
    accessTokenURL: `${OSM_DOMAIN_INTERNAL}/oauth/access_token`,
    userAuthorizationURL: `${OSM_DOMAIN}/oauth/authorize`,
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
