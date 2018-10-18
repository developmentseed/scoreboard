const roles = require('../../../src/models/roles')

async function command(args, flags) {
  const { roleName } = flags

  try {
    await roles.create({ name: roleName })
    process.exit()
  }
  catch (err) {
    console.log(err)
    process.exit(1)
  }
}

const flags = [
  {
    name: 'name',
    alias: 'roleName',
    type: 'string',
    required: true
  }
]

module.exports = { command, flags }
