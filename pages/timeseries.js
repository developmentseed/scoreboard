import React, { Component } from 'react'
import Select from 'react-select'
import { createApiUrl } from '../lib/utils/api'
import Table from '../components/common/Table';
import TimeSeriesEditsChart from '../components/charts/TimeSeriesEditsChart';
import { Duration } from 'luxon';

const rangeUnits = [
  { label: 'Year', value: 'Y' },
  { label: 'Day', value: 'D' },
  { label: 'Month', value: 'M' },
  { label: 'Hour', value: 'H', time: true },
  { label: 'Month', value: 'M', time: true },
  { label: 'Seconds', value: 'S', time: true }
]

const apiHeaderCrosswalk = {
  measurements: {
    road: 'km_roads_add_mod',
    buildings: 'buildings_add_mod',
    pois: 'poi_add_mod',
  },
  counts: {
    raillines: 'km_railways_add_mod',
    waterways: 'km_waterways_add_mod',
    coastline: 'km_coastlines_add_mod'
  }
}

const osmesaUserStatSchema = {
  'headers': {
    'name': { type: 'namelink', accessor: 'name' },
    // 'countries': { type: 'string', accessor: 'country' },
    'roads': { type: 'number', accessor: 'km_roads_add_mod' },
    'buildings': { type: 'number', accessor: 'buildings_add_mod' },
    'poi': { type: 'number', accessor: 'poi_add_mod' },
    'railways': { type: 'number', accessor: 'km_railways_add_mod' },
    'coastlines': { type: 'number', accessor: 'km_coastlines_add_mod' },
    'waterways': { type: 'number', accessor: 'km_waterways_add_mod' },
    'changesets': { type: 'number', accessor: 'changeset_count' },
    'edits': { type: 'number', accessor: 'edit_count' }
  },
  'columnOrder': [
    'name',
    // 'country',
    'roads',
    'buildings',
    'poi',
    'railways',
    'coastlines',
    'waterways',
    'changesets',
    'edits'
  ],
  'displaysTooltip': [
    'name',
    'buildings',
    'poi',
    'changesets',
    'edits'
  ]

}


function fetchCountries() {
  return fetch(createApiUrl('/api/countries', {}))
    .then(async res => {
      if (res.status === 200) {
        const results = await res.json()
        return results.records.map(({name,code}) =>
          { return { label: name, value: code} });
      } else {
        throw new Error('failed to get country data')
      }
    })
    .catch((error) => [])
}

function fetchUsers() {
  return fetch(createApiUrl('/api/users', {}), { credentials: 'include' })
    .then(async res => {
      if (res.status === 200) {
        const results = await res.json()
        return results.map(({osm_id, full_name}) => {
          return { label: full_name, value: osm_id }
        });
      } else {
        throw new Error('failed to get user data')
      }
    })
    .catch((error) => [])
}

export default class TimeSeries extends Component {
  constructor() {
    super()
    this.state = {
      startDate: new Date(new Date().setMonth(new Date().getMonth() - (4*12))).toISOString(),
      endDate:  new Date().toISOString(),
      rangeValue: null,
      rangeUnit: null,
      users: {},
      countries: {},
      countriesList: [],
      usersList: [],
      timeseriesData: {},
      accumulatedUserTimeseriesData: {},
      accumulatedDataTotals: {},
      userIdMap: {}
    }
  }

  componentDidMount() {
    this.updateTimeseriesData()
    this.initializeFilters()
  }

