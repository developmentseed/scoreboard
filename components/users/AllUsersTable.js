import React from 'react'
import { LoadingState } from '../common/LoadingState'
import Table from '../common/Table'

const tableSchema = {
  'headers': {
    'rank': { type: 'string', accessor: 'rank' },
    'name': { type: 'namelink', accessor: 'full_name' },
    'country': { type: 'string', accessor: 'country' },
    'total-edits': { type: 'number', accessor: 'edit_count' },
    'last-edit': { type: 'date', accessor: 'last_edit' }
  },
  'columnOrder': [
    'rank',
    'name',
    'country',
    'total-edits',
    'last-edit'
  ],
  'displaysTooltip': [
    'rank',
    'total-edits',
    'last-edit'
  ]
}

const UsersTable = ({ apiStatus, users }) => {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      console.log(users)
      let idMap = Object.assign(users.map(({ osm_id, full_name }) => ({ [full_name]: osm_id })))
      content = (<div className='widget'>
        <Table idMap={idMap} tableSchema={tableSchema} data={users} initalSortColumn='edit_count' />
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
