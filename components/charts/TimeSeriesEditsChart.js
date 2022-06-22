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

export default function TimeSeriesEditsChart ({ userData }) {
  const { keys, data } = userData.reduce((chartData, userData) => {
    chartData.keys[userData.name] = true
    Object.keys(userData).forEach((k) => {
      if (userData[k] && chartCrosswalk.hasOwnProperty(k)) {
        chartData.data[chartCrosswalk[k]][userData.name] =
          userData[k] + (chartData.data[chartCrosswalk[k]][userData.name] || 0)
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
  return (
    (userData && userData.length)
      ? <ResponsiveBar
        width={800}
        data={data}
        enableLabel={false}
        keys={userKeys}
        indexBy='type'
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'symlog' }}
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
      /> : <></>
  )
}
