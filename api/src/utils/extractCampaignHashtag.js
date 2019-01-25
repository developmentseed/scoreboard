const {
  test, find, match, tail, init
} = require('ramda')

/**
 * Given a campaign's changeset_comment return the hashtag
 * matching the tasking manager's schema for campaign hashtags
 * e.g for OSMUS the main hashtag is of the form `osmus-project-1`.
 *
 * If comment_changeset does not contain the project's id , it
 * defaults to the first hashtag it finds. If there are no
 * hashtags it returns null
 *
 * @param {string} str - changeset_comment from campaign
 * @returns {string} main hashtag for campaign
 */
function extractCampaignHashtag (str, projectId) {
  if (!str) return []

  const searchString = str.replace(/,/g, ' ') // remove commas

  // Get the hashtags
  // eslint-disable-next-line
  const hashtagRegex = /(#[^\u2000-\u206F\u2E00-\u2E7F\s\\'!"#$%()*,.\/;<=>?@\[\]^`{|}~]+)/g;
  const groups = match(hashtagRegex, searchString).map(tail)

  // Capture trailing : but leave ones in the middle
  // for example hotosm:to-fix is valid but not hotosm:
  const hashtags = groups.map(g => {
    if (test(/.+:$/, g)) {
      return init(g)
    } else {
      return g
    }
  })
  const main = find(test(new RegExp(`${projectId}`)), hashtags)

  if (main) {
    return main
  }
  return (hashtags.length > 0) ? hashtags[0] : null
}

module.exports = extractCampaignHashtag
