const knex = require('knex')
const connections = require('../knexfile')
const { NODE_ENV } = require('../config')

// Initalize knex with the development connection
module.exports = knex(connections[NODE_ENV])
