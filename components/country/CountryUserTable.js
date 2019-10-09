import React from 'react'
import Link from '../Link'
import { sortBy, prop } from 'ramda'
import { formatDecimal } from '../../lib/utils/format'
import { Tooltip } from '../common/Tooltip'

const tableHeaders = require('../../lib/page-text/table-headers.json')

export default function CountryUserTable (props) {
  return (
    <div className='widget'>
      <table>
        <thead>
          <tr>
            {tableHeaders
              .filter(table => table.categories.includes('country-user'))
              .map(header => (
                <th>
                  {header.name_en}
                  <Tooltip dataTip={header.description_en} />
                </th>
              ))}
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
                  <td>{formatDecimal(user.changesets)}</td>
                  <td>{formatDecimal(user.edits)}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  )
}
