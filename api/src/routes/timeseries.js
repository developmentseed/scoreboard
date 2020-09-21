const OSMesa = require('../services/osmesa')
/**
 * Create teams route
 * /timeseries
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function post (req, res) {
  const { body } = req
  try {
    const timeseriesData = await OSMesa.getTimeseries(body)
    console.log('route', timeseriesData)
    return res.send(timeseriesData)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not create timeseries')
  }
}

module.exports = { post }
