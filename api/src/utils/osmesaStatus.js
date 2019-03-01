const osmesa = require('../services/osmesa')
async function getOsmesaStatus (category) {
  try {
    const refreshStats = await osmesa.getUpdates()
    if (typeof category === 'undefined') {
      return refreshStats
    } else {
      return JSON.parse(refreshStats)[category]
    }
  } catch (err) {
    console.error(err)
  }
}
module.exports = getOsmesaStatus
