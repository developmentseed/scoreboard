const {
  test, find, match, tail
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
  const hashtags = match(new RegExp('#([^\r\n\t\f\v ]+)', 'g'), searchString).map(tail)
  const main = find(test(new RegExp(`${projectId}`)), hashtags)

  if (main) {
    return main
  }
  return (hashtags.length > 0) ? hashtags[0] : null
}

module.exports = extractCampaignHashtag
