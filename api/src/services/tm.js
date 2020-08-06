const { TM2API, TM3API, FakeTMAPI } = require('./tm_types')

const parseType = (type) => {
  switch (type) {
    case 'tm2': {
      return TM2API
    }
    case 'tm3': {
      return TM3API
    }
    case 'test': {
      return FakeTMAPI
    }
  }
}

class TaskingManagerFactory {
  static createInstance ({ id, type, url, opts }) {
    const TaskingManagerCreator = parseType(type)
    if (!TaskingManagerCreator) {
      throw new Error('Tasking Manager type is not implemented')
    }
    let cleanedUrl = url.replace(/\/+$/, '')
    let apiUrl = (opts && opts.proxy) || cleanedUrl
    apiUrl = apiUrl.replace(/\/+$/, '')
    return new TaskingManagerCreator({
      taskerId: id,
      url: cleanedUrl,
      apiUrl,
      opts
    })
  }
}

module.exports.TaskingManagerFactory = TaskingManagerFactory
