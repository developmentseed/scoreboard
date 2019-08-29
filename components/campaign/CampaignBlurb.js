import React from 'react'
import { formatDecimal, formatKm } from '../../lib/utils/format'

export default function Blurb ({
  users,
  road_km_added,
  road_km_modified,
  buildings_added,
  buildings_modified,
  pois_added,
  pois_modified,
  railline_km_added,
  railline_km_modified,
  coastline_km_added,
  coastline_km_modified,
  waterway_km_added,
  waterway_km_modified
}) {
  if (users.length === 0) {
    return <h2 className='header--small width--shortened list--block'>
      <p>There are no stats available for this campaign.</p>
    </h2>
  }

  return <h2 className='header--small width--shortened list--block'>
    <mark>{users.length}</mark> mappers, mapping <mark>{formatKm(road_km_added + road_km_modified)}</mark> of roads, <mark>{formatDecimal(buildings_added + buildings_modified)}</mark> buildings, <mark>{formatDecimal(pois_added + pois_modified)}</mark> Points of Interest, <mark>{formatKm(railline_km_added + railline_km_modified)}</mark> of railways, <mark>{formatKm(coastline_km_added + coastline_km_modified)}</mark> of coastlines, and <mark>{formatKm(waterway_km_added + waterway_km_modified)}</mark> of waterways.
  </h2>
}
