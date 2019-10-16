import React from 'react'
import Link from './Link'
import { Tooltip } from './common/Tooltip'

const { selectHeaders } = require('../lib/utils/tableHeaderSelector')

export default ({ assignments, filter }) => {
  return (
    <div className='widget assignments-table'>
      <table>
        <thead>
          <tr>
            {selectHeaders(`admin-campaign-${filter.toLowerCase()}`)
              .map(header => (
                header.displayTooltip ? (
                  <th key={header.id}>
                    <Tooltip dataTip={header.description_en}>{header.name_en}</Tooltip>
                  </th>
                ) : (
                  <th key={header.id}>{header.name_en}</th>
                )
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
