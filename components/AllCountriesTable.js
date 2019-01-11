import React from 'react'
import Link from './Link'
const { formatDecimal } = require('../lib/utils/format')

export default ({ apiStatus, countries }) => {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      content = (<div className='widget'>
        <table>
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
                  <td><Link href={`/countries/${country.alpha2}`}><a className='link--normal'>{country.name}</a></Link></td>
                  <td>{formatDecimal(country.edit_count)}</td>
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
