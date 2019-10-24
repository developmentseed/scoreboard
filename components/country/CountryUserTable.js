import React from 'react'
import Link from '../Link'
import { sortBy, prop } from 'ramda'
import { formatDecimal } from '../../lib/utils/format'
import TableHeaders from '../common/TableHeaders'
import { tableHeaderNames } from '../../lib/enums'

export default function CountryUserTable (props) {
  return (
    <div className='widget'>
      <table>
        <thead>
          <tr>
            <TableHeaders tableName={tableHeaderNames.COUNTRY_USER} />
          </tr>
        </thead>
        <tbody>
          {
            sortBy(prop('edits'), props.users)
              .reverse()
              .map((user, idx) => (
                <tr key={user.osm_id}>
                  <td>{idx + 1}</td>
                  <td>
                    <Link href={`/users/${user.osm_id}`}>
                      <a className='link--normal' >
                        {user.full_name}
                      </a>
                    </Link>
                  </td>
                  <td>{formatDecimal(user.edits)}</td>
                  <td>{formatDecimal(user.changesets)}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  )
}
