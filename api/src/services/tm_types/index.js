const TM2API = require('./tm2')
const TM3API = require('./tm3')
const FakeTMAPI = require('./fake_tm')
const MapRouletteAPI = require('./map_roulette')

/**
 * All the implemented types of Tasking Managers.
 */
const TM_TYPES = {
  FakeTMAPI,
  MapRouletteAPI,
  TM2API,
  TM3API
}

module.exports.TM_TYPES = TM_TYPES
