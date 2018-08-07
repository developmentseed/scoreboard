/**
 * Prelude
 */
const { PORT } = require('./config')

/**
 * Config
 */
const app = require('./index')

/**
 * Init
 */
app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`)
})
