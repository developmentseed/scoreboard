import React from 'react'
import Link from './Link'
import { Tooltip } from './common/Tooltip'

const tableHeaders = require('../lib/page-text/table-headers.json')
const terms = require('../lib/terms.json')

export default ({ assignments, filter }) => {
  return (
    <div className='widget assignments-table'>
      <table>
        <thead>
          <tr>
            {tableHeaders
              .filter(table => table.categories.includes(`admin-campaign-${filter.toLowerCase()}`))
              .map(header => (
                <th>
                  <Tooltip dataTip={header.description_en}>{header.name_en}</Tooltip>
                </th>
              ))}
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
