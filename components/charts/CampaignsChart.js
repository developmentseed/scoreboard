import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { sortBy, map, slice, compose, prop, reverse } from 'ramda'

/**
 * chartify
 * Takes props and turns them into chart data
 * @param {*} props
 */
function chartify ({ hashtags }) {
  return compose(
    slice(0, 4),
    map(({ tag, count }) => { return { id: tag, edits: count } }),
    reverse,
    sortBy(prop('count'))
  )(hashtags)
}
const theme = {
  axis: {
    fontSize: '14px',
  },
  legend: {
    fontSize: '14px',
  },
};

export default props =>
  <ResponsiveBar
    data={chartify(props)}
    keys={['edits']}
    indexBy='id'
    margin={{
      'top': 0,
      'right': 60,
      'bottom': 50,
      'left': 120
    }}
    theme={theme}
    padding={0.1}
    innerPadding={0}
    minValue='auto'
    maxValue='auto'
    groupMode='grouped'
    layout='horizontal'
    reverse={false}
    colors='#4FCA9E'
    colorBy='index'
    borderRadius={0}
    borderWidth={0}
    borderColor='inherit:brighter(1.6)'
    axisBottom={{
      'orient': 'bottom',
      'tickSize': 3,
      'tickPadding': 5,
      'tickRotation': 0,
      'legend': 'Number of Edits',
      'legendPosition': 'center',
      'legendOffset': 40
    }}
    enableGridX={false}
    enableGridY={false}
    enableLabel
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor='inherit:darker(1.6)'
    animate
    motionStiffness={90}
    motionDamping={15}
    isInteractive
  />
