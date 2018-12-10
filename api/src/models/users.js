const db = require('../db/connection')

function get (id) {
  return db('users').where('id', id)
}

function findByOsmId (osmID) {
  return db('users').where('osm_id', osmID)
}

function list () {
  return db('users').select()
}

function find (key, value) {
  return db('users').where(key, value)
}

function create (data) {
  if (!data.roles) {
    data.roles = []
  }

  return db('users').insert(data)
}

function update (id, data) {
  return get(id).update(data).returning('*')
}

function destroy (id) {
  return get(id).del()
}

module.exports = {
  get,
  findByOsmId,
  list,
  find,
  create,
  update,
  destroy
}
