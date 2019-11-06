import React from 'react'
import Link from '../Link'
import { useTable } from 'react-table'
import { sortBy, prop } from 'ramda'
import { formatDecimal } from '../../lib/utils/format'
import CSVExport from '../../components/CSVExport'
import { prepareAllHeaders } from '../common/TableHeaders'
import { tableHeaderNames } from '../../lib/enums'

export default function CampaignTable (props) {
  if (props.users.length === 0) {
    return <div />
  }

  let idMap = Object.assign(...props.users.map(({ uid, name }) => ({ [name]: uid })))

  const campaignTopStats = sortBy(prop('edits'), props.users).reverse()
    .map(user => ({
      ...user,
      km_roads_add_mod: user.km_roads_add + user.km_roads_mod,
      buildings_add_mod: user.buildings_add + user.buildings_mod,
      poi_add_mod: user.poi_add + user.poi_mod,
      km_railways_add_mod: user.km_railways_add + user.km_railways_mod,
      km_coastlines_add_mod: user.km_coastlines_add + user.km_coastlines_mod,
      km_waterways_add_mod: user.km_waterways_add + user.km_waterways_mod
    }))

  const headerDivs = prepareAllHeaders(tableHeaderNames.CAMPAIGN)
  const formattedNum = ({ cell: { value } }) => formatDecimal(value)
  const { headers, rows, prepareRow } = useTable({
    columns: [
      {
        Header: headerDivs['name'],
        accessor: 'name',
        Cell: ({ cell: { value } }) => (
          <Link href={`/users/${idMap[value]}`}>
            <a className='link--normal' >
              { value }
            </a>
          </Link>
        )
      },
      {
        Header: headerDivs['roads'],
        accessor: 'km_roads_add_mod',
        Cell: formattedNum
      },
      {
        Header: headerDivs['buildings'],
        accessor: 'buildings_add_mod',
        Cell: formattedNum
      },
      {
        Header: headerDivs['poi'],
        accessor: 'poi_add_mod',
        Cell: formattedNum
      },
      {
        Header: headerDivs['railways'],
        accessor: 'km_coastlines_add_mod',
        Cell: formattedNum
      },
      {
        Header: headerDivs['coastlines'],
        accessor: 'km_coastlines_add_mod',
        Cell: formattedNum
      },
      {
        Header: headerDivs['waterways'],
        accessor: 'km_waterways_add_mod',
        Cell: formattedNum
      },
      {
        Header: headerDivs['changeset'],
        accessor: 'changeset_count',
        Cell: formattedNum
      },
      {
        Header: headerDivs['edits'],
        accessor: 'edit_count',
        Cell: formattedNum
      }
    ],
    data: campaignTopStats
  })

  return (

    <div className='widget clearfix table-wrapper'>
      <table>
        <thead>
          <tr>
            {
              headers.map(column =>
                <th {...column.getHeaderProps()}>{column.Header}</th>
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
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })
                    }
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
      <CSVExport filename={props.name} data={campaignTopStats} />
    </div>
  )
}
