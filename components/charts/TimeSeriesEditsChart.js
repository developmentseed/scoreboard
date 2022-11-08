import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const chartCrosswalk = {
  'km_roads_add_mod': 0,
  'buildings_add_mod': 1,
  'poi_add_mod': 2,
  'km_railways_add_mod': 3,
  'km_waterways_add_mod': 4,
  'km_coastlines_add_mod': 5
}

const MAX_USERS_CHART = 20

// builds log scale inclusive of largest statistic
function getLog10Scale (maxInteger) {
  const linearScale = []
  const logScale = {}

  let i = 0
  let next = 0
  while (next < maxInteger) {
    next = Math.pow(10, i)
    linearScale.push(i)
    logScale[i] = next
    ++i
  }
  return [linearScale, logScale]
}

export default function TimeSeriesEditsChart ({ userData }) {
  const topUsers = userData.sort((a, b) => (a.edit_count > b.edit_count ? -1 : 1)).slice(0, MAX_USERS_CHART).reverse()

  const { keys, data } = topUsers.reduce((chartData, topUsers) => {
    chartData.keys[topUsers.name] = true
    Object.keys(topUsers).forEach((k) => {
      if (topUsers[k] && chartCrosswalk.hasOwnProperty(k)) {
        chartData.data[chartCrosswalk[k]][topUsers.name] =
        topUsers[k] + (chartData.data[chartCrosswalk[k]][topUsers.name] || 0)
      }
    })
    return chartData
  }, {
    keys: {},
    data: [
      { type: 'Roads (KM)' },
      { type: 'Buildings' },
      { type: 'POIs' },
      { type: 'Railways (KM)' },
      { type: 'Waterways (KM)' },
      { type: 'Coastlines (KM)' }
    ]
  })

  const userKeys = Object.keys(keys)
  let maxInteger = 0

  for (let d of data) {
    for (const k of userKeys) {
      maxInteger += d[k] || 0
      d[k + '_log'] = d[k]
      d[k] = Math.log10(d[k])
      if (d[k] < 0) d[k] = 0 // cut off nums > 0 for now.
    }
  }

  const [linearScale, logScale] = getLog10Scale(maxInteger)

  return (
    (topUsers && topUsers.length)
      ? <>
        <h4 className='header--small'>Top {topUsers.length} Users</h4>
        <ResponsiveBar
          width={800}
          data={data}
          maxValue={linearScale[linearScale.length - 1]}
          enableLabel={false}
          keys={userKeys}
          indexBy='type'
          margin={{ top: 50, right: 130, bottom: 50, left: 50 }}
          valueScale={{ type: 'linear' }}
          gridYValues={linearScale}
          axisLeft={{
            tickValues: linearScale,
            format: (v) => logScale[v]
          }}
          tooltip={(d) => {
            return <div>{`${d.id}: ${d.data[d.id + '_log'].toLocaleString('en-US')} ${d.indexValue}`}</div>
          }}
          legends={[
            {
              anchor: 'bottom-right',
              dataFrom: 'keys',
              direction: 'column',
              itemHeight: 20,
              itemWidth: 110,
              toggleSerie: true,
              translateX: 120
            }
          ]}
          groupMode='grouped'
          colors={['#22BDC1', '#8BC544', '#334A42', '#5657C2', '#4FCA9C', '#301F11']}
        />
      </> : <></>
  )
}
