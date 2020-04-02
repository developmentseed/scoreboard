import React, { Fragment } from 'react'
import Link from '../../components/Link'
import { formatDecimal, formatKm } from '../../lib/utils/format'

/**
 * Display a blurb about team statistics. Only displays non-zero metrics,
 * so it can form various sentences like:
 *
 * "Since 2015, Team America has mapped 13,218 km of roads."
 * "Since 2018, merica has mapped 2000.0 km of roads, 12,312 buildings, 945
 * points of interest, and 23423.0 km of waterways."
 *
 * @param {number} buildingsMappedCount
 * @param {number} firstYearEdited
 * @param {number} poiCountMappedCount
 * @param {number} roadsKmMapped
 * @param {string} teamName
 * @param {number} waterwaysKmMapped
 * @param {number} coastlinesKmMapped
 * @returns {React.PureComponent}
 * @constructor
 */
export default function Blurb ({
  buildingsMappedCount,
  firstYearEdited,
  poiCountMappedCount,
  roadsKmMapped,
  teamName,
  waterwaysKmMapped,
  coastlinesKmMapped
}) {
  if (!firstYearEdited) {
    return <h2 className='header--small width--shortened list--block'>
      { teamName } has not made any mapping edits yet. Explore{' '}
      <Link href='/campaigns'>active campaigns</Link> to get started!
    </h2>
  }
  const fragmentList = []
  if (roadsKmMapped) {
    fragmentList.push(
        <><mark>{ formatKm(roadsKmMapped) }</mark> of roads</>
    )
  }
  if (buildingsMappedCount) {
    fragmentList.push(
        <><mark>{ formatDecimal(buildingsMappedCount) }</mark> buildings</>
    )
  }
  if (poiCountMappedCount) {
    fragmentList.push(
        <><mark>{ formatDecimal(poiCountMappedCount) }</mark> points of interest</>
    )
  }
  if (waterwaysKmMapped) {
    fragmentList.push(
        <><mark>{ formatKm(waterwaysKmMapped) }</mark> of waterways</>
    )
  }
  if (coastlinesKmMapped) {
    fragmentList.push(
        <><mark>{ formatKm(coastlinesKmMapped) }</mark> of coastlines</>
    )
  }
  return <h2 className='header--small width--shortened list--block'>
 
    { teamName } has mapped{' '}
    { fragmentList.map((fragment, i) => {
      return i === fragmentList.length - 1
        ? <Fragment key={i}>{ fragmentList.length > 1 ? 'and' : null } { fragment }.</Fragment>
        : <Fragment key={i}>{ fragment },{' '}</Fragment>
    }) }
  </h2>
}
