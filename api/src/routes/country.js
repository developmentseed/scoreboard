const countryHelp = require('i18n-iso-countries')
const userCountryEdits = require('../models/userCountryEdits')
const { getCountryGeo } = require('../utils/countryGeometry')
const getCenter = require('../utils/countryCenters')
const countryList = require('../../../lib/utils/country-list.js')

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

  // check the country list first
  const countryPair = countryList.find((country_pair) => {
    return country_pair.value === alpha2
  })
  let countryName = countryPair.label
  if (typeof countryPair !== 'undefined') {
    countryName = countryHelp.getName(alpha2, 'en')
  }

  try {
    let userData = await userCountryEdits.getParticipants(countryName, req.query.participantLimit)
    if (userData === null) {
      return res.boom.notFound('Could not retrieve user stats')
    }
    let [ { count } ] = await userCountryEdits.getNumberOfParticipants(countryName)
    return res.send({
      alpha2,
      name: countryName,
      users: userData,
      numParticipants: count,
      edit_count: userData.reduce((total, { count }) => total + count, 0),
      geography: getCountryGeo(countryName),
      center: getCenter(countryName)
    })
  } catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve user stats')
  }
}

module.exports = {
  get
}
