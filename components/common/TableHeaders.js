import React from 'react'
import Tooltip from './Tooltip'
const { keys, values } = require('ramda')
const tableHeaders = require('../../lib/i18n/table-headers.json')
const glossary = require('../../lib/i18n/glossary_en.json')

const TableHeaders = ({ tableName }) => {
  return values(prepareAllHeaders(tableName))
}

export function prepareAllHeaders (tableName) {
  const table = tableHeaders.find(header => header.id === tableName)
  const headers = glossary.filter(term => table.headers.includes(term.id))
  // appends a boolean property to headers to indicate whether the tooltip is showing
  headers.map(header => (
    table.displaysToolip.includes(header.id) ? (
      header.displayTooltip = true
    ) : (
      header.displayTooltip = false
    )))
  // orders header to respect the order in the table headers
  headers.sort((a, b) => (table.headers.indexOf(a.id) - table.headers.indexOf(b.id)))

  let headerObjects = {}

  headers.forEach(header => (
    headerObjects[header.id] = header.displayTooltip ? (
      <th key={header.id}>
        <Tooltip dataTip={header.description}>{header.name}</Tooltip>
      </th>
    ) : (
      <th key={header.id}>{header.name}</th>
    )
  ))

  return headerObjects
}

export function prepareHeader (tableName, accessor) {
  return prepareAllHeaders(tableName)[accessor]
}

export default TableHeaders
