import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { sortBy, slice, compose, prop, reverse, map } from 'ramda'
import getTspanGroups from '../../lib/utils/getTspanGroups'

/**
 * chartify
 * Takes props and turns them into chart data
 * @param {*} props
 */
function chartify ({ hashtags }) {
  return compose(
    slice(0, 4),
    map(({ tag, edit_count }) => { return { id: tag, edits: edit_count } }),
    reverse,
    sortBy(prop('edit_count'))
  )(hashtags).reverse()
}

const theme = {
  axis: {
    fontSize: '14px'
  },
  legend: {
    fontSize: '14px'
  }
}

/**
 * Generate some integers for react's element keys.
 *
 * @returns {function(): number}
 */
function keyGeneratorFactory () {
  let i = 0
  return () => i++
}

export default function CampaignCharts (props) {
  const keyGenerator = keyGeneratorFactory()
  return (
    <div className={`chart widget`} style={{ height: props.height }}>
      <h4 className='header--small'>Top Hashtags</h4>
      {
        props.hashtags
          ? <ResponsiveBar
            data={chartify(props)}
            keys={['edits']}
            indexBy='id'
            margin={{
              'top': 0,
              'right': 60,
              'bottom': 50,
              'left': 120
            }}
            axisLeft={{
              tickSize: 0,
              tickPadding: 25,
              tickRotation: 0,
              renderTick: ({
                opacity,
                textAnchor,
                textBaseline,
                textX,
                textY,
                theme,
                value,
                x,
                y
              }) => {
                return (
                  <g
                    key={keyGenerator()}
                    transform={`translate(${x},${y})`}
                    style={{ opacity }}
                  >
                    <text
                      alignmentBaseline={textBaseline}
                      style={theme.axis.ticks.text}
                      textAnchor={textAnchor}
                      transform={`translate(${textX},${textY})`}
                    >
                      {getTspanGroups(value, 20)}
                    </text>
                  </g>
                )
              }
            }}
            theme={theme}
            padding={0.1}
            innerPadding={0}
            minValue='auto'
            maxValue='auto'
            groupMode='grouped'
            layout='horizontal'
            reverse={false}
            colors={[
              '#8BC544',
              '#98CF54',
              '#B5E37B',
              '#CCF19E',
              '#E3FDC3'
            ]}
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
              'legendPosition': 'middle',
              'legendOffset': 40
            }}
            enableGridX={false}
            enableGridY={false}
            enableLabel
            labelFormat={(value, d) => <tspan x={50}>{d}{value.toLocaleString()}</tspan>}
            labelSkipWidth={32}
            labelSkipHeight={12}
            labelTextColor='inherit:darker(1.6)'
            animate
            motionStiffness={90}
            motionDamping={15}
            isInteractive
            tooltipFormat={value => value.toLocaleString()}
          />
          : <div>No data available</div>
      }
    </div >
  )
}
