import React from 'react'
import Link from './Link'
import TableHeaders from './common/TableHeaders'

export default ({ assignments, filter }) => {
  return (
    <div className='widget assignments-table'>
      <table>
        <thead>
          <tr>
            <TableHeaders tableName={`admin-campaign-${filter.toLowerCase()}`} />
          </tr>
        </thead>
        <tbody>
          {
            assignments
              .map((assignment) => {
                return (
                  <tr key={`assignment-${assignment.source}-${assignment.name}`}>
                    <td>
                      <Link href={`/campaigns/${assignment.tasker_id}-${assignment.tm_id}`}>
                        <a className='link--normal' >
                          {assignment.name}
                        </a>
                      </Link>
                    </td>
                    {
                      (filter === 'Teams' || filter === 'All') ? <td>{assignment.source}</td> : ''
                    }
                    <td>
                      {assignment.priority}
                    </td>
                  </tr>
                )
              })
          }
        </tbody>
      </table>
    </div>
  )
}
