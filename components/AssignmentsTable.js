import React from 'react'
import Table from './common/Table'

const tableSchema = {
  'headers': {
    'name': { type: 'campaignlink', accessor: 'name' },
    'assigned-by': { type: 'string', accessor: 'source' },
    'priority': { type: 'string', accessor: 'priority' }
  },
  'columnOrder': ['name', 'assigned-by', 'priority'],
  'displaysTooltip': [
    'assigned-by',
    'priority'
  ]

}

export default ({ assignments, filter }) => {
  const campaignMap = Object.assign(...assignments.map(({ name, tm_id, tasker_id }) => ({ [name]: `${tasker_id}-${tm_id}` })))

  let assignmentsWithSource = assignments.map(assignment => Object.assign(assignment, { 'source': (filter === 'Teams' || filter === 'All') ? assignment.source : '' })
  )
  return (
    <div className='widget assignments-table'>
      <Table tableSchema={tableSchema} campaignMap={campaignMap} data={assignmentsWithSource} />
    </div>
  )
}
