const { DateTime, Duration } = require('luxon')
const Boom = require('@hapi/boom')

const osmesa = require('../services/osmesa')

/**
 * Parse and validate timeseries parameters.
 *
 * @param startDate
 * @param endDate
 * @param binInterval
 * @param userIdsFilter
 * @param countriesFilter
 * @param hashtagsFilter
 * @param hashtagPrefixFilter
 * @param categoriesFilter
 * @returns {{binInterval: ({isValid}|Duration), hashtagsFilter: {length}, categoriesFilter: {length}, userIdsFilter: {length}, endDate: ({isValid}|DateTime), hashtagPrefixFilter: {length}, startDate: ({isValid}|DateTime), countriesFilter: {length}}}
 */
function validateParams ({
  startDate,
  endDate = '',
  binInterval = 'P1D',
  userIdsFilter = '',
  countriesFilter = '',
  hashtagsFilter = '',
  hashtagPrefixFilter = '',
  categoriesFilter = ''
}) {
  let validStartDate, validEndDate, validBinInterval, validUserIdsFilter,
    validCountriesFilter, validHashtagsFilter,
    validHashtagPrefixFilter, validCategoriesFilter
  if (!startDate) {
    throw Boom.badRequest('startDate is required')
  }

  validStartDate = DateTime.fromISO(startDate)
  if (!validStartDate.isValid) {
    throw Boom.badRequest(validStartDate.invalidExplanation)
  }
  validEndDate = endDate ? DateTime.fromISO(endDate) : DateTime.utc()
  if (!validEndDate.isValid) {
    throw Boom.badRequest(validEndDate.invalidExplanation)
  }
  validBinInterval = Duration.fromISO(binInterval)
  if (!validBinInterval.isValid) {
    throw Boom.badRequest(validBinInterval.invalidExplanation)
  }
  try {
    validUserIdsFilter = deserializeIntArray(userIdsFilter)
  } catch (err) {
    throw Boom.badRequest('cannot parse userIdsFilter, expected pipe delimited integers')
  }
  validCategoriesFilter = deserializeStringArray(categoriesFilter)
  validCountriesFilter = deserializeStringArray(countriesFilter) // TODO: validate these are 3 letter country codes?
  validHashtagPrefixFilter = deserializeStringArray(hashtagPrefixFilter)
  validHashtagsFilter = deserializeStringArray(hashtagsFilter)
  // require at least 1 one filter, according to api spec.
  if (!validCategoriesFilter.length &&
      !validCountriesFilter.length &&
      !validHashtagPrefixFilter.length &&
      !validHashtagsFilter.length &&
      !validUserIdsFilter.length) {
    throw Boom.badRequest('at least one filter is required')
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
 * Deserialize pipe delimited integers, and filter out NaN values.
 *
 * @param {string} s
 * @returns {int[]}
 */
function deserializeIntArray (s) {
  const result = s.split('|').map(p => parseInt(p)).filter(n => !isNaN(n))

  if (s.length > 0 && result.length === 0) {
    throw Boom.badRequest('failed to deserialize integers array')
  }
  return result
}

/**
 * Deserialize pipe delimited strings and filter out empty strings
 * @param {string} s
 * @returns {string[]}
 */
function deserializeStringArray (s) {
  const result = s.split('|').filter(s => s.length > 0)
  if (s.length > 0 && result.length === 0) {
    throw Boom.badRequest('failed to deserialize strings array')
  }
  return result
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
    const result = await osmesa.getTimeSeries(params)
    res.send({
      bins: result
    })
  } catch (err) {
    res.boom.boomify(err)
  }
}

module.exports = {
  get
}
