import React from 'react'
import Link from '../Link'
import TableHeaders from '../common/TableHeaders'
import { LoadingState } from '../common/LoadingState'
import { tableHeaderNames } from '../../lib/enums'

const { formatDecimal } = require('../../lib/utils/format')

export default function CountriesTable ({ apiStatus, countries }) {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      content = (<div className='widget'>
        <table>
          <thead>
            <tr>
              <TableHeaders tableName={tableHeaderNames.ALL_COUNTRIES} />
            </tr>
          </thead>
          <tbody>
            {
              countries.map(country => (
                <tr key={country.code}>
                  <td><Link href={`/country?code=${country.code}`} as={`/countries/${country.code}`}><a className='link--normal'>{country.name}</a></Link></td>
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
