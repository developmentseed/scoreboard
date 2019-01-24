const db = require('../db/connection')
const countryList = require('../../../lib/utils/country-list.json')

function applyFilters (query, req) {
  const search = req.query.q || ''

  if (search.length > 0) {
    query = query.where('country_name', 'ilike', `%${search}%`)
  }

  return query
}

/**
 * All Countries and their stats route
 * /countries/stats
 *
 * The countries route displays all the users from the external
 * users source
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function stats (req, res) {
  const sortType = req.query.sortType || ''

  try {
    // get all the counts
    const countQuery = db('user_country_edits').countDistinct('country_name')

    // count all countries
    const totalCountries = await countQuery.clone()

    // count subtotal
    const subTotal = await applyFilters(countQuery, req)

    // Create table with ranking
    const allCountries = db('user_country_edits')
      .select('country_name as name')
      .sum('edit_count as edit_count')
      .groupBy('country_name')

    // apply search filter
    let recordQuery = applyFilters(allCountries.clone(), req)

    // apply sorting
    switch (sortType) {
      case 'Least total':
        recordQuery = recordQuery.orderBy('edit_count', 'asc')
        break
      default: // Most total edits
        recordQuery = recordQuery.orderBy('edit_count', 'desc')
        break
    }

    let records = await recordQuery.clone()

    // add codes to each country
    records = records.map((c) => {
      const countryPair = countryList.find((country_pair) => {
        return country_pair.name === c.name
      })
      c.code = countryPair.code
      return c
    })

    return res.send({
      records,
      subTotal: parseInt(subTotal[0].count, 10),
      total: parseInt(totalCountries[0].count, 10),
      editTotal: records.reduce((sum, { edit_count }) => sum + parseInt(edit_count, 10), 0)
    })
  } catch (err) {
    console.error(err)
    return res.boom.notFound('Could not retrieve records')
  }
}

module.exports = {
  stats
}
