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

        // Make all the hashtags predictable
        const campaigns = await knex('campaigns').select()
        const fixedCampaigns = campaigns.map(c => knex('campaigns').where('id', c.id).update({
          campaign_hashtag: `project-${c.tm_id}`
        }))
        await Promise.all(fixedCampaigns)

        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }).then(() => tm3proxy.close())
}
