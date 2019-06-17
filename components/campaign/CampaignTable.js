import React from 'react'
import Link from '../Link'
import { sortBy, prop } from 'ramda'
import { formatDecimal } from '../../lib/utils/format'
import { CSVLink } from 'react-csv'

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
      km_coastlines_add_mod: user.km_coastlines_add + user.km_coastlines_mod,
      km_waterways_add_mod: user.km_waterways_add + user.km_waterways_mod
    }))
  return (
    <div className='widget clearfix table-wrapper'>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Roads (Km)</th>
            <th>Buildings</th>
            <th>Points of Interest</th>
            <th>Coastlines (Km)</th>
            <th>Waterways (Km)</th>
            <th>Changesets</th>
            <th>Edits</th>
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
                  <td>{formatDecimal(user.km_coastlines_add_mod)}</td>
                  <td>{formatDecimal(user.km_waterways_add_mod)}</td>
                  <td>{formatDecimal(user.edits)}</td>
                  <td>{formatDecimal(user.editSum)}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
      <CSVLink className='link--large' style={{ display: 'inline-block', float: 'right', marginTop: '2rem' }} data={campaignTopStats} filename={`${props.name} - Top 10 Participants.csv`} headers={[
        { label: 'Name', key: 'name' },
        { label: 'Roads (Km)', key: 'km_roads_add_mod' },
        { label: 'Buildings', key: 'buildings_add_mod' },
        { label: 'Points of Interest', key: 'poi_add_mod' },
        { label: 'Coastlines (Km)', key: 'km_coastlines_add_mod' },
        { label: 'Waterways (Km)', key: 'km_waterways_add_mod' },
        { label: 'Changesets', key: 'edits' },
        { label: 'Edits', key: 'editSum' }
      ]}>
        Export Data (CSV)
      </CSVLink>
    </div>
  )
}
