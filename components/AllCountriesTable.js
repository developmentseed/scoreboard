import React from 'react'
import Link from './Link'
const { formatDecimal } = require('../lib/utils/format')

export default ({ apiStatus, countries }) => {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      content = (<table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Edits</th>
          </tr>
        </thead>
        <tbody>
          {
            countries.map(country => (
              <tr key={country.id}>
                <td><Link href={`/countries/${country.code}`}><a className='link--normal'>{country.name}</a></Link></td>
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
