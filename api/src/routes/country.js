const userCountryEdits = require('../models/userCountryEdits')
const { getCountryGeo } = require('../utils/countryGeometry')
const countryList = require('../../../lib/utils/country-list.json')
const osmesa = require('../services/osmesa')

/**
 * Country Stats Route
 * /country/:code
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
  if (!countryPair) {
    return res.boom.notFound('Could not find country')
  }
  let countryName = countryPair.name
  let countryCode = countryPair.code

  try {
    const osmesaResponse = await osmesa.getCountry(countryCode)
    const osmesaData = JSON.parse(osmesaResponse)
    let userData = await userCountryEdits.getParticipants(countryName, req.query.participantLimit)
    if (userData === null) {
      return res.boom.notFound('Could not retrieve user stats')
    }
    const [ { count } ] = await userCountryEdits.getNumberOfParticipants(countryName)
    const [ { editCount } ] = await userCountryEdits.getTotalEdits(countryName)
    return res.send({
      code,
      name: countryName,
      users: userData,
      numParticipants: count,
      edit_count: editCount,
      geography: getCountryGeo(countryCode),
      records: osmesaData
    })
  } catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve country stats')
  }
}

module.exports = {
  get
}
