const countryHelp = require('i18n-iso-countries')
const userCountryEdits = require('../models/userCountryEdits')

/**
 * User Stats Route
 * /user/:id
 *
 * The country stats route will display the OSM stats for a user with alpha2 code :alpha2 The
 * API will get the stats from the database tables countries, users, and user_country_edits
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function get (req, res) {
  let { alpha2 } = req.params
  if (!alpha2 || typeof alpha2 !== 'string') {
    return res.boom.badRequest('Invalid id')
  } else {
    alpha2 = alpha2.toUpperCase()
  }

  const countryName = countryHelp.getName(alpha2, 'en')

  try {
    let userData = await userCountryEdits.getParticipants(countryName)
    if (userData === null) {
      return res.boom.notFound('Could not retrieve user stats')
    }
    return res.send({
      alpha2,
      name: countryName,
      users: userData,
      edit_count: userData.reduce((total, { count }) => total + count, 0)
    })
  } catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve user stats')
  }
}

module.exports = {
  get
}
