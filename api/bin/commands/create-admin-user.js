const users = require('../../src/models/users')
const roles = require('../../src/models/roles')

async function command (args, flags) {
  const { id, osmId, fullName } = flags

  if (!id && !osmId) {
    console.error('--id or --osm-id is required')
    return process.exit(1)
  }

  const [adminRole] = await roles.findByName('admin')

  let user
  if (id) {
    [user] = await users.get(id)
  } else if (osmId) {
    [user] = await users.findByOsmId(osmId)
  }

  if (!user) {
    if (!fullName) {
      console.error('--full-name is required to make a new user and must be your osm username')
      return process.exit(1)
    }
    await users.create({ osm_id: osmId, full_name: fullName, roles: [1] })
    return process.exit()
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
    name: 'full-name',
    alias: 'fullName',
    type: 'string'
  }
]

module.exports = { command, args, flags }
