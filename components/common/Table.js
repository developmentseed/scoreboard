import React, { useEffect } from 'react'
import Tooltip from './Tooltip'
import Link from '../Link'
import { useTable, useSortBy } from 'react-table'
import { toPairs, sum } from 'ramda'
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

function selectCellFormatter (datatype, idMap, countryMap, campaignMap) {
  switch (datatype) {
    case 'string':
      return identity
    case 'button':
      return identity
    case 'number':
      return formattedNum
    case 'id':
      return identity
    case 'date':
      return formattedDate
    case 'countrylink':
      return ({ cell: { value } }) => {
        const code = countryMap[value]
        return (
          <Link href={`/country?code=${code}`} as={`/countries/${code}`}>
            <a className='link--normal'>
              {value}
            </a>
          </Link>
        )
      }
    case 'campaignlink':
      return ({ cell: { value } }) => {
        const code = campaignMap[value]
        return (
          <Link href={`/campaigns/${code}`}>
            <a className='link--normal' >
              {value}
            </a>
          </Link>
        )
      }
    case 'namelink':
      return ({ cell: { value } }) => {
        return (
          <Link href={`/users/${idMap[value]}`}>
            <a className='link--normal' >
              { value }
            </a>
          </Link>
        )
      }
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
      Cell: selectCellFormatter(columnSchema.type, props.idMap, props.countryMap, props.campaignMap)
      // aggregate: ['sum', 'count'],
      // Aggregated: ({ cell: { value } }) => `${value}`,
      // Footer: ({ cell: { Cell.reduce((sum, current) => sum + current, 0)} })
    }
  })
  return columns
}

export default function Table (props) {
  const sortable = !props.notSortable
  const { headers, rows, prepareRow, toggleSortBy } = useTable({
    columns: prepareColumns(props),
    data: props.data
  }, useSortBy)
  if (sortable && props.initialSortColumn) {
    useEffect(() => toggleSortBy(props.initialSortColumn, 'descending'), [])
  }
  return (
    <table>
      <thead>
        <tr>
          {
            headers.map(column =>
              sortable ? (
                <th
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  title={column.Header.props ? `Sort by ${column.Header.props.children}` : `Sort by ${column.Header}`}
                >
                  <a className={column.isSorted ? (column.isSortedDesc ? 'sort-desc' : 'sort-asc') : 'sort-none'}>
                    {column.Header}
                  </a>
                </th>)
                : (
                  <th key={column.id} {...column.getHeaderProps()}>
                    <div>{column.Header}</div>
                  </th>)
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
                      return <td {...cell.getCellProps()} style={{ textAlign: cell.datatype === 'number' ? 'right' : '' }}>
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
