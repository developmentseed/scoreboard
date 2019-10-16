import React from 'react'
import Link from '../Link'
import { formatDecimal, formatEditTimeDescription } from '../../lib/utils/format'
import { LoadingState } from '../common/LoadingState'
import { parse } from 'date-fns'
import { Tooltip } from '../common/Tooltip'

const { selectHeaders, tableHeaderNames } = require('../../lib/utils/tableHeaderSelector')

const UsersTable = ({ apiStatus, users }) => {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      content = (<div className='widget'>
        <table>
          <thead>
            <tr>
              {selectHeaders(tableHeaderNames.ALL_USERS)
                .map(header => (
                  header.displayTooltip ? (
                    <th key={header.id}>
                      <Tooltip dataTip={header.description_en}>{header.name_en}</Tooltip>
                    </th>
                  ) : (
                    <th key={header.id}>{header.name_en}</th>
                  )
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
      content = <LoadingState />
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
