const tableHeaders = require('../page-text/table-headers.json')
const terms = require('../terms.json')

export const selectHeaders = tableName => {
  const table = tableHeaders.find(header => header.id === tableName)
  const headers = terms.filter(term => table.headers.includes(term.id))
  // orders header to respect the order in the table headers
  headers.sort((a, b) => (table.headers.indexOf(a.id) - table.headers.indexOf(b.id)))

  return headers
}
