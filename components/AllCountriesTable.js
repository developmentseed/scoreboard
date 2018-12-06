import React from 'react'
import Link from './Link'
import { formatDecimal } from '../lib/utils/format'

export default ({ apiStatus, countries }) => {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      content = (<table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Total Edits</th>
          </tr>
        </thead>
        <tbody>
          {
            countries.map(country => (
              <tr key={country.id}>
                <td>{(country.rank)}</td>
                <td><Link href={`/countries/${country.alpha2}`}><a className='link--normal'>{country.name}</a></Link></td>
                <td>{formatDecimal(country.edit_count)}</td>
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
