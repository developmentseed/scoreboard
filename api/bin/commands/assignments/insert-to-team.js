const db = require('../../../src/db/connection')

async function command (args, flags) {
  const { tasker_id, tm_id, team_id, team_priority } = flags

  if (!tasker_id || !tm_id || !team_id || !team_priority) {
    console.error('--tasker_id, --tm_id --team_priority and --team_id are required')
    return process.exit(1)
  }

  try {
    // Get the campaign id
    const [{ id: campaign_id }] = await db('campaigns').select('id').where({
      'tasker_id': tasker_id, 'tm_id': tm_id
    })

    // Insert the assignment
    await db('team_assignments').insert({
      'campaign_id': campaign_id,
      'team_id': team_id,
      'team_priority': team_priority
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
    name: 'team_id',
    alias: 'teamId',
    type: 'integer'
  },
  {
    name: 'team_priority',
    alias: 'teamPriority',
    type: 'integer'
  }
]
module.exports = { command, args, flags }
