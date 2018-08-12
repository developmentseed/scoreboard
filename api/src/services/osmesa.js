const rp = require('request-promise-native')
const fs = require('fs')
const path = require('path')

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
  getUser(id) {
    const sampleuser = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'sampleuser.json'), 'utf-8'))
    sampleuser.uid = id
    sampleuser.name = `test${(id - 100000000)}` // Users start at 100000000
    return Promise.resolve(JSON.stringify(sampleuser))
  }

  getCampaign(id) {
    const samplecampaign = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'samplecampaign.json'), 'utf-8'))
    samplecampaign.tag = `project-${id}`
    return Promise.resolve(JSON.stringify(samplecampaign))
  }
}

if (NODE_ENV === 'development') {
  module.exports = new FakeOSMesaAPI()
}
else {
  module.exports = new OSMesaAPI()
}
