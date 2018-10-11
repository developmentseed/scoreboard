const Users = require('../../../src/models/users')

async function command (args, flags, context) {
  const { osmId } = flags

  if (!osmId) {
    console.error('--osm-id is required')
    return process.exit(1)
  }

  const users = new Users()
  const [user] = await users.findByOsmId(osmId)

  if (!user) {
    await users.create({ osm_id: osmId, roles: ['admin'] })
  }

  if (user.roles.includes('admin')) {
    return console.log('user is already an admin')
  }

  user.roles.push('admin')
  await users.update(user.osmId, user)
}

const args = []

const flags = [
  {
    name: 'osm-id',
    alias: 'osmId',
    type: 'integer'
  }
]

module.exports = { command, args, flags }
