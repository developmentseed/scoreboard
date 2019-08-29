import React from 'react'
import Link from '../Link'
import { sortBy, prop } from 'ramda'
import { formatDecimal } from '../../lib/utils/format'
import { CSVLink } from 'react-csv'

export default function CampaignTable (props) {
  if (props.users.length === 0) {
    return <div />
  }
  const campaignTopStats = sortBy(prop('edits'), props.users).reverse().map((user) => {
    const { counts, measurements } = user

    const {
      buildings_added,
      buildings_modified,
      pois_added,
      pois_modified
    } = counts

    const {
      road_km_added,
      road_km_modified,
      coastline_km_added,
      coastline_km_modified,
      waterway_km_added,
      waterway_km_modified,
      railline_km_added,
      railline_km_modified
    } = measurements

    return {
      ...user,
      road_km_total: road_km_added + road_km_modified,
      buildings_total: buildings_added + buildings_modified,
      pois_total: pois_added + pois_modified,
      railline_km_total: railline_km_added + railline_km_modified,
      coastline_km_total: coastline_km_added + coastline_km_modified,
      waterway_km_total: waterway_km_added + waterway_km_modified
    }
  })

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
            <th>Railways (Km)</th>
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
                  <td>{formatDecimal(user.road_km_total)}</td>
                  <td>{formatDecimal(user.buildings_total)}</td>
                  <td>{formatDecimal(user.pois_total)}</td>
                  <td>{formatDecimal(user.railline_km_total)}</td>
                  <td>{formatDecimal(user.coastline_km_total)}</td>
                  <td>{formatDecimal(user.waterway_km_total)}</td>
                  <td>{formatDecimal(user.changeset_count)}</td>
                  <td>{formatDecimal(user.edit_count)}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
      <CSVLink className='link--large' style={{ display: 'inline-block', float: 'right', marginTop: '2rem' }} data={campaignTopStats} filename={`${props.name} - Top 10 Participants.csv`} headers={[
        { label: 'Name', key: 'name' },
        { label: 'Roads (Km)', key: 'road_km_total' },
        { label: 'Buildings', key: 'buildings_total' },
        { label: 'Points of Interest', key: 'pois_total' },
        { label: 'Railways (Km)', key: 'railline_km_total' },
        { label: 'Coastlines (Km)', key: 'coastline_km_total' },
        { label: 'Waterways (Km)', key: 'waterway_km_total' },
        { label: 'Changesets', key: 'changeset_count' },
        { label: 'Edits', key: 'edit_count' }
      ]}>
        Export Data (CSV)
      </CSVLink>
    </div>
  )
}
