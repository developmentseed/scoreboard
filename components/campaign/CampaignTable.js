import React from 'react'
import Link from '../Link'
import { sortBy, prop } from 'ramda'
import { formatDecimal } from '../../lib/utils/format'
import CSVExport from '../../components/CSVExport'
import { Tooltip } from '../common/Tooltip'

const { selectHeaders, tableHeaderNames } = require('../../lib/utils/tableHeaderSelector')

export default function CampaignTable (props) {
  if (props.users.length === 0) {
    return <div />
  }
  const campaignTopStats = sortBy(prop('edits'), props.users).reverse()
    .map(user => ({
      ...user,
      km_roads_add_mod: user.km_roads_add + user.km_roads_mod,
      buildings_add_mod: user.buildings_add + user.buildings_mod,
      poi_add_mod: user.poi_add + user.poi_mod,
      km_railways_add_mod: user.km_railways_add + user.km_railways_mod,
      km_coastlines_add_mod: user.km_coastlines_add + user.km_coastlines_mod,
      km_waterways_add_mod: user.km_waterways_add + user.km_waterways_mod
    }))
  return (
    <div className='widget clearfix table-wrapper'>
      <table>
        <thead>
          <tr>
            {selectHeaders(tableHeaderNames.CAMPAIGN)
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
            campaignTopStats
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
                  <td>{formatDecimal(user.km_roads_add_mod)}</td>
                  <td>{formatDecimal(user.buildings_add_mod)}</td>
                  <td>{formatDecimal(user.poi_add_mod)}</td>
                  <td>{formatDecimal(user.km_railways_add_mod)}</td>
                  <td>{formatDecimal(user.km_coastlines_add_mod)}</td>
                  <td>{formatDecimal(user.km_waterways_add_mod)}</td>
                  <td>{formatDecimal(user.changeset_count)}</td>
                  <td>{formatDecimal(user.edit_count)}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
      <CSVExport filename={props.name} data={campaignTopStats} />
    </div>
  )
}
