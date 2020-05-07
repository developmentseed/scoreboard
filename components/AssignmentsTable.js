import React from 'react'
import Table from './common/Table'
import { fromPairs } from 'ramda'

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
  let campaignMap = {}
  if (assignments.length) {
    campaignMap = fromPairs(assignments.map(({ name, tasker_id: taskerId, tm_id: taskingManagerId }) => {
      return [name, { taskerId, taskingManagerId }]
    }))
  }
  let assignmentsWithSource = assignments.map(assignment => Object.assign(assignment, { 'source': (filter === 'Teams' || filter === 'All') ? assignment.source : '' })
  )
  return (
    <div className='widget assignments-table'>
      <Table tableSchema={tableSchema} campaignMap={campaignMap} data={assignmentsWithSource} />
    </div>
  )
}
