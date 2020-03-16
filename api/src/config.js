const join = require('url-join')
const cache = require('memory-cache')
const Cryptr = require('./utils/cryptr')

let DATABASE_URL

const appUrl = process.env.APP_URL || 'http://localhost:8181'
const prefix = process.env.APP_URL_PREFIX || '/'
let final = join(appUrl, prefix)

// add a trailing slash if it is missing
if (final[final.length - 1] !== '/') final += '/'

const APP_SECRET = process.env.APP_SECRET || 'changeme!........(32 characters)'
const cryptr = new Cryptr(APP_SECRET)

if (process.env.NODE_ENV === 'test') {
  DATABASE_URL = process.env.DATABASE_URL || 'postgres://scoreboard_test:test@localhost:5433/scoreboard_test'
} else {
  DATABASE_URL = process.env.DATABASE_URL || 'postgres://scoreboard:test@localhost:5433/scoreboard'
}

module.exports = {
  cache,
  cryptr,
  PORT: process.env.PORT || 8181,
  NODE_ENV: process.env.NODE_ENV || 'development',
  APP_URL: appUrl,
  APP_URL_PREFIX: prefix,
  APP_URL_FINAL: final,
  APP_SECRET,
  OSM_CONSUMER_KEY: process.env.OSM_CONSUMER_KEY,
  OSM_CONSUMER_SECRET: process.env.OSM_CONSUMER_SECRET,
  OSM_DOMAIN: process.env.OSM_DOMAIN || 'https://www.openstreetmap.org',
  OSM_TEAMS_SERVICE: process.env.OSM_TEAMS_SERVICE || 'http://localhost:8989',
  OSM_TEAMS_SERVICE_TOKEN_HOST: process.env.OSM_TEAMS_SERVICE_TOKEN_HOST || 'http://localhost:4444',
  OSM_TEAMS_SERVICE_TOKEN_PATH: process.env.OSM_TEAMS_SERVICE_TOKEN_PATH || '/oauth2/token',
  OSM_TEAMS_SERVICE_AUTHZ_HOST: process.env.OSM_TEAMS_SERVICE_AUTHZ_HOST || 'http://localhost:4444',
  OSM_TEAMS_SERVICE_AUTHZ_PATH: process.env.OSM_TEAMS_SERVICE_AUTHZ_PATH || '/oauth2/auth',
  OSM_TEAMS_CLIENT_ID: process.env.OSM_TEAMS_CLIENT_ID,
  OSM_TEAMS_CLIENT_SECRET: process.env.OSM_TEAMS_CLIENT_SECRET,
  PROJECT_NAME: process.env.PROJECT_NAME || 'OpenStreetMap',
  // to handle cases where the OSM deployment is behind a firewall
  OSM_DOMAIN_INTERNAL: process.env.OSM_DOMAIN_INTERNAL || process.env.OSM_DOMAIN || 'https://www.openstreetmap.org',
  SESSION_SECRET: process.env.SESSION_SECRET || 'changeme!',
  DATABASE_URL
}
