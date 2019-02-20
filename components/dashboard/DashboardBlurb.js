import React from 'react'
import { formatDecimal, formatKm } from '../../lib/utils/format'
import { compareAsc, getYear } from 'date-fns'
import { head } from 'ramda'

export default function Blurb ({
  km_roads_add,
  buildings_add,
  poi_add,
  km_waterways_add,
  km_coastlines_add,
  km_coastlines_mod,
  country_list,
  edit_times,
  username
}) {
  let sentence = 'you have mapped'
  if (username) {
    sentence = `${username} has mapped`
  }
  const firstYearEdited = getYear(head(edit_times.map(t => t.day).sort(compareAsc)))

  let countryWord = 'countries'
  const countryLength = country_list.length
  if (countryLength === 1) {
    countryWord = 'country'
  }

  return <h2 className='header--small width--shortened list--block'>
    Since <mark>{firstYearEdited}</mark>, {sentence} <mark>{formatKm(km_roads_add)}</mark> of roads, <mark>{formatDecimal(buildings_add)}</mark> buildings, <mark>{formatDecimal(poi_add)}</mark> Points of Interest, <mark>{formatKm(km_coastlines_add + km_coastlines_mod)}</mark> of coastlines, and <mark>{formatKm(km_waterways_add)}</mark> of waterways in <mark>{country_list.length}</mark> <mark>{countryWord}</mark>.
  </h2>
}
