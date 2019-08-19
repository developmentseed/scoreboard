import React from 'react'
import { formatDecimal, formatKm } from '../../lib/utils/format'

export default function Blurb ({
  numParticipants,
  km_roads_add,
  buildings_add,
  poi_add,
  km_railways_add,
  km_waterways_add,
  km_coastlines_add,
  km_coastlines_mod,
  name
}) {
  return <h2 className='header--small width--shortened list--block'>
    <mark>{numParticipants}</mark> mappers in <mark>{name}</mark> are mapping <mark>{formatKm(km_roads_add)}</mark> of roads, <mark>{formatDecimal(buildings_add)}</mark> buildings, <mark>{formatDecimal(poi_add)}</mark> Points of Interest,<mark>{formatKm(km_railways_add)}</mark> railways,<mark>{formatKm(km_coastlines_add + km_coastlines_mod)}</mark> of coastlines, and <mark>{formatKm(km_waterways_add)}</mark> of waterways.
  </h2>
}
