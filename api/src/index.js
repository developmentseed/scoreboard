/**
 * Prelude
 */
const express = require('express')
const boom = require('express-boom')
const session = require('express-session')
const compression = require('compression')
const YAML = require('yamljs')
const swaggerUi = require('swagger-ui-express')

const pckg = require('../package.json')
const router = require('./routes')

const app = express()

const { SESSION_SECRET } = require('./config')
const { passport, authRouter } = require('./passport')

/**
 * Config
 */

const swaggerDocument = YAML.load('./docs/api.yml')
swaggerDocument.info.version = pckg.version

app.use(compression())
app.use(boom())
app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth', authRouter)
app.use('/scoreboard/api', router)
app.use(['/docs', '/'], swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = app
