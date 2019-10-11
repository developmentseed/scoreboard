import React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'
import getISOYear from 'date-fns/get_iso_year'
import { LoadingState } from '../common/LoadingState'

class CalendarHeatmap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    const { times } = this.props
    if (times && this.state.loading) {
      this.setChartOptions()
      this.setState({ loading: false })
    }
    window.addEventListener('resize', (e) => {
      this.setChartOptions()
    })
  }

  componentDidUpdate () {
    const { times } = this.props
    if (times && this.state.loading) {
      this.setChartOptions()
      this.setState({ loading: false })
    }
  }

  setChartOptions () {
    const { times } = this.props

    const years = times.map(time => getISOYear(time.day))
    const totalYears = [...new Set(years)].length
    const earliestYear = years.sort()[0]

    // calculate a height for a year grid that can retain aspect ratio at different sizes
    const yearGridHeight = window.innerWidth / (150 / 1170 * 100) * 1.5
    let height = yearGridHeight * totalYears

    if (height > 525) {
      height = 525
    } else if (height < 400) {
      height = 400
    }

    const values = times.map(time => ({ day: time.day, value: time.count }))
    this.setState({ height, values, earliestYear })
  }

  render () {
    const { height, values, earliestYear } = this.state

    return (
      <div className='widget' style={{ position: 'relative', height: `${height}px` }} >
        <h4 className='header--small header--with-description-lg'>Edits Over Time</h4>
        {this.state.loading ? <LoadingState /> : null}
        {
          earliestYear
            ? <ResponsiveCalendar
              data={values}
              from={`${earliestYear}-02-01`}
              to={new Date()}
              emptyColor='#eeeeee'
              colors={[
                '#7DFFCE',
                '#4FCA9C',
                '#257D5C',
                '#0D4A33'
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
                  'anchor': 'bottom-right',
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
                    'fontSize': '14px'
                  }
                },
                'labels': {
                  'textColor': '#555'
                }
              }}
            />
            : <div>No data available</div>
        }
      </div>
    )
  }
}

export default CalendarHeatmap
