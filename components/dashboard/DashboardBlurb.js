import React from 'react'
import { formatDecimal, formatKm } from '../../lib/utils/format'
import { compareAsc, getYear } from 'date-fns'
import { head } from 'ramda'

export default function Blurb ({
  km_roads_add,
  km_roads_mod,
  buildings_add,
  buildings_mod,
  poi_add,
  poi_mod,
  km_railways_add,
  km_railways_mod,
  km_waterways_add,
  km_waterways_mod,
  km_coastlines_add,
  km_coastlines_mod,
  country_list,
  edit_times,
  username,
  project
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
  if (isNaN(firstYearEdited)) {
    return <h2 className='header--small width--shortened list--block'>{(username) ? `${username} has` : 'You have'} not made any mapping edits in {project} yet. Explore <a href='/campaigns'>active campaigns</a> to get started!</h2>
  } else {
    return <h2 className='header--small width--shortened list--block'>
      Since <mark>{firstYearEdited}</mark>, {sentence} <mark>{formatKm(km_roads_add + km_roads_mod)}</mark> of roads, <mark>{formatDecimal(buildings_add + buildings_mod)}</mark> buildings, <mark>{formatDecimal(poi_add + poi_mod)}</mark> Points of Interest, <mark>{formatKm(km_railways_add + km_railways_mod)}</mark> of railways, <mark>{formatKm(km_coastlines_add + km_coastlines_mod)}</mark> of coastlines, and <mark>{formatKm(km_waterways_add + km_waterways_mod)}</mark> of waterways in <mark>{country_list.length}</mark> <mark>{countryWord}</mark>.
    </h2>
  }
}
