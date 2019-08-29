import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { isNil, values, any } from 'ramda'

/**
 * chartify
 * Takes props and turns them into chart data
 * @param {*} props
 */
function chartify ({
  waterways_added,
  waterways_modified,
  waterways_deleted,
  pois_added,
  pois_modified,
  pois_deleted,
  roads_added,
  roads_modified,
  roads_deleted,
  buildings_added,
  buildings_modified,
  buildings_deleted,
  coastlines_modified,
  coastlines_deleted,
  coastlines_added,
  raillines_added,
  raillines_modified,
  raillines_deleted
}) {
  return [
    {
      'id': 'waterways',
      'label': 'Waterways',
      'value': waterways_added + waterways_modified + waterways_deleted || 0
    },
    {
      'id': 'buildings',
      'label': 'Buildings',
      'value': buildings_added + buildings_modified + buildings_deleted || 0
    },
    {
      'id': 'roads',
      'label': 'Roads',
      'value': roads_added + roads_modified + roads_deleted || 0
    },
    {
      'id': 'poi',
      'label': 'POI',
      'value': pois_added + pois_modified + pois_deleted || 0
    },
    {
      'id': 'coastlines',
      'label': 'Coastlines',
      'value': coastlines_added + coastlines_modified + coastlines_deleted || 0
    },
    {
      'id': 'railways',
      'label': 'Railways',
      'value': raillines_added + raillines_modified + raillines_deleted || 0
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
  colors: ['#22BDC1', '#8BC544', '#334A42', '#5657C2', '#4FCA9C', '#301F11']
}

export default function EditBreakdownChart (props) {
  const {
    waterways_added,
    pois_added,
    raillines_added,
    roads_added,
    buildings_added,
    coastlines_modified,
    height
  } = props

  const dataToChart = {
    waterways_added,
    pois_added,
    roads_added,
    buildings_added,
    coastlines_modified,
    raillines_added
  }

  if (any(isNil, values(dataToChart))) {
    return (
      <div className='chart chart-pie widget' style={{ height: props.height }}>
        <h4 className='header--small'>Type Of Edits</h4>
        No data available
      </div>
    )
  }

  return (
    <div className='chart chart-pie widget' style={{ height: height }}>
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
