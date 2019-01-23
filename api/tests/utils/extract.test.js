const extractCampaignHashtag = require('../../src/utils/extractCampaignHashtag')
const test = require('ava')

test('hashtags with no punctuation', t => {
  let hashtag = extractCampaignHashtag('#hotosm-1 #test', 1)
  t.is(hashtag, 'hotosm-1')
})

test('hashtags stuck together', t => {
  let hashtag = extractCampaignHashtag('#hotosm-1#test #test', 1)
  t.is(hashtag, 'hotosm-1')
})

test('hashtags with commas and colons', t => {
  let hashtag = extractCampaignHashtag('#buildings #hotosm:to-fix-1:#test,#test: add test!', 1)
  t.is(hashtag, 'hotosm:to-fix-1')
})
