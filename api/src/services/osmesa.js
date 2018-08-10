const rp = require('request-promise-native')
const sampleuser = require('../fixtures/sampleuser.json')
const samplecampaign = require('../fixtures/samplecampaign.json')

const {
  OSMESA_API,
  NODE_ENV
} = require('../config')

/**
 * Methods to grab data from OSMesa
 */
class OSMesaAPI {
  /* Get a user by id from the OSMesa API
   *
   * @param {string} id - User ID
   * @returns {Promise} response
   */
  getUser(id) {
    return rp(`${OSMESA_API}/users/${id}`)
  }

  getCampaign(id) {
    return rp(`${OSMESA_API}/hashtags/${id}`)
  }
}

class FakeOSMesaAPI {
  getUser() {
    return Promise.resolve(JSON.stringify(sampleuser))
  }

  getCampaign() {
    return Promise.resolve(JSON.stringify(samplecampaign))
  }
}

if (NODE_ENV === 'development') {
  module.exports = new FakeOSMesaAPI()
}
else {
  module.exports = new OSMesaAPI()
}
