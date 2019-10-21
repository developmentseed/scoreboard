import React from 'react'
import Link from '../Link'
import { formatDecimal, formatEditTimeDescription } from '../../lib/utils/format'
import { LoadingState } from '../common/LoadingState'
import { parse } from 'date-fns'

const UsersTable = ({ apiStatus, users }) => {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      content = (<div className='widget'>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Country</th>
              <th>Total Edits</th>
              <th>Last Edit</th>
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
