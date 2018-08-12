/**
 * Prelude
 */
const express = require('express')
const boom = require('express-boom')
const compression = require('compression')
const YAML = require('yamljs')
const swaggerUi = require('swagger-ui-express')

const pckg = require('../package.json')
const router = require('./routes')

const app = express()

/**
 * Config
 */
const swaggerDocument = YAML.load('./docs/api.yml')
swaggerDocument.info.version = pckg.version


app.use(compression())
app.use(boom())
app.use('/scoreboard/api', router)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = app