  async initializeFilters() {
    const [countries, users] = await Promise.all([fetchCountries(), fetchUsers()])
    this.setState({
      countriesList: countries,
      usersList: users
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const formChanged =
        ['startDate', 'endDate', 'rangeValue', 'rangeUnit']
          .filter(key => prevState[key] !== this.state[key]).length > 0 ||
        ['users', 'countries']
          .filter(key => Object.keys(prevState[key]).length !== Object.keys(this.state[key]).length)
          .length > 0

    if (formChanged)
      this.updateTimeseriesData()
  }

  buildBinInterval() {
    if (Number.isNaN(this.state.rangeValue))
      return null;

    const interval = rangeUnits.find(({value}) => value === this.state.rangeUnit);

    if (interval === undefined)
      return null;

    return Duration.fromObject({ [interval.label]: this.state.rangeValue }).toISO();
  }

  async updateTimeseriesData() {
    const queryParams = {
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }

    const validBinInterval = this.buildBinInterval()
    if (validBinInterval !== null)
      queryParams.binInterval = validBinInterval

    const countries = Object.keys(this.state.countries)
    const users = Object.keys(this.state.users)

    if (countries.length) queryParams.countriesFilter = countries.join('|');
    if (users.length) queryParams.userIdsFilter = users.join('|');

    const nextTimeseriesData = await fetch(createApiUrl('/api/timeseries', queryParams))
      .then(async res => {
        if (res.status === 200) {
          const results = await res.json()
          return results;
        } else {
          throw new Error('failed to get country data')
        }
      })
      .catch((error) => { return { bins: [] }})

    // accumulate the timeseries data for users
    const accumulatedUserTimeseriesData = {};
    const userIdMap = {};
    nextTimeseriesData.bins.forEach((bin) => {
      const {
        user_id,
        name,
        changeset_count,
        edit_count,
        measurements,
        counts
      } = bin;

      const accumulatedUserStats = {
        name: name,
        km_roads_add_mod: 0,
        buildings_add_mod: 0,
        poi_add_mod: 0,
        km_railways_add_mod: 0,
        km_waterways_add_mod: 0,
        km_coastlines_add_mod: 0,
        edit_count: edit_count,
        changeset_count: changeset_count
      }

      userIdMap[name] = user_id

      Object.keys(measurements).forEach(measurement => {
        if (!measurement.includes('deleted')) {
          const accumulatedMeasurement = apiHeaderCrosswalk.measurements[measurement.split('_')[0]]
          if (accumulatedMeasurement) {
            accumulatedUserStats[accumulatedMeasurement] +=
              measurements[measurement]
          }
        }
      })

      Object.keys(counts).forEach(count => {
        if (!count.includes('deleted')) {
          const accumulatedCount = apiHeaderCrosswalk.counts[count.split('_')[0]]
          if (accumulatedCount) {
            accumulatedUserStats[accumulatedCount] +=
              counts[count]
          }
        }
      })

      accumulatedUserTimeseriesData[user_id] = accumulatedUserStats
    })

    this.setState({
      accumulatedUserTimeseriesData: accumulatedUserTimeseriesData,
      userIdMap: accumulatedUserTimeseriesData
    })
  }

  onInputChange({id, value}) {
    this.setState({ [id]: value })
  }

  onMultiSelectChange(id, selected) {
    this.setState({ [id]: selected.reduce((nextState, {value}) => {
      nextState[value] = true;
      return nextState
    }, {}) })
  }

  render () {
    return (
      <div className='Timeseries'>
        <section>
          <div className="row widget-container">
            <div class="widget">
              <form>
                <fieldset>
                  <legend>Start date</legend>
                  <input id="startDate" type="date" onChange={evt => this.onInputChange(evt.target)} />
                </fieldset>
                <fieldset>
                  <legend>End date</legend>
                  <input id="endDate" type="date" onChange={evt => this.onInputChange(evt.target)} />
                </fieldset>
                <fieldset>
                  <legend>Interval</legend>
                  <input id="rangeValue" type="number" onChange={evt => this.onInputChange(evt.target)} />
                  <Select
                    value={this.state.rangeUnit}
                    onChange={(e) => this.onInputChange({id: 'rangeUnit', value: e.value})}
                    id="rangeUnit"
                    options={rangeUnits} />
                </fieldset>
                <fieldset>
                  <legend>Users</legend>
                  <Select
                    multi
                    value={Object.keys(this.state.users)}
                    onChange={(clicked) => this.onMultiSelectChange('users', clicked)}
                    id="users"
                    options={this.state.usersList}
                    className="basic-multi-select"
                    classNamePrefix="select"/>
                </fieldset>
                <fieldset>
                  <legend>Countries</legend>
                  <Select
                    multi
                    value={Object.keys(this.state.countries)}
                    onChange={(clicked) => this.onMultiSelectChange('countries', clicked)}
                    id="users"
                    options={this.state.countriesList}
                    className="basic-multi-select"
                    classNamePrefix="select"/>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="row widget-container">
            <div className='widget'>
              <h3 className='header--small'>{`User Edits from ${this.state.startDate.split('T')[0]} to ${this.state.endDate.split('T')[0]}`}</h3>
              <div className='chart' style={{ height: '400px', marginBottom: '50px' }}>
                <TimeSeriesEditsChart
                  userData={Object.values(this.state.accumulatedUserTimeseriesData)} />
              </div>
              <div>
                <Table
                  idMap={this.state.userIdMap}
                  tableSchema={osmesaUserStatSchema}
                  notSortable={true}
                  data={Object.values(this.state.accumulatedUserTimeseriesData)}
                  totals={{}}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}