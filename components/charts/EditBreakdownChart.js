import React from 'react'
import { ResponsivePie } from '@nivo/pie'

/**
 * chartify
 * Takes props and turns them into chart data
 * @param {*} props
 */
function chartify ({
  waterways_add,
  poi_add,
  roads_add,
  buildings_add,
  coastlines_mod
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
    },
    {
      'id': 'coastlines',
      'label': 'Coastlines',
      'value': coastlines_mod || 0
    }
  ]
}

export default (props) => <ResponsivePie
  data={chartify(props)}
  margin={{
    'top': 0,
    'right': 0,
    'bottom': 0,
    'left': 0
  }}
  sortByValue={false}
  innerRadius={0.5}
  padAngle={1}
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
  slicesLabelsTextColor='#333333'
  animate
  motionStiffness={90}
  motionDamping={15}
  isInteractive
  legends={[
    {
      'anchor': 'top-right',
      'direction': 'column',
      'translateY': 56,
      'itemWidth': 100,
      'itemHeight': 18,
      'symbolSize': 16,
      'symbolShape': 'square'
    }
  ]}
/>
