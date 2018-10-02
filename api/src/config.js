module.exports = {
  PORT: process.env.PORT || 8181,
  NODE_ENV: process.env.NODE_ENV || 'development',
  OSMESA_API: process.env.OSMESA_API || 'https://osmesa-dummy-analytics.herokuapp.com',
  TM_URL: process.env.TM_URL || 'http://tasks.openstreetmap.us',
  TM_VERSION: process.env.TM_VERSION || '2',
  TM_HASHTAG: process.env.TM_HASHTAG || 'project',
  API_URL: process.env.API_URL || 'http://localhost:5000',
  APP_URL: process.env.APP_URL || 'http://localhost:3000',
  FILTERED_USERS: process.env.FILTERED_USERS || '0',
  OSM_CONSUMER_KEY: process.env.OSM_CONSUMER_KEY,
  OSM_CONSUMER_SECRET: process.env.OSM_CONSUMER_SECRET,
  SESSION_SECRET: process.env.SESSION_SECRET || 'SUPER SECRET',
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://scoreboard:test@localhost:5433/scoreboard'
}
