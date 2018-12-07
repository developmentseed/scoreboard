import React from 'react'
import Link from './Link'

export default ({ assignments }) => {
  return (
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
            .map((assignment, idx) => {
              return (
                <tr key={`assignment-${assignment.id}`}>
                  <td>
                    <Link href={`/campaigns/${assignment.campaign.campaign_hashtag}`}>
                      <a className='link--normal' >
                        {assignment.campaign.name}
                      </a>
                    </Link>
                  </td>
                </tr>
              )
            })
        }
      </tbody>
    </table>
  )
}
