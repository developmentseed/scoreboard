const osmesa = require('../services/osmesa')

/**
 * For error handling the response cannot have the vector tiles response headers
 *
 * @param res
 */
function revertHeaders (res) {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.set('Content-Encoding', undefined)
}

/**
 * User Extents route
 * request is of the form `/api/extents/user/test/:z/:x/:y.mvt'
 * it should be rerouted to the s3 path `s3://s3prefix/user/test/:z/:x/:y.mvt`
 */
async function userExtent (req, res) {
  try {
    const p = req.params
    res.set('Content-Type', 'application/vnd.mapbox-vector-tile')
    res.set('Content-Encoding', 'gzip')
    osmesa.tiles(`user/${p.user}`, p.z, p.x, p.y)
      .on('error', (err) => {
        console.error(err)
        revertHeaders(res)
        // the error is from s3, so use it's http status code & message
        const { message, statusCode } = err
        res.boom.boomify(err, { message, statusCode })
      })
      .pipe(res)
  } catch (err) {
    console.error(err)
    revertHeaders(res)
    return Promise.resolve(res.boom.boomify(err, {
      statusCode: 500,
      message: 'unhandled error in /api/extents/user'
    }))
  }
}

module.exports = {
  userExtent
}
