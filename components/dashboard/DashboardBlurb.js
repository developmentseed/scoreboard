import React from 'react'
import { formatDecimal, formatKm } from '../../lib/utils/format'
import { compareAsc, getYear } from 'date-fns'
import { head } from 'ramda'

export default function Blurb ({
  road_km_added,
  road_km_modified,
  buildings_added,
  buildings_modified,
  pois_added,
  pois_modified,
  waterway_km_added,
  waterway_km_modified,
  coastline_km_added,
  coastline_km_modified,
  railline_km_added,
  railline_km_modified,
  country_edits,
  day_edits,
  username
}) {
  let sentence = 'you have mapped'
  if (username) {
    sentence = `${username} has mapped`
  }
  const firstYearEdited = getYear(head(Object.keys(day_edits).sort(compareAsc)))

  const country_list = Object.keys(country_edits)
  let countryWord = 'countries'
  const countryLength = country_list.length
  if (countryLength === 1) {
    countryWord = 'country'
  }

  return <h2 className='header--small width--shortened list--block'>
    Since <mark>{firstYearEdited}</mark>, {sentence} <mark>{formatKm(road_km_added + road_km_modified)}</mark> of roads, <mark>{formatDecimal(buildings_added + buildings_modified)}</mark> buildings, <mark>{formatDecimal(pois_added + pois_modified)}</mark> Points of Interest, <mark>{formatKm(railline_km_added + railline_km_modified)}</mark> of railways, <mark>{formatKm(coastline_km_added + coastline_km_modified)}</mark> of coastlines, and <mark>{formatKm(waterway_km_added + waterway_km_modified)}</mark> of waterways in <mark>{country_list.length}</mark> <mark>{countryWord}</mark>.
  </h2>
}
