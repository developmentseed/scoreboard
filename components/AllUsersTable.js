import React from 'react'
import Link from './Link'
import { formatDecimal } from '../lib/utils/format'
import { distanceInWordsToNow, parse } from 'date-fns'
import countries from 'i18n-iso-countries'
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))

export default ({ apiStatus, users }) => {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      content = (<table>
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
                <td><Link href={`/users/${user.osm_id}`}><a className='link--normal'>{user.full_name}</a></Link></td>
                <td>{countries.getName(user.country, 'en')}</td>
                <td>{formatDecimal(user.edit_count)}</td>
                <td>{user.edit_count > 0 ? `${distanceInWordsToNow(parse(user.last_edit))} ago` : 'N/A'}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
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
