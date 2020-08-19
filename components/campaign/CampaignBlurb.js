import React from 'react'
import { formatDecimal, formatKm } from '../../lib/utils/format'
/*
export default function Blurb ({
  data,
  km_roads_add,
  km_roads_mod,
  buildings_add,
  buildings_mod,
  poi_add,
  poi_mod,
  km_railways_add,
  km_railways_mod,
  km_coastlines_add,
  km_coastlines_mod,
  km_waterways_add,
  km_waterways_mod
}) {


  */
export default function Blurb (props) {
  console.log(props)

  const {
  data,
  km_roads_add,
  km_roads_mod,
  buildings_add,
  buildings_mod,
  poi_add,
  poi_mod,
  km_railways_add,
  km_railways_mod,
  km_coastlines_add,
  km_coastlines_mod,
  km_waterways_add,
  km_waterways_mod

  } = props
  if (data.length === 0) {
    return <h2 className='header--small width--shortened list--block'>
      <p>There are no stats available for this campaign.</p>
    </h2>
  }

  return <h2 className='header--small width--shortened list--block'>
    <mark>{data.length}</mark> mappers, mapping <mark>{formatKm(km_roads_add + km_roads_mod)}</mark> of roads, <mark>{formatDecimal(buildings_add + buildings_mod)}</mark> buildings, <mark>{formatDecimal(poi_add + poi_mod)}</mark> Points of Interest, <mark>{formatKm(km_railways_add + km_railways_mod)}</mark> of railways, <mark>{formatKm(km_coastlines_add + km_coastlines_mod)}</mark> of coastlines, and <mark>{formatKm(km_waterways_add + km_waterways_mod)}</mark> of waterways.
  </h2>
}
