import React from 'react'
import Link from './Link'
import { sortBy, prop } from 'ramda'
import { formatDecimal } from '../lib/utils/format'

export default (props) => (
  <div className='widget'>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Changesets</th>
        </tr>
      </thead>
      <tbody>
        {
          sortBy(prop('edits'), props.users)
            .reverse()
            .map((user, idx) => (
              <tr key={user.uid}>
                <td>{idx + 1}</td>
                <td>
                  <Link href={`/users/${user.uid}`}>
                    <a className='link--normal' >
                      {user.name}
                    </a>
                  </Link>
                </td>
                <td>{formatDecimal(user.edits)}</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  </div>
)
