const {
  test, find, match, tail
} = require('ramda')

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
function extractCampaignHashtag (str, TM_HASHTAG) {
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

module.exports.extractCampaignHashtag = extractCampaignHashtag
