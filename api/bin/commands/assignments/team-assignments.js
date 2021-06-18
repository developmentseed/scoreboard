const db = require('../../../src/db/connection')

async function command (args, flags) {
  const { tasker_id, csv } = flags

  let query = db('team_assignments').join('campaigns', 'campaign_id', 'campaigns.id').select(
    ['team_id', 'tm_id', 'author', 'tasker_id', 'campaign_hashtag', 'team_priority']
  )

  if (tasker_id) {
    query = query.where('tasker_id', tasker_id)
  }

  const list = await query

  if (csv) {
    console.log('tasker_id, tm_id, author, hashtag, team_id')
    await Promise.all(list.map(async (a) => {
      console.log(`${a.tasker_id}, ${a.tm_id}, ${a.author}, ${a.campaign_hashtag}, ${a.team_id}, ${a.team_priority}`)
    }))
  } else {
    await Promise.all(list.map(async (a) => {
      console.log(`tasker_id: ${a.tasker_id} | tm_id: ${a.tm_id} | author: ${a.author} | hashtag: ${a.campaign_hashtag} | team_id: ${a.team_id} | team_prioiryt: ${a.team_priority}`)
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
