const users = require('../../src/models/users')
const roles = require('../../src/models/roles')

async function command (args, flags) {
  const { id, osmId, username } = flags

  if (!id && !osmId && !username) {
    console.error('--id or --osm-id or --username is required')
    return process.exit(1)
  }

  const [adminRole] = await roles.findByName('admin')

  let user
  if (id) {
    [user] = await users.get(id)
  } else if (osmId) {
    [user] = await users.findByOsmId(osmId)
  } else if (username) {
    [user] = await users.find('full_name', username)
  }

  if (!user) {
    if (!username || !osmId) {
      console.error('both --username and --osm-id are required to make a new user and must be your osm username and id')
      return process.exit(1)
    }
    await users.create({ osm_id: osmId, full_name: username, roles: [1] })
    return process.exit()
  }

  if (!user.roles) {
    user.roles = []
  }

  if (user.roles.includes(adminRole.id)) {
    console.log('user is already an admin')
    return process.exit()
  }

  user.roles.push(adminRole.id)
  await users.update(user.id, user)
  return process.exit()
}

const args = []

const flags = [
  {
    name: 'id',
    type: 'integer'
  },
  {
    name: 'osm-id',
    alias: 'osmId',
    type: 'integer'
  },
  {
    name: 'username',
    alias: 'u',
    type: 'string'
  }
]

module.exports = { command, args, flags }
