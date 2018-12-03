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

    api.get('/users/:id', (req, res) => {
      const { id } = req.params
      app.render(req, res, '/user', { id })
    })

    api.get('/users/:id/edit', (req, res) => {
      const { id } = req.params
      app.render(req, res, '/edit-user', { id })
    })

    api.get('/campaigns/:id', (req, res) => {
      const { id } = req.params
      app.render(req, res, '/campaign', { id })
    })

    api.get('/admin/users/:id', (req, res) => {
      const { id } = req.params
      app.render(req, res, '/admin/edit-user', { id })
    })

    api.get('/admin/badges/add', (req, res) => {
      app.render(req, res, '/admin/badges-add')
    })

    api.get('/admin/badges/:id', (req, res) => {
      const { id } = req.params
      app.render(req, res, '/admin/badges-edit', { id })
    })

    api.get('*', (req, res) => {
      return handle(req, res)
    })

    api.listen(PORT, () => {
      console.log(`Starting server on port ${PORT}`)
    })
  })
