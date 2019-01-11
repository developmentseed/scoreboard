import React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'
import getISOYear from 'date-fns/get_iso_year'

class CalendarHeatmap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.setChartOptions()

    window.addEventListener('resize', (e) => {
      this.setChartOptions()
    })
  }

  setChartOptions () {
    const { times } = this.props

    const years = times.map(time => getISOYear(time.day))
    const totalYears = [ ...new Set(years) ].length
    const earliestYear = years.sort()[0]

    // calculate a height for a year grid that can retain aspect ratio at different sizes
    const yearGridHeight = window.innerWidth / (150 / 1170 * 100) * 1.5
    let height = yearGridHeight * totalYears

    if (height > 525) {
      height = 525
    }

    const values = times.map(time => ({ day: time.day, value: time.count }))
    this.setState({ height, values, earliestYear })
  }

  render () {
    const { height, values, earliestYear } = this.state

    return (
      <div className='widget' style={{ position: 'relative', height: `${height}px` }} >
        <ResponsiveCalendar
          data={values}
          from={`${earliestYear}-02-01`}
          to={new Date()}
          emptyColor='#eeeeee'
          colors={[
            '#61cdbb',
            '#97e3d5',
            '#e8c1a0',
            '#f47560'
          ]}
          margin={{
            'top': 30,
            'right': 0,
            'bottom': 30,
            'left': 30
          }}
          yearSpacing={40}
          yearLegendOffset={10}
          monthBorderColor='#ffffff'
          monthLegendOffset={4}
          dayBorderWidth={2}
          dayBorderColor='#ffffff'
          legends={[
            {
              'anchor': 'top-right',
              'direction': 'row',
              'itemCount': 4,
              'itemWidth': 34,
              'itemHeight': 40,
              'itemDirection': 'top-to-bottom'
            }
          ]}
          theme={{
            'tooltip': {
              'container': {
                'fontSize': '13px'
              }
            },
            'labels': {
              'textColor': '#555'
            }
          }}
        />
      </div>
    )
  }
}

export default CalendarHeatmap
