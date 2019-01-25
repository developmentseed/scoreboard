import React from 'react'
import { formatDecimal, formatKm } from '../../lib/utils/format'

export default function Blurb ({
  users,
  km_roads_add,
  buildings_add,
  poi_add,
  km_waterways_add,
  km_coastlines_add,
  km_coastlines_mod
}) {
  return <h2 className='header--medium list--block'>
    {`${users.length} mappers, mapping
    ${formatKm(km_roads_add)} of roads,
    ${formatDecimal(buildings_add)} buildings,
    ${formatDecimal(poi_add)} Points of Interest,
    ${formatKm(km_coastlines_add + km_coastlines_mod)} of coastlines, and
    ${formatKm(km_waterways_add)} of waterways.`}
  </h2>
}
