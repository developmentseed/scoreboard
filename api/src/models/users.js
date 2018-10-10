const connection = require('../db/connection')
const { validateRole } = require('../utils/roles')

class Users {
  constructor() {
    this.db = connection()
  }

  get(id) {
    return this.db('users').where('id', id)
  }

  findByOsmId(osmID) {
    return this.db('users').where('osm_id', osmID)
  }

  find(key, value) {
    return this.db('users').where(key, value)
  }

  create(data) {
    return this.db('users').insert(data)
  }

  update(osmID, data) {
    return this.findByOsmId(osmID).update(data).returning('*')
  }

  destroy(id) {
    return this.get(id).del()
  }

  validateRole(id, role) {
    this.get(id).then((results) => {
      const [user] = results
      return validateRole(user.roles, role)
    })
  }
}

module.exports = Users
