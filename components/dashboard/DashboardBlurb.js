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

  return <h2 className='header--medium list--block'>
    {`Since ${firstYearEdited}, ${sentence} 
    ${formatKm(km_roads_add)} of roads,
    ${formatDecimal(buildings_add)} buildings,
    ${formatDecimal(poi_add)} Points of Interest,
    ${formatKm(km_coastlines_add + km_coastlines_mod)} of coastlines, and
    ${formatKm(km_waterways_add)} of waterways in ${country_list.length} ${countryWord}.`
    }
  </h2>
}
