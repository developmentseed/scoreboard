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
    <mark>{numParticipants}</mark> mappers in {' '}
    <mark>{name}</mark> are mapping {' '}
    <mark>{km_roads_add ? formatKm(km_roads_add) : '0'}</mark> of roads, {' '}
    <mark>{buildings_add ? formatDecimal(buildings_add) : '0'}</mark> buildings, {' '}
    <mark>{ poi_add ? formatDecimal(poi_add) : '0' }</mark> Points of Interest, {' '}
    <mark>{km_railways_add ? formatKm(km_railways_add) : '0'}</mark> railways, {' '}
    <mark>{km_coastlines_add && km_coastlines_mod ? formatKm(km_coastlines_add + km_coastlines_mod) : '0'}</mark> of coastlines, and {' '}
    <mark>{km_waterways_add ? formatKm(km_waterways_add) : '0'}</mark> of waterways.
  </h2>
}
