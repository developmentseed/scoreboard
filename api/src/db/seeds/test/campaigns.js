const yakbak = require('yakbak')
const path = require('path')
const http = require('http')
const chance = require('chance').Chance()
const tmWorker = require('../../../tm_clock')

exports.seed = async (knex) => {
  /**
   * We create a tm proxy for tapes and fill the database with real
   * tasking manager data
   */
  const tm2proxy = http.createServer(yakbak('https://tasks.openstreetmap.id', {
    dirname: path.join(__dirname, '..', '..', '..', '..', 'tests', 'tapes')
  }))

  const tm3proxy = http.createServer(yakbak('https://tasks.openstreetmap.us', {
    dirname: path.join(__dirname, '..', '..', '..', '..', 'tests', 'tapes')
  }))

  await new Promise((resolve, reject) => {
    tm2proxy.listen(4851, async () => {
      tm3proxy.listen(4850, async () => {
        try {
          await knex('campaigns').del()
          await knex('taskers').del()

          // Add tasking managers
          await knex('taskers').insert({
            type: 'tm3',
            url: 'http://localhost:4850',
            options: {
              proxy: 'http://localhost:4850'
            },
            name: 'test tm3'
          })
          await knex('taskers').insert({
            type: 'tm2',
            url: 'http://localhost:4851',
            options: {
              proxy: 'http://localhost:4851'
            },
            name: 'test tm2'
          })
          await tmWorker()

          // change some of the campaign statuses
          const campaigns = await knex('campaigns').select()
          await Promise.all(campaigns.map(c => knex('campaigns').where('id', c.id).update({
            status: chance.pickone(['ARCHIVED', 'DRAFT', 'PUBLISHED'])
          })))
          resolve()
        } catch (e) {
          reject(e)
        }
      })
    })
  }).then(() => tm3proxy.close()).then(() => tm2proxy.close())
}
