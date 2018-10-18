const users = require('../../../src/models/users')
const roles = require('../../../src/models/roles')

async function command() {
  const list = await users.list()

  await Promise.all(list.map(async (user) => {
    let userRoles
    if (user.roles && user.roles.length) {
      userRoles = await roles.getRoles(user.roles)
    }

    const renderUserRoles = () => {
      if (!userRoles) return ''
      const rolesString = userRoles.map((role) => {
        return role.name
      }).join(', ')

      return `| roles: ${rolesString}`
    }

    console.log(user.full_name)
    console.log(`id: ${user.id} | osm_id: ${user.osm_id} ${renderUserRoles()}\n`)
  }))

  process.exit()
}

module.exports = { command }
