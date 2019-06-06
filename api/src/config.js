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

module.exports = {
  PORT: process.env.PORT || 8181,
  NODE_ENV: process.env.NODE_ENV || 'development',
  OSMESA_API: process.env.OSMESA_API || null,
  APP_URL: appUrl,
  APP_URL_PREFIX: prefix,
  APP_URL_FINAL: final,
  OSM_CONSUMER_KEY: process.env.OSM_CONSUMER_KEY,
  OSM_CONSUMER_SECRET: process.env.OSM_CONSUMER_SECRET,
  OSM_DOMAIN: process.env.OSM_DOMAIN || 'https://www.openstreetmap.org',
  OSM_TEAMS_SERVICE: process.env.OSM_TEAMS_SERVICE || 'http://localhost:3000',
  OSM_TEAMS_SERVICE_TOKEN_HOST: process.env.OSM_TEAMS_SERVICE_TOKEN_URL || 'http://localhost:4445',
  OSM_TEAMS_SERVICE_TOKEN_PATH: process.env.OSM_TEAMS_SERVICE_TOKEN_PATH || '/oauth2/token',
  OSM_TEAMS_SERVICE_AUTHZ_PATH: process.env.OSM_TEAMS_SERVICE_AUTHZ_PATH || '/oauth2/auth',
  OSM_TEAMS_CLIENT_ID: process.env.OSM_TEAMS_CLIENT_ID,
  OSM_TEAMS_CLIENT_SECRET: process.env.OSM_TEAMS_CLIENT_SECRET,
  PROJECT_NAME: process.env.PROJECT_NAME || 'OpenStreetMap',
  // to handle cases where the OSM deployment is behind a firewall
  OSM_DOMAIN_INTERNAL: process.env.OSM_DOMAIN_INTERNAL || process.env.OSM_DOMAIN || 'https://www.openstreetmap.org',
  SESSION_SECRET: process.env.SESSION_SECRET || 'SUPER SECRET',
  DATABASE_URL
}
