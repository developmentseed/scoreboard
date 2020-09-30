import React, { useEffect, useState } from 'react'
import { connect } from 'unistore/react'

import { actions } from '../lib/store'
import { LoadingState } from '../components/common/LoadingState'
import Table from '../components/common/Table'
import { all } from 'ramda'

const measurementTableSchema = {
  'headers': {
    'name': { type: 'teamlink', accessor: 'name' },
    'road-km-added': { type: 'number', accessor: 'road_km_added' },
    'road-km-deleted': { type: 'number', accessor: 'road_km_deleted' },
    'road-km-modified': { type: 'number', accessor: 'road_km_modified' },
    'waterway-km-added': { type: 'number', accessor: 'waterway_km_added' },
    'waterway-km-deleted': { type: 'number', accessor: 'waterway_km_deleted' },
    'waterway-km-modified': { type: 'number', accessor: 'waterway_km_modified' },
    'coastline-km-added': { type: 'number', accessor: 'coastline_km_added' },
    'coastline-km-deleted': { type: 'number', accessor: 'coastline_km_deleted' },
    'coastline-km-modified': { type: 'number', accessor: 'coastline_km_modified' },
    'railine-km-added': { type: 'number', accessor: 'railine_km_added' },
    'railine-km-deleted': { type: 'number', accessor: 'railine_km_deleted' },
    'railine-km-modified': { type: 'number', accessor: 'railine_km_modified' }
  },
  columnOrder: [
    'name',
    'road-km-added',
    'road-km-deleted',
    'road-km-modified',
    'waterway-km-added',
    'waterway-km-deleted',
    'waterway-km-modified',
    'coastline-km-added',
    'coastline-km-deleted',
    'coastline-km-modified',
    'railine-km-added',
    'railine-km-deleted',
    'railine-km-modified'
  ]
}

const measurements = [
  'road_km_added',
  'road_km_deleted',
  'road_km_modified',
  'waterway_km_added',
  'waterway_km_deleted',
  'waterway_km_modified',
  'coastline_km_added',
  'coastline_km_deleted',
  'coastline_km_modified',
  'railine_km_added',
  'railine_km_deleted',
  'railine_km_modified'
]

const measurement2TableSchema = {
  'headers': {
    'name': { type: 'teamlink', accessor: 'name' },
    'landuse-km2-added': { type: 'number', accessor: 'landuse_km2_added' },
    'landuse-km2-deleted': { type: 'number', accessor: 'landuse_km2_deleted' },
    'landuse-km2-modified': { type: 'number', accessor: 'landuse_km2_modified' },
    'natural-km2-added': { type: 'number', accessor: 'natural_km2_added' },
    'natural-km2-deleted': { type: 'number', accessor: 'natural_km2_deleted' },
    'natural-km2-modified': { type: 'number', accessor: 'naturanatural_km2_modifiedMod' }
  },
  columnOrder: [
    'name',
    'landuse-km2-added',
    'landuse-km2-deleted',
    'landuse-km2-modified',
    'natural-km2-added',
    'natural-km2-deleted',
    'natural-km2-modified'
  ]
}

const measurements2 = [
  'landuse-km2-added',
  'landuse-km2-deleted',
  'landuse-km2-modified',
  'natural-km2-added',
  'natural-km2-deleted',
  'natural-km2-modified'
]

const countTableSchema = {
  'headers': {
    'name': { type: 'teamlink', accessor: 'name' },
    'roads-added': { type: 'number', accessor: 'roadsAdd' },
    'roads-deleted': { type: 'number', accessor: 'roadsDel' },
    'roads-modified': { type: 'number', accessor: 'roadsMod' },
    'waterways-added': { type: 'number', accessor: 'waterwaysAdd' },
    'waterways-deleted': { type: 'number', accessor: 'waterwaysDel' },
    'waterways-modified': { type: 'number', accessor: 'waterwaysMod' },
    'coastlines-added': { type: 'number', accessor: 'coastlinesAdd' },
    'coastlines-deleted': { type: 'number', accessor: 'coastlinesDel' },
    'coastlines-modified': { type: 'number', accessor: 'coastlinesMod' },
    'buildings-added': { type: 'number', accessor: 'buildingsAdd' },
    'buildings-deleted': { type: 'number', accessor: 'buildingsDel' },
    'buildings-modified': { type: 'number', accessor: 'buildingsMod' },
    'railway-features-added': { type: 'number', accessor: 'railwayFeaturesAdd' },
    'railway-features-deleted': { type: 'number', accessor: 'railwayFeaturesDel' },
    'railway-features-modified': { type: 'number', accessor: 'railwayFeaturesMod' },
    'pois-added': { type: 'number', accessor: 'poisAdd' },
    'pois-deleted': { type: 'number', accessor: 'poisDel' },
    'pois-modified': { type: 'number', accessor: 'poisMod' },
    'landuse-added': { type: 'number', accessor: 'landuseAdd' },
    'landuse-deleted': { type: 'number', accessor: 'landuseDel' },
    'landuse-modified': { type: 'number', accessor: 'landuseMod' },
    'natural-added': { type: 'number', accessor: 'naturalAdd' },
    'natural-deleted': { type: 'number', accessor: 'naturalDel' },
    'natural-modified': { type: 'number', accessor: 'naturalMod' },
    'other-added': { type: 'number', accessor: 'otherAdd' },
    'other-deleted': { type: 'number', accessor: 'otherDel' },
    'other-modified': { type: 'number', accessor: 'otherMod' }
  },
  columnOrder: [
    'name',
    'roads-added',
    'roads-deleted',
    'roads-modified',
    'waterways-added',
    'waterways-deleted',
    'waterways-modified',
    'coastlines-added',
    'coastlines-deleted',
    'coastlines-modified',
    'buildings-added',
    'buildings-deleted',
    'buildings-modified',
    'railway-features-added',
    'railway-features-deleted',
    'railway-features-modified',
    'pois-added',
    'pois-deleted',
    'pois-modified',
    'landuse-added',
    'landuse-deleted',
    'landuse-modified',
    'natural-added',
    'natural-deleted',
    'natural-modified',
    'other-added',
    'other-deleted',
    'other-modified'
  ]
}

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
  const allUserStats = props.timeseries.bins.map(bin => bin.userStatistics).flat()
  const fullMeasurementList = allUserStats.map(user => user.measurements)
  const measurementTableData = fullMeasurementList.map(listItem => {
    return Object.keys(listItem)
      .filter(measurementKey => {
        console.log('measurements', measurements.includes(measurementKey))
        measurements.includes(measurementKey)
      })
      // .reduce((obj, key) => {
      //   return {
      //     ...obj,
      //     [key]: listItem[key]
      //   }
      // }, {})
  })

  console.log('measurementTableData', measurementTableData)
  return (
    <div className='Reports'>
      <header className='header--internal '>
        <div className='row'>
          <h1 className='header--xlarge'>Reports</h1>
        </div>
      </header>
      <section className='text-body section-first--sm'>
        <div className='row'>
          {/* <Table tableSchema={measurementTableSchema} data={measurementTableData} /> */}
        </div>
      </section>
    </div>
  )
}

const Page = connect(['timeseries'], actions)(Reports)

export default Page
