import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

/**
 * chartify
 * Takes props and turns them into chart data
 * @param {*} props
 */
function chartify({ edits }) {
  return edits.map(({display_name, country, edit_count}) => {
    return {
      display_name: `${display_name} (${country})`,
      edits: edit_count
    }
  }).reverse();
}

export default props =>
  <ResponsiveBar
    data={chartify(props)}
    keys={['edits']}
    indexBy="display_name"
    margin={{
      "top": 0,
      "right": 60,
      "bottom": 50,
      "left": 120
    }}
    padding={0.2}
    innerPadding={0}
    minValue="auto"
    maxValue="auto"
    groupMode="grouped"
    layout="horizontal"
    reverse={false}
    colors="#8BC544"
    borderRadius={0}
    borderWidth={0}
    borderColor="inherit:brighter(1.6)"
    axisBottom={{
      "orient": "bottom",
      "tickSize": 5,
      "tickPadding": 3,
      "tickRotation": 0,
      "legend": "Number of Edits",
      "legendPosition": "center",
      "legendOffset": 40
    }}
    enableGridX={false}
    enableGridY={false}
    enableLabel={true}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor="inherit:darker(1.6)"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    isInteractive={true}
/>
