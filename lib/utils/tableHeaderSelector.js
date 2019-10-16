const tableHeaders = require('../page-text/table-headers.json')
const glossary = require('../glossary.json')

export const selectHeaders = tableName => {
  const table = tableHeaders.find(header => header.id === tableName)
  const headers = glossary.filter(term => table.headers.includes(term.id))
  // appends a boolean property to headers to indicate whether the tooltip is showing
  headers.map(header => {
    if (table.displaysToolip.includes(header.id)) {
      header.displayTooltip = true
    } else {
      header.displayTooltip = false
    }
  })
  // orders header to respect the order in the table headers
  headers.sort((a, b) => (table.headers.indexOf(a.id) - table.headers.indexOf(b.id)))

  return headers
}

export const tableHeaderNames = {
  CAMPAIGN: 'campaign',
  COUNTRY_USER: 'country-user',
  ALL_USERS: 'all-users',
  ALL_COUNTRIES: 'all-countries',
  USER: 'user',
  TEAM: 'team',
  ADMIN_USER: 'admin-user',
  ADMIN_CAMPAIGN_TEAMS: 'admin-campaign-teams',
  ADMIN_CAMPAIGN_FAVORITES: 'admin-campaign-favorites',
  ADMIN_CAMPAIGN_CONTRIBUTIONS: 'admin-campaign-contributions',
  ADMIN_CAMPAIGN_ALL: 'admin-campaign-all',
  TASKING_MANAGER: 'tasking-manager'
}
