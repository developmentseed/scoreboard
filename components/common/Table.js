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
        const { taskerId, taskingManagerId } = campaignMap[value]
        return (
          <Link
            href={`/campaign?id=${taskerId}-${taskingManagerId}`}
            as={`/campaigns/${taskerId}-${taskingManagerId}`}>
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
    case 'teamlink':
      return ({ cell: { value } }) => {
        return (
          <Link href={`/teams/${idMap[value]}`}>
            <a className='link--normal' >
              { value }
            </a>
          </Link>
        )
      }
    default:
      throw new Error(`unknown datatype ${datatype}`)
  }
}

function prepareAllHeaders (table) {
  const tableHeaders = Object.keys(table.headers)
  const headers = glossary.filter(term => tableHeaders.includes(term.id))
  if (headers.length !== tableHeaders.length) {
    throw new Error('Header(s) are missing from the i18n glossary')
  }
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
      <Tooltip dataTip={header.description} className={table.headers[header.id].type === 'number' ? 'table-align-right' : ''} style={{ justifyContent: table.headers[header.id].type === 'number' ? 'flex-end' : '' }}>{header.name}</Tooltip>
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
  const footerTotals = (props.totals) ? props.totals : ''
  const columns = columnSchemas.map(([key, columnSchema]) => {
    return {
      Header: headerDivs[key],
      accessor: columnSchema.accessor,
      disableSortBy: (props.notSortable) ? true : (key === 'button'),
      Cell: selectCellFormatter(columnSchema.type, props.idMap, props.countryMap, props.campaignMap),
      Footer: footerTotals[columnSchema.accessor]
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
  console.log(headers)

  return (
    <table>
      <thead>
        <tr>
          {
            headers.map(column =>
              column.canSort ? (
                <th
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  title={column.Header.props ? `Sort by ${column.Header.props.children}` : `Sort by ${column.Header}`}
                >
                  <a
                    className={(column.isSorted ? (column.isSortedDesc ? 'sort-desc' : 'sort-asc') : 'sort-none') + ' ' + (column.Cell.name === 'formattedNum' ? 'table-align-right' : '')}
                  >
                    {column.Header}
                  </a>
                </th>)
                : (
                  <th key={column.id} {...column.getHeaderProps()}>
                    <a className={column.Cell.name === 'formattedNum' ? 'table-align-right' : ''}>{column.Header}</a>
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
                      return <td {...cell.getCellProps()} className={!isNaN(cell.value) && parseInt(cell.value) >= 0 ? 'table-align-right' : ''}>
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
      <tfoot>
        <tr>
          {
            headers.map(column => (
              <td key={column.id} className={'table-align-right'}>{column.Footer}</td>
            ))
          }
        </tr>
      </tfoot>
    </table>
  )
}
