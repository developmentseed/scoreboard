const roles = require('../../../src/models/roles')

async function command() {
  try {
    const list = await roles.list()
    list.forEach((role) => {
      console.log(`${role.id} | ${role.name}`)
    })
    process.exit()
  }
  catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = { command }
