const { cache } = require('../config')
const dbSettings = require('../models/settings')
const { deleteTokens } = require('../models/teams-access-tokens')
const { validateRole } = require('../utils/roles')

/**
 * Retrieve app settings from the database
 */
async function get (req, res) {
  try {
    const { user } = req

    // only admins are allowed to view settings
    if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
      return res.boom.unauthorized('Not authorized')
    }

    // Get data from the cache first
    let settingsMap = {}
    const keys = cache.keys()
    if (keys.length === 0) {
      const settings = await dbSettings.list()
      if (settings.length) {
        settingsMap = Object.assign(
          ...settings.map(({ setting, value }) => ({ [setting]: value }))
        )
      }
    } else {
      keys.map(key => {
        settingsMap[key] = cache.get(key)
      })
    }

    return res.send(settingsMap)
  } catch (e) {
    console.error(e)
    return res.sendStatus(500)
  }
}

/**
 * Update settings in the database
 */
async function put (req, res) {
  try {
    const { user, body } = req

    // only admins are allowed to view settings
    if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
      return res.boom.unauthorized('Not authorized')
    }

    const promises = Object.keys(body).map(async key => {
      cache.put(key, body[key])
      dbSettings.put(key, body[key])
    })

    await Promise.all(promises)

    return res.sendStatus(200)
  } catch (e) {
    console.error(e)
    return res.sendStatus(500)
  }
}

async function deleteAccessTokens (req, res) {
  try {
    const { user, body } = req

    // only admins are allowed to delete access tokens
    if (!user || !user.roles || !validateRole(user.roles, 'admin')) {
      return res.boom.unauthorized('Not authorized')
    }

    await deleteTokens()

    return res.sendStatus(200)
  } catch (e) {
    console.error(e)
    return res.sendStatus(500)
  }
}

module.exports = {
  get,
  put,
  deleteAccessTokens
}
