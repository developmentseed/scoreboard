const yakbak = require('yakbak')
const path = require('path')
const http = require('http')
const tmWorker = require('../../../tm_clock')

exports.seed = async (knex) => {
  /**
   * We create a tm proxy for tapes and fill the database with real
   * tasking manager data
   * from MapRoulette and OSM Tasks
   */

  const mrproxy = http.createServer(yakbak('https://maproulette.org', {
    dirname: path.join(__dirname, '..', '..', '..', '..', 'tests', 'tapes')
  }))

  await new Promise((resolve, reject) => {
    mrproxy.listen(4851, async () => {
      try {
        await knex('campaigns').del()
        await knex('taskers').del()

        await knex('taskers').insert({
          type: 'mr',
          url: 'http://maproulette.org',
          name: 'test mr',
          options: {
            // proxy: 'http://localhost:4851'
          }
        })
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }).then(() => mrproxy.close())

  const tm3proxy = http.createServer(yakbak('https://tasks.openstreetmap.us', {
    dirname: path.join(__dirname, '..', '..', '..', '..', 'tests', 'tapes')
  }))

  await new Promise((resolve, reject) => {
    tm3proxy.listen(4850, async () => {
      try {
        // Add tasking managers
        await knex('taskers').insert({
          type: 'tm3',
          url: 'http://tasks.openstreetmap.us',
          name: 'test tm3',
          options: {
            proxy: 'http://localhost:4850'
          }
        })
        await tmWorker()

        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }).then(() => tm3proxy.close())
}
