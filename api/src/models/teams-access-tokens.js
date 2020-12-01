const db = require('../db/connection')
const jwt = require('jsonwebtoken')

/**
 * get an access token for a user by their osm id
 *
 * @param {int} id - osm id
 * @returns {Promise<string>} a response
 */
function getToken (id) {
  return db('teams_access_tokens').where('osm_id', id)
}

async function storeToken (tokenObject) {
  const { access_token, refresh_token, expires_at, id_token } = tokenObject.token

  const { sub } = jwt.decode(id_token)
  let existingToken = await getToken(sub)
  if (existingToken.length > 0) {
    await db('teams_access_tokens').where('osm_id', sub).update({
      access_token,
      refresh_token,
      expires_at
    })
  } else {
    await db('teams_access_tokens').insert({
      'osm_id': sub,
      access_token,
      refresh_token,
      expires_at
    })
  }
}

async function hasToken (id) {
  const tokens = await getToken(id)
  return (tokens.length > 0)
}

module.exports = {
  getToken,
  storeToken,
  hasToken
}
