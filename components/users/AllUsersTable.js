import React from 'react'
import { LoadingState } from '../common/LoadingState'
import Table from '../common/Table'

const tableSchema = {
  'headers': {
    'rank': { type: 'string', accessor: 'rank' },
    'name': { type: 'namelink', accessor: 'full_name' },
    'country': { type: 'string', accessor: 'country' },
    'user-tag': { type: 'string', accessor: 'user_tag' },
    'total-edits': { type: 'number', accessor: 'edit_count' },
    'last-edit': { type: 'date', accessor: 'last_edit' }
  },
  'columnOrder': [
    'rank',
    'name',
    'country',
    'user-tag',
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
      let idMap = {}
      if (users.length) {
        idMap = Object.assign(...users.map(({ osm_id, full_name }) => ({ [full_name]: osm_id })))
      }
      content = (<div className='widget'>
        <Table idMap={idMap} tableSchema={tableSchema} data={users} notSortable />
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
