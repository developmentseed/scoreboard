import React from 'react'
import Link from '../../components/Link'
import { formatDecimal, formatKm } from '../../lib/utils/format'

export default function Blurb ({
  buildingsMappedCount,
  editTimes,
  firstYearEdited,
  poiCountMappedCount,
  roadsKmMapped,
  teamName,
  waterwaysKmMapped
}) {
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
  if (!firstYearEdited) {
    return <h2 className='header--small width--shortened list--block'>
      { teamName } has not made any mapping edits yet. Explore{' '}
      <Link href='/campaigns'>active campaigns</Link> to get started!
    </h2>
  }
  return <h2 className='header--small width--shortened list--block'>
    Since <mark>{firstYearEdited}</mark>,{' '}
    { teamName } has mapped{' '}
    { fragmentList.map((fragment, i) => {
      return i === fragmentList.length - 1
        ? <> { fragmentList.length > 1 ? 'and' : null } { fragment }.</>
        : <>{ fragment },{' '}</>
    }) }
  </h2>
}
