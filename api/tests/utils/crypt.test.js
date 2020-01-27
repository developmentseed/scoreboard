const Cryptr = require('../../src/utils/cryptr')
const test = require('ava')

test('encrypts and decrypts', t => {
  const cryptr = new Cryptr('secret-secret-secret-secret-keys')

  let plaintext = 'randomstring'

  let ciphertext = cryptr.encrypt(plaintext)
  t.is(plaintext, cryptr.decrypt(ciphertext))
})
