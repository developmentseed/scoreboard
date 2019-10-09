import React from 'react'
import Link from '../Link'
import { formatDecimal, formatEditTimeDescription } from '../../lib/utils/format'
import { parse } from 'date-fns'
import { Tooltip } from '../common/Tooltip'

const tableHeaders = require('../../lib/page-text/table-headers.json')

const UsersTable = ({ apiStatus, users }) => {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      content = (<div className='widget'>
        <table>
          <thead>
            <tr>
              {tableHeaders
                .filter(table => table.categories.includes('all-users'))
                .map(header => (
                  <th>
                    {header.name_en}
                    <Tooltip dataTip={header.description_en} />
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => (
                <tr key={user.osm_id}>
                  <td>{((user.edit_count > 0) ? user.rank : 'N/A')}</td>
                  <td><Link href={`/user?id=${user.osm_id}`} as={`/users/${user.osm_id}`}><a className='link--normal'>{user.full_name}</a></Link></td>
                  <td>{user.country}</td>
                  <td>{formatDecimal(user.edit_count)}</td>
                  <td>{user.edit_count > 0 ? formatEditTimeDescription(parse(user.last_edit)) : 'N/A'}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      )
      break
    case 'LOADING':
      content = <div>Loading...</div>
      break

    case 'ERROR':
      content = <div>Error loading records</div>
      break
    default:
      content = <div />
  }
  return content
}
export default UsersTable
