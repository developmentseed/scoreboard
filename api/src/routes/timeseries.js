const { Duration } = require('luxon')
const Boom = require('@hapi/boom')

const osmesa = require('../services/osmesa')

function validateParams ({
  startDate,
  endDate = null,
  binInterval = '1D',
  userIdsFilter = '',
  countriesFilter = '',
  hashtagsFilter = '',
  hastagPrefixFilter = '',
  categoriesFilter
}) {
  let validStartDate, validEndDate, validBinInterval, validUserIdsFilter,
    validCountriesFilter, validHashtagsFilter,
    validHashtagPrefixFilter, validCategoriesFilter

  if (!startDate) {
    throw Boom.badRequest('startDate is required')
  }
  try {
    validStartDate = new Date(startDate)
  } catch (err) {
    throw Boom.badRequest('cannot parse startDate, expected ISO-8601 format')
  }
  try {
    validEndDate = endDate ? new Date(endDate) : Date.now()
  } catch (err) {
    throw Boom.badRequest('cannot parse endDate, expected ISO-8601 format')
  }
  try {
    validBinInterval = Duration.fromISO(binInterval)
  } catch (err) {
    throw Boom.badRequest('cannot parse binInterval, expected ISO-8601 Duration format')
  }

  return {
    startDate: validStartDate,
    endDate: validEndDate,
    binInterval: validBinInterval,
    userIdsFilter: validUserIdsFilter,
    countriesFilter: validCountriesFilter,
    hashtagsFilter: validHashtagsFilter,
    hashtagPrefixFilter: validHashtagPrefixFilter,
    categoriesFilter: validCategoriesFilter
  }
}

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
  try {
    const params = validateParams(req.query)
    const result = osmesa.getTimeSeries(params)
    res.send(result)
  } catch (err) {
    res.boom.boomify(err)
  }
}

module.exports = {
  get
}
