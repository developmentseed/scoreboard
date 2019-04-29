import React from 'react'
import Link from './Link'

export default ({ assignments, filter }) => {
  return (
    <div className='widget assignments-table'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            {(filter === 'Teams') ? <th>Assigned By</th> : ''}
            {(filter === 'All') ? <th>Source</th> : ''}
            <th>Priority</th>
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
