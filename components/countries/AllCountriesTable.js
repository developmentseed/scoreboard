import React from 'react'
import Link from '../Link'
import { Tooltip } from '../common/Tooltip'
import { LoadingState } from '../common/LoadingState'

const { formatDecimal } = require('../../lib/utils/format')
const { selectHeaders, tableHeaderNames } = require('../../lib/utils/tableHeaderSelector')

export default function CountriesTable ({ apiStatus, countries }) {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      content = (<div className='widget'>
        <table>
          <thead>
            <tr>
              {selectHeaders(tableHeaderNames.ALL_COUNTRIES)
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
