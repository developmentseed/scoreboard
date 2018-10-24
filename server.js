require('dotenv').config()

/**
 * Prelude
 */
const { PORT, NODE_ENV } = require('./api/src/config')
const dev = NODE_ENV !== 'production'
const next = require('next')

/**
 * Config
 */
const app = next({
  dev
})
const handle = app.getRequestHandler()

const api = require('./api/src/index')

/**
 * Init
 */
app.prepare()
  .then(() => {
    api.get('/about', (req, res) => {
      return app.render(req, res, '/about')
    })

    api.get('*', (req, res) => {
      return handle(req, res)
    })

    api.listen(PORT, () => {
      console.log(`Starting server on port ${PORT}`)
    })
  })
