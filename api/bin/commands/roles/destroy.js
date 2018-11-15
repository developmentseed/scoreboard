const roles = require('../../../src/models/roles')

async function command (args, flags) {
  const { roleName } = flags

  try {
    const [role] = await roles.findByName(roleName)
    await roles.destroy(role.id)
    process.exit()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

const flags = [
  {
    name: 'name',
    alias: 'roleName',
    type: 'string'
  }
]

module.exports = { command, flags }
