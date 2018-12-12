const userCountryEdits = require('../models/userCountryEdits')
const { getCountryGeo } = require('../utils/countryGeometry')
const countryList = require('../../../lib/utils/country-list.json')

/**
 * User Stats Route
 * /user/:id
 *
 * The country stats route will display the OSM stats for a user with code :code The
 * API will get the stats from the database tables countries, users, and user_country_edits
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function get (req, res) {
  let { code } = req.params
  if (!code || typeof code !== 'string') {
    return res.boom.badRequest('Invalid id')
  } else {
    code = code.toUpperCase()
  }

  // check the country list first
  const countryPair = countryList.find((country_pair) => {
    return country_pair.code === code
  })
  let countryName = countryPair.name

  try {
    let userData = await userCountryEdits.getParticipants(countryName, req.query.participantLimit)
    if (userData === null) {
      return res.boom.notFound('Could not retrieve user stats')
    }
    let [ { count } ] = await userCountryEdits.getNumberOfParticipants(countryName)
    return res.send({
      code,
      name: countryName,
      users: userData,
      numParticipants: count,
      edit_count: userData.reduce((total, { count }) => total + count, 0),
      geography: getCountryGeo(countryName)
    })
  } catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve user stats')
  }
}

module.exports = {
  get
}
