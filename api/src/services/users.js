const rp = require('request-promise-native')
const fs = require('fs')
const path = require('path')
const { USERS_URL, NODE_ENV } = require('../config')

/**
 * Methods to grab data from Users DB
 */
class UsersAPI {
  /* Get all users
   *
   * @returns {Promise} response
   */
  getUsers() {
    if (!USERS_URL) throw new Error('Users URL not defined')
    return rp(`${USERS_URL}`)
  }
}

class FakeUsersAPI {
  getUsers() {
    const users = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'sampleusers.csv'), 'utf-8')
    return Promise.resolve(users)
  }
}

if (NODE_ENV === 'development') {
  module.exports = new FakeUsersAPI()
}
else {
  module.exports = new UsersAPI()
}
