import React, { useEffect, useState } from 'react'
import { connect } from 'unistore/react'

import { actions } from '../lib/store'
import { LoadingState } from '../components/common/LoadingState'
import Table from '../components/common/Table'
import { all } from 'ramda'

// separate data to match categories of tables
// display data in tables
// request data using options from drop down
// select columns to display - what should the default be? 

const measurementTableSchema = {
  'headers': {
    // 'name': { type: 'teamlink', accessor: 'name' },
    'road-km-added': { type: 'number', accessor: 'road_km_added' },
    'road-km-deleted': { type: 'number', accessor: 'road_km_deleted' },
    'road-km-modified': { type: 'number', accessor: 'road_km_modified' },
    'waterway-km-added': { type: 'number', accessor: 'waterway_km_added' },
    'waterway-km-deleted': { type: 'number', accessor: 'waterway_km_deleted' },
    'waterway-km-modified': { type: 'number', accessor: 'waterway_km_modified' },
    'coastline-km-added': { type: 'number', accessor: 'coastline_km_added' },
    'coastline-km-deleted': { type: 'number', accessor: 'coastline_km_deleted' },
    'coastline-km-modified': { type: 'number', accessor: 'coastline_km_modified' },
    'railline-km-added': { type: 'number', accessor: 'railline_km_added' },
    'railline-km-deleted': { type: 'number', accessor: 'railline_km_deleted' },
    'railline-km-modified': { type: 'number', accessor: 'railline_km_modified' }
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
    'railline-km-added',
    'railline-km-deleted',
    'railline-km-modified'
  ],
  'displaysTooltip': []
}


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
  const [bins, setBins] = useState(null)

  useEffect(() => {
    props.getUserTimeseries(testBody)
    .then(() => setLoading(false))
  }, [])

  const getTableData = schema => {
    fullMeasurementList.map(listItem => (
      Object.entries(listItem).reduce((prev, [key, val]) => {
        const headers = Object.values(schema.headers).map(val => val.accessor)
        headers.includes(key) ? {...prev, [key]: val} : prev
      }, {})
    ))
  }


  const allUserStats = props.timeseries.bins.map(bin => bin.userStatistics).flat()
  const fullMeasurementList = allUserStats.map(user => user.measurements)
  const measurementTableData = fullMeasurementList.map(listItem => (
    Object.entries(listItem).reduce((prev, [key, val]) => (
      getSchemaHeader(measurementTableSchema).includes(key) ? {...prev, [key]: val} : prev
    ), {})
  ))



  if (loading || !props.timeseries) {
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
          <Table tableSchema={measurementTableSchema} data={getTableData(measurementTableSchema)} />
          {/* <Table tableSchema={measurement2TableSchema} data={measurementTableData} /> */}
        </div>
      </section>
    </div>
  )
}

const Page = connect(['timeseries'], actions)(Reports)

export default Page
