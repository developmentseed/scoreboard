import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { pick, isNil, values, any } from 'ramda'

/**
 * chartify
 * Takes props and turns them into chart data
 * @param {*} props
 */
function chartify ({
  waterways_add,
  waterways_mod,
  waterways_del,
  poi_add,
  poi_mod,
  poi_del,
  roads_add,
  roads_mod,
  roads_del,
  buildings_add,
  buildings_mod,
  buildings_del,
  coastlines_mod,
  coastlines_del,
  coastlines_add
}) {
  return [
    {
      'id': 'waterways',
      'label': 'Waterways',
      'value': waterways_add + waterways_mod + waterways_del || 0
    },
    {
      'id': 'buildings',
      'label': 'Buildings',
      'value': buildings_add + buildings_mod + buildings_del || 0
    },
    {
      'id': 'roads',
      'label': 'Roads',
      'value': roads_add + roads_mod + roads_del || 0
    },
    {
      'id': 'poi',
      'label': 'POI',
      'value': poi_add + poi_mod + poi_del || 0
    },
    {
      'id': 'coastlines',
      'label': 'Coastlines',
      'value': coastlines_add + coastlines_mod + coastlines_del || 0
    }
  ]
}
const theme = {
  axis: {
    textColor: '#eee',
    fontSize: '14px'
  },
  legends: {
    textColor: '#eee',
    fontSize: '14px'
  },
  colors: ['#22BDC1', '#8BC544', '#334A42', '#5657C2', '#4FCA9C']
}

export default function EditBreakdownChart (props) {
  const dataToChart = pick([
    'waterways_add',
    'poi_add',
    'roads_add',
    'buildings_add',
    'coastlines_mod'
  ], props)
  if (any(isNil, values(dataToChart))) {
    return (
      <div className='chart chart-pie widget' style={{ height: props.height }}>
        <h4 className='header--small'>Type Of Edits</h4>
        No data available
      </div>
    )
  }

  return (
    <div className='chart chart-pie widget' style={{ height: props.height }}>
      <h4 className='header--small'>Type Of Edits</h4>
      <ResponsivePie
        data={chartify(props)}
        margin={{
          'top': 0,
          'right': 0,
          'bottom': 20,
          'left': 50
        }}
        theme={theme}
        sortByValue={false}
        innerRadius={0.65}
        padAngle={0.3}
        cornerRadius={1}
        colors={theme.colors}
        colorBy='id'
        borderWidth={0}
        borderColor='inherit:darker(0.6)'
        enableRadialLabels={false}
        radialLabel='id'
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor='#333333'
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor='inherit'
        enableSlicesLabels={false}
        sliceLabel='value'
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor='inherit:lighter(1.6)'
        animate
        motionStiffness={90}
        motionDamping={15}
        isInteractive
        tooltipFormat={value => value.toLocaleString()}
        legends={[
          {
            'anchor': 'left',
            'direction': 'column',
            'translateY': 20,
            'translateX': -50,
            'itemWidth': 100,
            'itemHeight': 28,
            'symbolSize': 16,
            'symbolShape': 'square'
          }
        ]}
      /></div>)
}
