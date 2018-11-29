/**
 * Prelude
 */
const express = require('express')
const bodyParser = require('body-parser')
const boom = require('express-boom')
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)
const compression = require('compression')
const YAML = require('yamljs')
const swaggerUi = require('swagger-ui-express')
const path = require('path')

const pckg = require('../../package.json')
const router = require('./routes')

const app = express()
const connection = require('./db/connection')

const { SESSION_SECRET, NODE_ENV } = require('./config')
const { passport, authRouter } = require('./passport')

/**
 * Config
 */

const swaggerDocument = YAML.load(path.join(__dirname, '..', '/docs/api.yml'))
swaggerDocument.info.version = pckg.version

/**
 * Session
 */

let sessionConfig = {
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}

if (NODE_ENV === 'production') {
  const store = new KnexSessionStore({
    knex: connection()
  })

  sessionConfig = {
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 10000 // ten seconds, for testing
    },
    store: store
  }
}

app.use(bodyParser.json())
app.use(compression())
app.use(boom())
app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth', authRouter)
app.use('/api', router)
app.use('/scoreboard/api', router)
app.use(['/api/docs'], swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = app
