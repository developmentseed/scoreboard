const TM2API = require('./tm2')
const TM3API = require('./tm3')
const TM4API = require('./tm4')

const FakeTMAPI = require('./fake_tm')
const MapRouletteAPI = require('./map_roulette')

module.exports = {
  TM2API,
  TM3API,
  TM4API,
  FakeTMAPI,
  MapRouletteAPI
}
