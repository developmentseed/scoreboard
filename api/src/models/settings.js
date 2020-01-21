const db = require('../db/connection')
const { cryptr } = require('../config')
const { identity } = require('ramda')

let encrypt = cryptr.encrypt.bind(cryptr)
let decrypt = cryptr.decrypt.bind(cryptr)

// When testing, do not encrypt or decrypt settings
if (process.env.NODE_ENV === 'test') {
  encrypt = decrypt = identity
}

async function get (key) {
  return db('settings').where('setting', key).then(
    ({ value }) => decrypt(value)
  )
}

async function put (key, value) {
  let keys = await db('settings').where('setting', key)
  if (keys.length) {
    return db('settings').where('setting', key).update(
      { value: encrypt(value) }
    )
  } else {
    return db('settings').insert(
      {
        setting: key,
        value: encrypt(value)
      }
    )
  }
}

async function list () {
  return db('settings').select().then(list => {
    return list.map(({ setting, value }) => ({
      setting,
      value: decrypt(value)
    }))
  })
}

module.exports = {
  list,
  get,
  put
}