// https://gist.github.com/vlucas/2bd40f62d20c1d49237a109d491974eb

const crypto = require('crypto')

class Cryptr {
  constructor (key) {
    this.ENCRYPTION_KEY = key // must be 256 bits (32 characters)
  }

  encrypt (text) {
    let iv = crypto.randomBytes(16)
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(this.ENCRYPTION_KEY), iv)
    let encrypted = cipher.update(text)

    encrypted = Buffer.concat([encrypted, cipher.final()])

    return iv.toString('hex') + ':' + encrypted.toString('hex')
  }

  decrypt (text) {
    let textParts = text.split(':')
    let iv = Buffer.from(textParts.shift(), 'hex')
    let encryptedText = Buffer.from(textParts.join(':'), 'hex')
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(this.ENCRYPTION_KEY), iv)
    let decrypted = decipher.update(encryptedText)

    decrypted = Buffer.concat([decrypted, decipher.final()])

    return decrypted.toString()
  }
}

module.exports = Cryptr
