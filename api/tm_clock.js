const { TM_URL, TM_HASHTAG } = require('./config')
const rp = require('request-promise-native')
const conn = require('./db/connection')
const {
  test, find, pick, merge, match, omit, tail
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
 * Worker runs in a clock process and updates the cache
 * that holds Tasking Manager statistics
 *
 * @returns {Promise} a response
 */
async function tmWorker() {
  // Get projects from TM2
  try {
    const response = await rp(`${TM_URL}/projects.json`)
    const { features } = JSON.parse(response)
    if (features) {
      // Map the features to objects for sql insertion
      const sqlObjects = features.map((feature) => {
        const properties = pick([
          'done',
          'description',
          'author',
          'status',
          'changeset_comment',
          'priority',
          'name',
          'instructions',
          'validated'
        ], feature.properties)
        const noPropertiesFeature = merge(feature, { properties: {} })
        const mainHashtag = extractCampaignHashtag(properties.changeset_comment)
        const {
          created: created_at, last_update: updated_at // eslint-disable-line camelcase
        } = feature.properties
        return merge(properties, {
          campaign_hashtag: mainHashtag,
          created_at,
          updated_at,
          geometry: JSON.stringify(noPropertiesFeature),
          tm_id: feature.id
        })
      })

      // Add all features as single feature collection geometry
      const onlyGeometries = features.map(omit(['properties']))
      const fc = { type: 'FeatureCollection', features: onlyGeometries }

      // Map feature collection to prepared SQL statement
      const featureSQL = conn('features')
        .where('name', 'tm_campaigns')
        .then((rows) => {
          if (rows.length === 0) {
            return conn('features').insert({
              name: 'tm_campaigns',
              feature: fc,
              created_at: conn.fn.now(),
              updated_at: conn.fn.now()
            })
          }
          return conn('features')
            .where('name', 'tm_campaigns')
            .update({
              updated_at: conn.fn.now(),
              feature: JSON.stringify(fc)
            })
        })

      // Map campaign attributes to prepared SQL statements
      const promises = sqlObjects.map((obj) => conn('campaigns')
        .where('tm_id', obj.tm_id)
        .then((rows) => {
          if (rows.length === 0) { // Not found
            return conn('campaigns').insert(obj)
          }
          return conn('campaigns').where('tm_id', obj.tm_id).update(obj)
        }))
      promises.push(featureSQL)

      // Return a single promise wrapping all the
      // SQL statements
      return Promise.all(promises)
    }
    throw new Error('Invalid response from Tasking Manager')
  }
  catch (e) {
    console.error(e)
    return Promise.resolve()
  }
}

// Run
if (require.main === module) {
  tmWorker()
    .then((resp) => {
      console.log(`Updated ${resp.length} records.`)
      process.exit(0)
    })
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
}

module.exports = tmWorker
