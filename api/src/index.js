/**
 * Prelude
 */
const express = require('express')
const bodyParser = require('body-parser')
const boom = require('express-boom')
const session = require('express-session')
const compression = require('compression')
const YAML = require('yamljs')
const swaggerUi = require('swagger-ui-express')
const path = require('path')

const pckg = require('../../package.json')
const router = require('./routes')

const app = express()

const { SESSION_SECRET } = require('./config')
const { passport, authRouter } = require('./passport')

/**
 * Config
 */

const swaggerDocument = YAML.load(path.join(__dirname, '..', '/docs/api.yml'))
swaggerDocument.info.version = pckg.version

app.use(bodyParser.json())
app.use(compression())
app.use(boom())
app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth', authRouter)
app.use('/api', router)
app.use('/scoreboard/api', router)
app.use(['/api/docs'], swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = app
