// const connection = require('../db/connection')
const favorites = require('../models/favorite-campaigns')

/**
 * Favorite campaign details route
 * /favorites/:id
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function get (req, res) {
  const { user, params: { id } } = req

  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    const [favorite] = await favorites.get(id)

    if (favorite.user_id !== user.id) {
      return res.boom.notFound()
    }

    if (!favorite) {
      return res.boom.notFound()
    }

    return res.send(favorite)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve favorite')
  }
}

/**
 * Favorite campaign details route
 * /favorites
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function list (req, res) {
  const { user } = req

  if (!user || !user.uid) {
    return res.boom.badRequest('Invalid user')
  }

  try {
    const list = await favorites.findByUserID(user.uid)
    return res.send(list)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not retrieve favorites')
  }
}

/**
 * Create favorite route
 * /favorites/
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */

async function post (req, res) {
  const { user, body } = req

  if (!user) {
    return res.boom.unauthorized('Invalid user')
  }

  try {
    const [assigned] = await favorites.create(body)
    return res.send(assigned)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not create favorite')
  }
}

/**
 * Delete favorite route
 * /favorites/:id
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function del (req, res) {
  const { user, params: { id } } = req

  if (!user) {
    return res.boom.unauthorized('Not authorized')
  }

  if (!id) {
    return res.boom.badRequest('Invalid id')
  }

  try {
    const [fav] = await favorites.get(id)
    if (fav.user_id !== user.uid) {
      return res.boom.unauthorized('Not authorized')
    }

    await favorites.destroy(id)
    return res.sendStatus(200)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not delete favorite')
  }
}

module.exports = {
  list,
  get,
  post,
  del
}
