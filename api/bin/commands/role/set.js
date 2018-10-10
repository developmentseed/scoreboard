const Users = require('../../../src/models/users')

function command (args, flags, context) {
  const { id, osmId, role } = flags

  if (!id && !osmId) {
    console.error('user id or osm-id is required')
    return process.exit(1)
  }

  if (!role) {
    console.error('role is required')
    return process.exit(1)
  }

  const users = new Users()
  console.log('users', users)

  let user
  if (id) {
    user = users.get(id)[0]
  }
  else if (osmId) {
    user = users.findByOsmId(osmId)[0]
  }

  // return early if user already has this role
  if (user.roles.includes(role)) {
    return process.exit()
  }

  user.roles.push(role)
  users.update(user.osmId, user)
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
    type: 'string'
  }
]

module.exports = { command, args, flags }
