const { TM2API, TM3API } = require('./tm_types')
const sampleprojects = require('../fixtures/sampleprojects.json')

const {
  NODE_ENV
} = require('../config')

class TM {
  constructor ({ url, type }) {
    this.url = url
    this.type = type

    if (!type) {
      throw new Error('TM needs type')
    }

    if (!url) {
      throw new Error('TM needs URL')
    }

    switch (type) {
      case 'TM2': {
        return new TM2API(url)
      }
      case 'TM3': {
        return new TM3API(url)
      }
      default: {
        return new FakeTMAPI()
      }
    }
  }
}

class FakeTMAPI {
  getProjects () {
    return Promise.resolve(JSON.stringify(sampleprojects))
  }

  getProject (id) {
    return JSON.stringify(Promise.resolve(sampleprojects.features.find((project) => {
      return String(project.id) === id
    })))
  }
}

if (NODE_ENV === 'test') {
  module.exports.TM = new FakeTMAPI()
} else {
  module.exports.TM = new TM()
}
