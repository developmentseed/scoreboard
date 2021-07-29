const db = require('../../../src/db/connection')

async function command (args, flags) {
  const { tasker_id, csv } = flags

  let query = db('favorite_campaigns').join('campaigns', 'campaign_id', 'campaigns.id').select(
    ['tm_id', 'author', 'tasker_id', 'campaign_hashtag', 'user_id']
  )

  if (tasker_id) {
    query = query.where('tasker_id', tasker_id)
  }

  const list = await query

  if (csv) {
    console.log('tasker_id, tm_id, author, hashtag, user_id')
    await Promise.all(list.map(async (a) => {
      console.log(`${a.tasker_id}, ${a.tm_id}, ${a.author}, ${a.campaign_hashtag}, ${a.user_id}`)
    }))
  } else {
    await Promise.all(list.map(async (a) => {
      console.log(`tasker_id: ${a.tasker_id} | tm_id: ${a.tm_id} | author: ${a.author} | hashtag: ${a.campaign_hashtag} | user_id: ${a.user_id}`)
    }))
  }

  process.exit()
}

const args = []

const flags = [
  {
    name: 'tasker_id',
    alias: 'taskerId',
    type: 'integer'
  },
  {
    name: 'csv',
    alias: 'c',
    type: 'boolean'
  }
]
module.exports = { command, args, flags }
