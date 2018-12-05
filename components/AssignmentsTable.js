import React from 'react'
import Link from './Link'

export default ({ assignments }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {
        assignments
          .reverse()
          .map((assignment, idx) => (
            <tr key={`assignment-${assignment.id}`}>
              <td>
                <Link href={`/campaigns/${assignment.id}`}>
                  <a className='link--normal' >
                    {assignment.name}
                  </a>
                </Link>
              </td>
            </tr>
          ))
      }
    </tbody>
  </table>
)
