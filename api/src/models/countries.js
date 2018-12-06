const countryHelp = require('i18n-iso-countries')
const usStateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
const connection = require('../db/connection')

const db = connection()

async function create (cnt_name) {
  if (usStateNames.includes(cnt_name)) cnt_name = 'United States of America'
  const cnt_alpha2 = countryHelp.getAlpha2Code(cnt_name, 'en')
  return db('countries').returning('id').insert({
    name: cnt_name,
    alpha2: cnt_alpha2
  })
}

function get (id) {
  return db('countries').where('id', id)
}

function list () {
  return db('countries').select()
}

function find (key, value) {
  return db('countries').where(key, value)
}

function findByAlpha2 (alpha2Value) {
  return db('countries').select('id').where('alpha2', alpha2Value)
}

async function findByName (name) {
  if (usStateNames.includes(name)) name = 'United States of America'
  const alpha2 = countryHelp.getAlpha2Code(name, 'en')
  return findByAlpha2(alpha2)
}

function update (id, data) {
  return get(id).update(data).returning('*')
}

function destroy (id) {
  return get(id).del()
}

module.exports = {
  create,
  get,
  list,
  find,
  findByAlpha2,
  findByName,
  update,
  destroy
}
