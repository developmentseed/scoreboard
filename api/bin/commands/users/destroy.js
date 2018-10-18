const users = require('../../../src/models/users')

async function command(args, flags) {
  const { id } = flags

  if (!id) {
    console.error('--id is required')
    return process.exit(1)
  }

  await users.destroy(id)
  return process.exit()
}

module.exports = { command }
