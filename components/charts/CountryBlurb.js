import React from 'react'
import { formatDecimal, formatKm } from '../../lib/utils/format'

export default function Blurb ({
  numParticipants,
  road_km_added,
  buildings_added,
  pois_added,
  railline_km_added,
  waterway_km_added,
  coastline_km_added,
  coastline_km_modified,
  name
}) {
  return <h2 className='header--small width--shortened list--block'>
    <mark>{numParticipants}</mark> mappers in <mark>{name}</mark> are mapping <mark>{formatKm(road_km_added)}</mark> of roads, <mark>{formatDecimal(buildings_added)}</mark> buildings, <mark>{formatDecimal(pois_added)}</mark> Points of Interest,<mark>{formatKm(railline_km_added)}</mark> railways, <mark>{formatKm(coastline_km_added + coastline_km_modified)}</mark> of coastlines, and <mark>{formatKm(waterway_km_added)}</mark> of waterways.
  </h2>
}
