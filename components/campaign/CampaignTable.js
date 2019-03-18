import React from 'react'
import Link from '../Link'
import { sortBy, prop } from 'ramda'
import { formatDecimal } from '../../lib/utils/format'

export default function CampaignTable (props) {
  return (
    <div className='widget'>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Km of roads</th>
            <th>Buildings</th>
            <th>Points of Interest</th>
            <th>Km of Coastlines</th>
            <th>Km of Waterways</th>
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
                  <td>{formatDecimal(user.km_roads_add)}</td>
                  <td>{formatDecimal(user.buildings_add)}</td>
                  <td>{formatDecimal(user.poi_add)}</td>
                  <td>{formatDecimal(user.km_coastlines_add + user.km_coastlines_mod)}</td>
                  <td>{formatDecimal(user.km_waterways_add)}</td>
                  <td>{formatDecimal(user.edits)}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  )
}
