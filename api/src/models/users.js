const connection = require('../db/connection')

class Users {
  constructor() {
    this.db = connection()
  }

  get(id) {
    return this.db('users').where('id', id).then((rows) => rows[0])
  }

  findByOsmId(osmID) {
    return this.db('users').where('osm_id', osmID).then((rows) => rows[0])
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
}

module.exports = Users
