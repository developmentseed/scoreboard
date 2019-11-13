import React, { useEffect } from 'react'
import Tooltip from './Tooltip'
import Link from '../Link'
import { useTable, useSortBy } from 'react-table'
import { toPairs } from 'ramda'
import { parse } from 'date-fns'
import { formatDecimal, formatEditTimeDescription } from '../../lib/utils/format'
const glossary = require('../../lib/i18n/glossary_en.json')
const formattedNum = ({ cell: { value } }) => formatDecimal(value)

const formattedDate = function ({ cell: { value } }) {
  if (!value) return 'N/A'
  return formatEditTimeDescription(parse(value))
}

const identity = function ({ cell: { value } }) {
  if (!value) return 'N/A'
  return value
}

function chooseRenderer (datatype, idMap) {
  switch (datatype) {
    case 'string':
      return identity
    case 'number':
      return formattedNum
    case 'date':
      return formattedDate
    case 'namelink':
      return ({ cell: { value } }) => (
        <Link href={`/users/${idMap[value]}`}>
          <a className='link--normal' >
            { value }
          </a>
        </Link>
      )
    default:
      return formattedNum
  }
}
function prepareAllHeaders (table) {
  const headers = glossary.filter(term => Object.keys(table.headers).includes(term.id))
  // appends a boolean property to headers to indicate whether the tooltip is showing
  headers.map(header => (
    table.displaysTooltip.includes(header.id) ? (
      header.displayTooltip = true
    ) : (
      header.displayTooltip = false
    )))
  // orders header to respect the order in the table headers
  headers.sort((a, b) => (table.columnOrder.indexOf(a.id) - table.columnOrder.indexOf(b.id)))

  let headerObjects = {}

  headers.forEach(header => (
    headerObjects[header.id] = header.displayTooltip ? (
      <Tooltip dataTip={header.description}>{header.name}</Tooltip>
    ) : (
      header.name
    )
  ))

  return headerObjects
}

function prepareColumns (props) {
  const tableSchema = props.tableSchema
  const headerDivs = prepareAllHeaders(tableSchema)

  const columnSchemas = toPairs(tableSchema.headers)
  const columns = columnSchemas.map(([key, columnSchema]) => {
    return {
      Header: headerDivs[key],
      accessor: columnSchema.accessor,
      Cell: chooseRenderer(columnSchema.type, props.idMap)
    }
  })
  return columns
}

export default function Table (props) {
  const { headers, rows, prepareRow, toggleSortBy } = useTable({
    columns: prepareColumns(props),
    data: props.data
  }, useSortBy)

  if (props.initialSortColumn) {
    useEffect(() => toggleSortBy(props.initialSortColumn, 'descending'), [])
  }

  return (
    <table>
      <thead>
        <tr>
          {
            headers.map(column =>
              <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.Header}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          rows.map(
            (row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    })
                  }
                </tr>
              )
            }
          )
        }
      </tbody>
    </table>
  )
}
