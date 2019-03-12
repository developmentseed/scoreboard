import React from 'react'
import Link from './Link'

export default ({ assignments }) => {
  return (
    <div className='widget assignments-table'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Assigned By</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {
            assignments
              .map((assignment, idx) => {
                return (
                  <tr key={`assignment-${assignment.id}`}>
                    <td>
                      <Link href={`/campaigns/${assignment.campaign_hashtag}`}>
                        <a className='link--normal' >
                          {assignment.name}
                        </a>
                      </Link>
                    </td>
                    <td>
                      {assignment.assigned_by}
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
