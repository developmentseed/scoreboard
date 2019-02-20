const { TM2API, TM3API, FakeTMAPI } = require('./tm_types')

class TM {
  constructor (id, type, url, api_url) {
    if (!type) {
      throw new Error('TM needs type')
    }

    if (!url) {
      throw new Error('TM needs URL')
    }

    this.id = id
    this.url = url.replace(/\/+$/, '') // Ensure no trailing slashes in URL
    this.api_url = api_url || this.url
    this.api_url = this.api_url.replace(/\/+$/, '')

    this.type = type

    switch (type) {
      case 'tm2': {
        return new TM2API(this.url, this.id, this.api_url)
      }
      case 'tm3': {
        return new TM3API(this.url, this.id, this.api_url)
      }
      case 'test': {
        return new FakeTMAPI()
      }
    }
  }
}

module.exports.TM = TM
