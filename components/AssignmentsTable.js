import React from 'react'
import Link from './Link'

export default ({ assignments, filter }) => {
  return (
    <div className='widget assignments-table'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>{(filter === 'teams') ? 'Assigned By' : 'Source'}</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {
            assignments
              .map((assignment) => {
                return (
                  <tr key={`assignment-${assignment.id}`}>
                    <td>
                      <Link href={`/campaigns/${assignment.tasker_id}-${assignment.tm_id}`}>
                        <a className='link--normal' >
                          {assignment.name}
                        </a>
                      </Link>
                    </td>
                    <td>
                      {(filter === 'userContributions') ? assignment.source : assignment.assigned_by}
                    </td>
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
