const rp = require('request-promise-native')
const fs = require('fs')
const path = require('path')

const { OSMESA_API } = require('../config')
const { generateOSMesaUser } = require('../db/seeds/utils')

/**
 * Methods to grab data from OSMesa
 */
class OSMesaAPI {
  /* Get a user by id from the OSMesa API
   *
   * @param {string} id - User ID
   * @returns {Promise} response
   */
  getUser (id) {
    return rp(`${OSMESA_API}/users/${id}`)
  }

  getCampaign (id) {
    return rp(`${OSMESA_API}/campaigns/${id}`)
  }
}

class FakeOSMesaAPI {
  getUser (id) {
    const sampleuser = generateOSMesaUser(id, `test${(id - 100000000)}`)
    return Promise.resolve(JSON.stringify(sampleuser))
  }

  getCampaign (id) {
    // to check the notfound page we fake a 404 response
    if (id === 'notfound') {
      return Promise.reject(new Error('not found'))
    }
    const samplecampaign = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'samplecampaign.json'), 'utf-8'))
    samplecampaign.tag = `project-${id}`
    return Promise.resolve(JSON.stringify(samplecampaign))
  }
}

if (!OSMESA_API) {
  module.exports = new FakeOSMesaAPI()
} else {
  module.exports = new OSMesaAPI()
}
