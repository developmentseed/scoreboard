module.exports = {
  PORT: process.env.PORT || 8181,
  NODE_ENV: process.env.NODE_ENV || 'development',
  OSMESA_API: process.env.OSMESA_API || 'https://osmesa-dummy-analytics.herokuapp.com',
  TM_URL: process.env.TM_URL || 'http://tasks.openstreetmap.us',
  TM_HASHTAG: process.env.TM_HASHTAG || 'project',
  USERS_URL: process.env.USERS_URL,
  API_URL: process.env.API_URL || 'http://localhost:5000',
  FILTERED_USERS: process.env.FILTERED_USERS || '0'
}
