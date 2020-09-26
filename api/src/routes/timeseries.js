const osmesa = require('../services/osmesa')

/**
 * TimeSeries route
 *
 * {{baseUrl}}/api/timeseries?startDate=<string>&endDate=(now)&binInterval=<string>&userIdsFilter=<integer>|<integer>&countriesFilter=<string>|<string>&hashtagsFilter=<string>|<string>&hashtagPrefixFilter=<string>|<string>&categoriesFilter=<string>|<string> *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */

async function get (req, res) {
  // TODO: parse and validate request parameters
  try {
    const result = await osmesa.getTimeSeries()
    res.send(result)
  } catch (err) {
    res.boom.boomify(err)
  }
}

module.exports = {
  get
}
