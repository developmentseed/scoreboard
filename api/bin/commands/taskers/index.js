const taskers = require('../../../src/models/taskers')

async function command () {
  const list = await taskers.list()

  await Promise.all(list.map(async (tasker) => {
    console.log(`id: ${tasker.id} | name: ${tasker.name} | type: ${tasker.type}`)
  }))
  return process.exit()
}

module.exports = { command }
