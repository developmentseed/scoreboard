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


export default function TimeSeriesEditsChart ({userData}) {
  const {keys, data} = userData.reduce((chartData, userData) => {
    chartData.keys[userData.name] = true;
    Object.keys(userData).forEach((k) => {
      if (userData[k] && chartCrosswalk.hasOwnProperty(k)) {
        chartData.data[chartCrosswalk[k]][userData.name] =
          userData[k] + (chartData.data[chartCrosswalk[k]][userData.name] || 0)
      }
    })
    return chartData;
  }, {
    keys: {},
    data: [
      {type: 'km_roads_add_mod'},
      {type: 'buildings_add_mod'},
      {type: 'poi_add_mod'},
      {type: 'km_railways_add_mod'},
      {type: 'km_waterways_add_mod'},
      {type: 'km_coastlines_add_mod'}
    ]
  })

  return (
    (userData && userData.length) && <ResponsiveBar
      data={data}
      keys={Object.keys(keys)}
      indexBy="type"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={['#22BDC1', '#8BC544', '#334A42', '#5657C2', '#4FCA9C', '#301F11']}
      colorBy='id'
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'statistics',
          legendPosition: 'middle',
          legendOffset: 32
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'edits',
          legendPosition: 'middle',
          legendOffset: -40
      }}
      legends={[
        {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemOpacity: 1
                    }
                }
            ]
          }
      ]}
      labelSkipWidth={12}
      labelSkipHeight={12}
      role="application"
      ariaLabel="Nivo bar chart demo"
      groupMode='grouped'
      barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
  )
}
