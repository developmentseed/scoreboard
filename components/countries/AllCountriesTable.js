import React from 'react'
import Link from '../Link'
import { Tooltip } from '../common/Tooltip'

const tableHeaders = require('../../lib/page-text/table-headers.json')
const { formatDecimal } = require('../../lib/utils/format')

export default function CountriesTable ({ apiStatus, countries }) {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      content = (<div className='widget'>
        <table>
          <thead>
            <tr>
              {tableHeaders
                .filter(table => table.categories.includes('all-countries'))
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
