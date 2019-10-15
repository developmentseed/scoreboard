const tableHeaders = require('../page-text/table-headers.json')
const terms = require('../terms.json')

export const selectHeaders = tableName => {
  const table = tableHeaders.find(header => header.id === tableName)
  return terms.filter(term => table.headers.includes(term.id))
}
