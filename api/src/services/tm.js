const rp = require('request-promise-native')
const sampleprojects = require('../fixtures/sampleprojects.json')

const {
  test, find, match, tail
} = require('ramda')

const {
  TM_URL,
  TM_HASHTAG,
  TM_VERSION,
  NODE_ENV
} = require('../config')

/**
 * Given a campaign's changeset_comment return the hashtag
 * matching the tasking manager's schema for campaign hashtags
 * e.g for OSMUS, TM_HASHTAG is `osmus-project` and the main
 * hashtag is of the form `osmus-project-1`.
 *
 * If comment_changeset does not contain the TM_HASHTAG, it
 * defaults to the first hashtag it finds. If there are no
 * hashtags it returns null
 *
 * @param {string} str - changeset_comment from campaign
 * @returns {string} main hashtag for campaign
 */
function extractCampaignHashtag(str) {
  if (!str) return []

  // Get the hashtags
  // eslint-disable-next-line
  const hashtags = match(new RegExp('#([^\r\n\t\f\v ]+)', 'g'), str).map(tail)
  const main = find(test(new RegExp(`(${TM_HASHTAG}-[0-9]+)`)), hashtags)

  if (main) {
    return main
  }
  return (hashtags.length > 0) ? hashtags[0] : null
}

/**
 * Methods to grab data from tasking manager version 2
 */
class TM2API {
  /* Get all projects from the tasking manager
   *
   * @returns {Promise} response
   */
  getProjects() {
    return rp(`${TM_URL}/projects.json`)
  }

  getProject(id) {
    return rp(`${TM_URL}/project/${id}.json`)
  }

  getTasks(id) {
    return rp(`${TM_URL}/project/${id}/tasks.json`)
  }
}

/**
 * Methods to grab data from tasking manager version 3
 */
class TM3API {
  /* Get all projects from the tasking manager
   *
   * @returns {Promise} response
   */
  getProjects() {
    return rp(`${TM_URL}/api/v1/project/search?mapperLevel=ALL`)
  }

  getProject(id) {
    return rp(`${TM_URL}/project/${id}`)
  }

  getTasks(id) {
    return rp(`${TM_URL}/project/${id}/tasks`)
  }
}

class FakeTMAPI {
  getProjects() {
    return Promise.resolve(JSON.stringify(sampleprojects))
  }

  getProject(id) {
    return JSON.stringify(Promise.resolve(sampleprojects.features.find((project) => {
      return String(project.id) === id
    })))
  }
}

module.exports.extractCampaignHashtag = extractCampaignHashtag

if (NODE_ENV === 'test') {
  module.exports.TM = new FakeTMAPI()
}
else if (TM_VERSION === '2') {
  module.exports.TM = new TM2API()
}
else if (TM_VERSION === '3') {
  module.exports.TM = new TM3API()
}
