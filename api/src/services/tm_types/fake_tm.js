const sampleprojects = require('../../fixtures/sampleprojects.json')

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

module.exports = FakeTMAPI
