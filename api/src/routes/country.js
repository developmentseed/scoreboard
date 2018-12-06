const countryHelp = require('i18n-iso-countries')
const countries = require('../models/countries')
const userCountryEdits = require('../models/userCountryEdits')
const user = require('../models/users')

function getUserInfo (userIDs) {
  const promises = userIDs.map(async (element) => {
    const [userData] = await user.get(element.user_id)
    return {
      id: element.user_id,
      count: element.edit_count,
      name: userData.full_name
    }
  })
  return Promise.all(promises)
}

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
  try {
    const [country] = await countries.findByAlpha2(alpha2)
    let userIDs = await userCountryEdits.getParticipants(country.id)
    const userData = await getUserInfo(userIDs)
    if (country.id === null) {
      return res.send({
        alpha2,
        name: countryHelp.getName(alpha2, 'en'),
        users: [],
        edit_count: 0,
        id: 0
      })
    } else {
      return res.send({
        alpha2,
        name: countryHelp.getName(alpha2, 'en'),
        users: userData,
        edit_count: country.edit_count,
        id: country.id
      })
    }
  } catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve user stats')
  }
}

module.exports = {
  get
}
