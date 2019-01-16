import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { pick, isNil, values, any } from 'ramda'

/**
 * chartify
 * Takes props and turns them into chart data
 * @param {*} props
 */
function chartify({
  waterways_add,
  poi_add,
  roads_add,
  buildings_add
}) {
  return [
    {
      'id': 'waterways',
      'label': 'Waterways',
      'value': waterways_add || 0
    },
    {
      'id': 'buildings',
      'label': 'Buildings',
      'value': buildings_add || 0
    },
    {
      'id': 'roads',
      'label': 'Roads',
      'value': roads_add || 0
    },
    {
      'id': 'poi',
      'label': 'POI',
      'value': poi_add || 0
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
  }
}

export default (props) => {
  const dataToChart = pick([
    'waterways_add',
    'poi_add',
    'roads_add',
    'buildings_add'
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
          'bottom': 0,
          'left': 0
        }}
        theme={theme}
        sortByValue={false}
        innerRadius={0.65}
        padAngle={0.3}
        cornerRadius={1}
        colors='paired'
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
        enableSlicesLabels
        sliceLabel='value'
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor='#f5f5f5'
        animate
        motionStiffness={90}
        motionDamping={15}
        isInteractive
        legends={[
          {
            'anchor': 'center-left',
            'direction': 'column',
            'translateY': 20,
            'itemWidth': 100,
            'itemHeight': 28,
            'symbolSize': 16,
            'symbolShape': 'square'
          }
        ]}
      /></div>)
}
