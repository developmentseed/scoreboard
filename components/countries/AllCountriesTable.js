import React from 'react'
import { LoadingState } from '../common/LoadingState'
import Table from '../common/Table'

const tableSchema = {
  'headers': {
    'name': { type: 'countrylink', accessor: 'name' },
    'total-edits': { type: 'number', accessor: 'edit_count' }
  },
  'columnOrder': [ 'name', 'total-edits' ],
  'displaysTooltip': [ 'total-edits' ]
}

export default function CountriesTable ({ apiStatus, countries }) {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      const countryMap = Object.assign(...countries.map(({ code, name }) => ({ [name]: code })))
      content = (<div className='widget'>
        <Table countryMap={countryMap} tableSchema={tableSchema} data={countries} initialSortColumn='edit_count' notSortable />
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
