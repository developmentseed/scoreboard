import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

/**
 * chartify
 * Takes props and turns them into chart data
 * @param {*} props
 */
function chartify ({ edits }) {
  return edits.map(({ full_name, country, edit_count }) => {
    return {
      display_name: `${full_name} (${country})`,
      edits: edit_count || 0
    }
  }).reverse()
}
const theme = {
  axis: {
    fontSize: '14px'
  },
  legend: {
    fontSize: '14px'
  }
}

export default props =>
  <ResponsiveBar
    data={chartify(props)}
    keys={['edits']}
    indexBy='display_name'
    margin={{
      'top': 0,
      'right': 60,
      'bottom': 50,
      'left': 120
    }}
    theme={theme}
    padding={0.2}
    innerPadding={0}
    minValue='auto'
    maxValue='auto'
    groupMode='grouped'
    layout='horizontal'
    reverse={false}
    colors={
      [
        'hsl(87, 53%, 70%)',
        'hsl(87, 53%, 68%)',
        'hsl(87, 53%, 66%)',
        'hsl(87, 53%, 64%)',
        'hsl(87, 53%, 62%)',
        'hsl(87, 53%, 60%)',
        'hsl(87, 53%, 58%)',
        'hsl(87, 53%, 56%)',
        'hsl(87, 53%, 54%)',
        'hsl(87, 53%, 52%)'
      ]
      // Function to generate the color range above:
      // function setColor (index) {
      //   // value from 0 to 1
      //   var sat = (index * Math.Random()).toString(10)
      //   return [`hsl(87,${sat}, 50%)`]
      // }
    }
    colorBy='index'
    borderRadius={0}
    borderWidth={0}
    borderColor='inherit:brighter(1.6)'
    axisBottom={{
      'orient': 'bottom',
      'tickSize': 2,
      'tickPadding': 3,
      'tickRotation': 0,
      'legend': 'Number of Edits',
      'legendPosition': 'center',
      'legendOffset': 40,
      'format': '.2s'
    }}
    enableGridX={false}
    enableGridY={false}
    enableLabel
    labelFormat={(value, d) => <tspan x={50}>{d}{value.toLocaleString()}</tspan>}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor='inherit:darker(1.6)'
    animate
    motionStiffness={90}
    motionDamping={15}
    isInteractive
    tooltipFormat={value => value.toLocaleString()}
  />
