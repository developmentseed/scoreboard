import React from 'react'
import Table from '../common/Table'

const tableSchema = {
  'headers': {
    'name': { type: 'namelink', accessor: 'full_name' },
    'edits': { type: 'number', accessor: 'edits' },
    'changesets': { type: 'number', accessor: 'changesets' }
  },
  'columnOrder': ['name', 'edits', 'changesets'],
  'displaysTooltip': [
    'edits',
    'changesets'
  ]
}

export default function CountryUserTable (props) {
  const idMap = Object.assign(...props.users.map(({ osm_id, full_name }) => ({ [full_name]: osm_id })))
  return (
    <div className='widget'>
      <Table tableSchema={tableSchema} idMap={idMap} data={props.users} initialSortColumn='edits' />
    </div>
  )
}
