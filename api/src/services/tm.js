const TM_TYPES = require('./tm_types')

/**
 * TaskingManagerFactory returns a new instance of a Tasking Manager identified
 * by a configuration type.
 */
class TaskingManagerFactory {
  /**
   * Create TaskingManager instance.
   * @static
   * @param {*} { id, type, url, opts }
   * @returns
   * @memberof TaskingManagerFactory
   */
  static createInstance ({ id, type, url, opts }) {
    const TaskingManagerCreator = TM_TYPES[type]
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
