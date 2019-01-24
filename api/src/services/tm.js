const { TM2API, TM3API, FakeTMAPI } = require('./tm_types')

class TM {
  constructor (id, type, url) {
    if (!type) {
      throw new Error('TM needs type')
    }

    if (!url) {
      throw new Error('TM needs URL')
    }

    this.url = url.replace(/\/+$/, '') // Ensure no trailing slashes in URL
    this.type = type

    switch (type) {
      case 'tm2': {
        return new TM2API(url, id)
      }
      case 'tm3': {
        return new TM3API(url, id)
      }
      case 'test': {
        return new FakeTMAPI()
      }
    }
  }
}

module.exports.TM = TM
