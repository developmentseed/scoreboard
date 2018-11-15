const users = require('../../../src/models/users')
const roles = require('../../../src/models/roles')

async function command (args, flags) {
  const { id, osmId, roleName } = flags

  if (!id && !osmId) {
    console.error('--id or --osm-id is required')
    return process.exit(1)
  }

  if (!roleName) {
    console.error('role is required')
    return process.exit(1)
  }

  const [role] = await roles.findByName(roleName)

  if (!role) {
    console.error(`role ${roleName} not found`)
    return process.exit(1)
  }

  let user
  if (id) {
    [user] = await users.get(id)
  } else if (osmId) {
    [user] = await users.findByOsmId(osmId)
  }

  // return early if user already has this role
  if (user.roles.includes(role.id)) {
    return process.exit()
  }

  user.roles.push(role.id)
  return users.update(user.id, user)
    .then(() => {
      process.exit()
    })
    .catch((err) => {
      console.log(err)
      process.exit(1)
    })
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
    name: 'role',
    alias: 'roleName',
    type: 'string'
  }
]

module.exports = { command, args, flags }
