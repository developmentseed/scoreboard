import React from 'react'
import { formatDecimal, formatKm } from '../../lib/utils/format'

export default function Blurb ({
  users,
  km_roads_add,
  buildings_add,
  poi_add,
  km_waterways_add,
  km_coastline_add,
  km_coastline_mod,
  name
}) {
  return <h2 className='header--small width--shortened list--block'>
    <mark>{users.length}</mark> mappers in <mark>{name}</mark> are mapping <mark>{formatKm(km_roads_add)}</mark> of roads, <mark>{formatDecimal(buildings_add)}</mark> buildings, <mark>{formatDecimal(poi_add)}</mark> Points of Interest, <mark>{formatKm(km_coastline_add + km_coastline_mod)}</mark> of coastlines, and <mark>{formatKm(km_waterways_add)}</mark> of waterways.
  </h2>
}
