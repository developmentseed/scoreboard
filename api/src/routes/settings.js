const db = require('../db/connection')
const { cache } = require('../config')
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
    let data = JSON.parse(cache.exportJson())
    if (Object.keys(data).length === 0) {
      const settings = await db('settings').select() || []
      if (settings.length) {
        settingsMap = Object.assign(
          ...settings.map(({ setting, value }) => ({ [setting]: value }))
        )
      }
    } else {
      Object.keys(data).map(key => {
        settingsMap[key] = data[key].value
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
      let keys = await db('settings').where('setting', key)
      if (keys.length) {
        return db('settings').where('setting', key).update({ value: body[key] }).debug()
      } else {
        return db('settings').insert({ setting: key, value: body[key] })
      }
    })

    await Promise.all(promises)

    return res.sendStatus(200)
  } catch (e) {
    console.error(e)
    return res.sendStatus(500)
  }
}

module.exports = {
  get,
  put
}
