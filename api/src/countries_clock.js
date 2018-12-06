const conn = require('./db/connection')

async function countriesWorker () {
  const db = conn()
  const countries = await db('user_country_edits').select('country_id').sum('edit_count').groupBy('country_id') // Get all edits
  const promises = countries.map(async (obj) => {
    await db('countries').update({ 'edit_count': obj.sum }).where('id', obj.country_id)
  })
  return Promise.all(promises)
}

// Run
if (require.main === module) {
  countriesWorker()
    .then((resp) => {
      console.log(`Updated ${resp.length} records.`)
      process.exit(0)
    })
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
}

module.exports = countriesWorker
