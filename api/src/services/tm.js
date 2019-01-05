const { TM2API, TM3API } = require('./tm_types')
const sampleprojects = require('../fixtures/sampleprojects.json')

const {
  NODE_ENV
} = require('../config')

class TM {
  constructor (id, type, url) {
    if (!type) {
      throw new Error('TM needs type')
    }

    if (!url) {
      throw new Error('TM needs URL')
    }

    this.url = url
    this.type = type

    switch (type) {
      case 'tm2': {
        return new TM2API(url, id)
      }
      case 'tm3': {
        return new TM3API(url, id)
      }
      default: {
        return new FakeTMAPI()
      }
    }
  }

  static updateDB (db, dbObjects) {
    const promises = dbObjects.map(async obj => {
      let rows = await db('campaigns').where({ 'tm_id': obj.tm_id, 'tasker_id': obj.tasker_id })
      if (rows.length === 0) {
        // not found
        return db('campaigns').insert(obj)
      } else {
        return db('campaigns').where('tm_id', obj.tm_id).update(obj)
      }
    })
    return Promise.all(promises)
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
  module.exports.TM = FakeTMAPI
} else {
  module.exports.TM = TM
}
