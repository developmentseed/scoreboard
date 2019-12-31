const osmesa = require('../services/osmesa')

/**
 * User Extents route
 * request is of the form `/api/extents/user/test/:z/:x/:y.mvt'
 * it should be rerouted to the s3 path `s3://s3prefix/user/test/:z/:x/:y.mvt`
 */
async function userExtent (req, res) {
  const p = req.params
  res.set('Content-Type', 'application/vnd.mapbox-vector-tile')
  res.set('Content-Encoding', 'gzip')
  osmesa.tiles(`stats-results/v7/user/${req.user}`, p.z, p.x, p.y)
    .on('error', (err) => {
      if (err.code === 'NoSuchKey') {
        res.boom.notFound()
      } else {
        console.error(err)
        res.boom.serverError()
      }
    })
    .pipe(res)
}

module.exports = {
  userExtent
}
