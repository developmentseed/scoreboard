/**
 * Prelude
 */
const express = require('express')
const boom = require('express-boom')
const { PORT } = require('./config')
const app = express()
const router = require('./routes')
const compression = require('compression')

/**
 * Config
 */
app.use(compression())
app.use(boom())
app.use('/scoreboard/api', router)

/**
 * Init
 */
app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`)
})
