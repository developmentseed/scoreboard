const yakbak = require('yakbak')
const path = require('path')
const http = require('http')
const tmWorker = require('../../../tm_clock')

exports.seed = async (knex) => {
  /**
   * We create a tm proxy for tapes and fill the database with real
   * tasking manager data
   */
  const tm3proxy = http.createServer(yakbak('https://tasks.openstreetmap.us', {
    dirname: path.join(__dirname, '..', '..', '..', '..', 'tests', 'tapes')
  }))

  await new Promise((resolve, reject) => {
    tm3proxy.listen(4850, async () => {
      try {
        await knex('campaigns').del()
        await knex('taskers').del()

        // Add a tasking manager
        await knex('taskers').insert({ type: 'tm3', url: 'http://localhost:4850', name: 'test tm' })
        await tmWorker()
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }).then(() => tm3proxy.close())
}
