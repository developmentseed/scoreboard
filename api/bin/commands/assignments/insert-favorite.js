const db = require('../../../src/db/connection')

async function command (args, flags) {
  const { tasker_id, tm_id, user_id } = flags

  if (!tasker_id || !tm_id || !user_id) {
    console.error('--tasker_id, --tm_id and --user_id are required')
    return process.exit(1)
  }

  try {
    // Get the campaign id
    const [{ id: campaign_id }] = await db('campaigns').select('id').where({
      'tasker_id': tasker_id, 'tm_id': tm_id
    })

    // Insert the assignment
    await db('favorite_campaigns').insert({
      'campaign_id': campaign_id,
      'user_id': user_id
    })
  } catch (e) {
    console.error(e)
    process.exit(1)
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
    name: 'tm_id',
    alias: 'tmId',
    type: 'integer'
  },
  {
    name: 'user_id',
    alias: 'teamId',
    type: 'integer'
  }
]
module.exports = { command, args, flags }
