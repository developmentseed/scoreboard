const join = require('url-join')
let DATABASE_URL

if (process.env.NODE_ENV === 'test') {
  DATABASE_URL = process.env.DATABASE_URL || 'postgres://scoreboard_test:test@localhost:5433/scoreboard_test'
} else {
  DATABASE_URL = process.env.DATABASE_URL || 'postgres://scoreboard:test@localhost:5433/scoreboard'
}

const appUrl = process.env.APP_URL || 'http://localhost:8181'
const prefix = process.env.APP_URL_PREFIX || '/'
let final = join(appUrl, prefix)

// add a trailing slash if it is missing
if (final[final.length - 1] !== '/') final += '/'

let docsBaseURL = process.env.DOCS_BASE_URL || '/docs/'
if (docsBaseURL[docsBaseURL.length - 1] !== '/') docsBaseURL += '/'

module.exports = {
  PORT: process.env.PORT || 8181,
  NODE_ENV: process.env.NODE_ENV || 'development',
  OSMESA_API: process.env.OSMESA_API || null,
  TM_URL: process.env.TM_URL || 'http://tasks.openstreetmap.us',
  TM_VERSION: process.env.TM_VERSION || '3',
  TM_HASHTAG: process.env.TM_HASHTAG || 'project',
  APP_URL: appUrl,
  APP_URL_PREFIX: prefix,
  APP_URL_FINAL: final,
  FILTERED_USERS: process.env.FILTERED_USERS || '0',
  OSM_CONSUMER_KEY: process.env.OSM_CONSUMER_KEY,
  OSM_CONSUMER_SECRET: process.env.OSM_CONSUMER_SECRET,
  OSM_DOMAIN: process.env.OSM_DOMAIN || 'https://www.openstreetmap.org',
  OSM_TEAMS_SERVICE: process.env.OSM_TEAMS_SERVICE || 'http://localhost:3000',
  PROJECT_NAME: process.env.PROJECT_NAME || 'OpenStreetMap',
  // to handle cases where the OSM deployment is behind a firewall
  OSM_DOMAIN_INTERNAL: process.env.OSM_DOMAIN_INTERNAL || process.env.OSM_DOMAIN || 'https://www.openstreetmap.org',
  SESSION_SECRET: process.env.SESSION_SECRET || 'SUPER SECRET',
  DATABASE_URL,
  DOCS_BASE_URL: docsBaseURL
}
