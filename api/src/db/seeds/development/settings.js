const { cache } = require('../../../config')
const { put } = require('../../../models/settings')

const settings = {
  // default
  'osmesa-db': 'postgres://postgres@localhost:5434/postgres',
  'leaflet-source': 'https://api.mapbox.com/styles/v1/devseed/cjqpb3z440t302smfnewsl6vb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q',
  'webgl-source': 'mapbox://styles/devseed/cjqpb3z440t302smfnewsl6vb'
}

exports.seed = (knex) => knex('settings').del() // delete entries
  .then(async () => {
    const promises = Object.keys(settings).map(key => {
      cache.put(key, settings[key])
      return put(key, settings[key])
    })

    await Promise.all(promises)
  })
