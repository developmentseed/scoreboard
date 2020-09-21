import React, { useEffect, useState } from 'react'
import { connect } from 'unistore/react'

import { actions } from '../lib/store'

import { LoadingState } from '../components/common/LoadingState'

const testBody = {
  startDate: '2020-12-30T00:00:00.000Z',
  endDate: '2020-12-30T00:00:00.000Z',
  binInterval: 'P1Y2M10DT2H30M',
  userIdsFilter: [
    10499924
  ],
  categoriesFilter: [
    'road_km',
    'coastline_km',
    'pois',
    'buildings'
  ],
  countriesFilter: [
    'AFG',
    'AUS',
    'USA',
    'USA-AK'
  ],
  hashtagsFilter: [
    '345_task_789',
    '345_task_111'
  ],
  hashtagPrefixFilter: [
    'ocelots_'
  ]
}

export function Reports (props) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    props.getUserTimeseries(testBody)
      .then(() => setLoading(false))
  }, [])

  if (loading) {
    return <LoadingState />
  }

  return (
    <div className='Reports'>
      <header className='header--internal '>
        <div className='row'>
          <h1 className='header--xlarge'>Reports</h1>
        </div>
      </header>
      <section className='text-body section-first--sm'>
        <div className='row'>
          <h2>Reportos</h2>
        </div>
      </section>
    </div>
  )
}

const Page = connect(['timeseries'], actions)(Reports)

export default Page
