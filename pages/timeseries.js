import React, { Component } from 'react'
import Select from 'react-select'
import { createApiUrl } from '../lib/utils/api'
import Table from '../components/common/Table';
import TimeSeriesEditsChart from '../components/charts/TimeSeriesEditsChart';
import { Duration, DateTime } from 'luxon';
import CSVExport from '../components/CSVExport';

const apiHeaderCrosswalk = {
  counts: {
    buildings: 'buildings_add_mod',
    pois: 'poi_add_mod',
  },
  measurements: {
    road: 'km_roads_add_mod',
    raillines: 'km_railways_add_mod',
    waterways: 'km_waterways_add_mod',
    coastline: 'km_coastlines_add_mod'
  }
}

const csvCrosswalk = {
  buildings_added: 'buildings_add',
  buildings_modified: 'buildings_mod',
  road_km_added: 'km_roads_add',
  road_km_modified: 'km_roads_mod',
  pois_added: 'poi_add',
  pois_modified: 'poi_mod',
  railline_km_added: 'km_railways_add',
  railline_km_modified: 'km_railways_mod',
  coastline_km_added: 'km_coastlines_add',
  coastline_km_deleted: 'km_coastlines_mod',
  coastline_km_added: 'km_waterways_add',
  waterway_km_modified: 'km_waterways_add'
}

const osmesaUserStatSchema = {
  'headers': {
    'name': { type: 'namelink', accessor: 'name' },
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

function fetchTeams() {
  return fetch(createApiUrl('/api/teams', {}), { credentials: 'include' })
    .then(async res => {
      if (res.status === 200) {
        const {teams} = await res.json()
        return teams.reduce((teamsConfig, {name, id, members, moderators}) => {
          teamsConfig.teamsList.push({label: name, value: id});
          teamsConfig.teamsLookup[id] = [...members, ...moderators];
          return teamsConfig
        }, {teamsList: [], teamsLookup: {}})
      } else {
        throw new Error('failed to get user data')
      }
    })
    .catch((error) => [])
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
      startDate: new Date(new Date().setMonth(new Date().getMonth() - (4*12))).toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      rangeUnits: [
        { label: 'Years', value: 'Y' },
        { label: 'Months', value: 'M' },
        { label: 'Weeks', value: 'W' },
        { label: 'Days', value: 'D' }
      ],
      rangeValue: '1',
      rangeUnit: 'W',
      users: {},
      countries: {},
      teams: {},
      teamsMap: {},
      countriesList: [],
      teamsList: [],
      usersList: [],
      timeseriesData: [],
      accumulatedUserTimeseriesData: {},
      userIdMap: {}
    }
  }

  filterRangeUnits() {
    let duration = DateTime.fromISO(this.state.endDate).diff(DateTime.fromISO(this.state.startDate))
    const filteredUnits = [];

    if (duration.as('years') >= 1)
      filteredUnits.push({ label: 'Years', value: 'Y' })

    if (duration.as('months') >= 1)
      filteredUnits.push({ label: 'Months', value: 'M' })

    if (duration.as('weeks') >= 1)
      filteredUnits.push({ label: 'Weeks', value: 'W' })

    if (duration.as('years') <= 0.5)
      filteredUnits.push({ label: 'Days', value: 'D' })

    return filteredUnits;
  }

  getInitialRangeUnit() {
    let duration = DateTime.fromISO(this.state.endDate).diff(DateTime.fromISO(this.state.startDate))

    if (duration.as('years') >= 1)
      return 'Y'
    else if (duration.as('months') >= 6)
      return 'M'
    else if (duration.as('months') >= 1)
      return 'W'
    else
      return 'D'
  }

  componentDidMount() {
    this.setState({
      rangeUnits: this.filterRangeUnits(),
      rangeUnit: this.getInitialRangeUnit()
    })
    this.updateTimeseriesData()
    this.initializeFilters()
  }

  async initializeFilters() {
    const [countries, users, {teamsList, teamsLookup}] = await Promise.all([
      fetchCountries(),
      fetchUsers(),
      fetchTeams()
    ])

    this.setState({
      countriesList: countries,
      usersList: users,
      teamsList: teamsList,
      teamsLookup: teamsLookup
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const changedInputs = ['startDate', 'endDate', 'rangeValue', 'rangeUnit']
      .filter(key => prevState[key] !== this.state[key]);

    const changedMultiselect = ['users', 'countries', 'teams']
      .filter(key => Object.keys(prevState[key]).length !== Object.keys(this.state[key]).length)

    if (changedInputs.filter(i => i.indexOf('Date') !== -1).length)
      this.setState({ rangeUnits: this.filterRangeUnits(), rangeUnit: this.getInitialRangeUnit() })

    if (changedInputs.length || changedMultiselect.length)
      this.updateTimeseriesData()
  }

  buildBinInterval() {
    if (!this.state.rangeValue.length || Number.isNaN(this.state.rangeValue))
      return null;

    const interval = this.state.rangeUnits.find(({value}) => value === this.state.rangeUnit);

    if (interval === undefined)
      return null;

    const duration = Duration.fromObject({ [interval.label]: this.state.rangeValue })

    if (duration.toMillis() <= 0)
      return null;

    return duration.toISO()
  }

  buildGraphBins() {
    const bins = {},
          end = DateTime.fromISO(this.state.endDate),
          binInterval = Duration.fromISO(this.buildBinInterval());

    let bin = DateTime.fromISO(this.state.startDate);

    while (bin.startOf("day") < end.startOf("day")) {
      bins[bin.toISODate()] = {x: bin.toISODate(), y: 0}
      bin = bin.plus(binInterval)
    }

    return bins;
  }

  async updateTimeseriesData() {
    const queryParams = {
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }

    const validBinInterval = this.buildBinInterval()

    if (validBinInterval === null) // do not send request if user did not specify a time unit
      return;

    queryParams.binInterval = validBinInterval

    const countries = Object.keys(this.state.countries)
    const users = Object.keys(this.state.users)
    const teams = Object.keys(this.state.teams);

    const queryUsers = [];

    if (countries.length) queryParams.countriesFilter = countries.join('|');
    if (users.length) queryUsers.push(...users)
    if (teams.length) teams.forEach(teamId => queryUsers.push(...this.state.teamsLookup[teamId]))

    if (queryUsers.length)
      queryParams.userIdsFilter = queryUsers.filter((u, idx) => queryUsers.indexOf(u) === idx).join('|')

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
    const timeseriesData = []
    const userIdMap = {};
    nextTimeseriesData.bins.forEach((bin) => {
      const {
        bin_start,
        bin_end,
        user_id,
        name,
        changeset_count,
        edit_count,
        measurements,
        counts
      } = bin;

      timeseriesData.push(
        Object.assign({
          name: name,
          bin_start: bin_start,
          bin_end: bin_end,
          edit_count: edit_count,
          changeset_count: changeset_count
        },
        Object.keys(measurements).reduce((crossWalked, k) => { crossWalked[csvCrosswalk[k]] = measurements[k]; return crossWalked; }, {}),
        Object.keys(counts).reduce((crossWalked, k) => { crossWalked[csvCrosswalk[k]] = counts[k]; return crossWalked; }, {}),
        )
      )

      const accumulatedUserStats = accumulatedUserTimeseriesData[user_id] || {
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

      userIdMap[name] = user_id;

      Object.keys(measurements).forEach(measurement => {
        if (!measurement.includes('deleted')) {
          const key = measurement.split('_')[0]
          if (apiHeaderCrosswalk.measurements.hasOwnProperty(key)) {
            accumulatedUserStats[apiHeaderCrosswalk.measurements[key]] = Number(Number(
              measurements[measurement] + accumulatedUserStats[apiHeaderCrosswalk.measurements[key]]
            ).toFixed(3))
          }
        }
      })

      Object.keys(counts).forEach(count => {
        if (!count.includes('deleted')) {
          const key = count.split('_')[0];
          if (apiHeaderCrosswalk.counts.hasOwnProperty(key)) {
            accumulatedUserStats[apiHeaderCrosswalk.counts[key]] += counts[count]
          }
        }
      })

      accumulatedUserStats.edit_count += edit_count;
      accumulatedUserStats.changeset_count += changeset_count;
      accumulatedUserTimeseriesData[user_id] = accumulatedUserStats
    })

    this.setState({
      accumulatedUserTimeseriesData: accumulatedUserTimeseriesData,
      timeseriesData: timeseriesData.sort((userA,userB) => userA.name.localeCompare(userB.name)),

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

  statsHeader(description) {
      return this.state.timeseriesData.length
        ? `${description} User Edits from ${this.state.startDate.split('T')[0]} to ${this.state.endDate.split('T')[0]}`
        : 'Apply a country or user filter'
  }


  render () {
    const haveUserData = this.state.timeseriesData.length > 0;
    const containerStyle = {};
    const rightWidgetStyle = {};

    if (!haveUserData) {
      containerStyle.justifyContent = 'start'
      rightWidgetStyle.marginLeft = '10px';
    }

    return (
      <div className='Timeseries'>
        <section>
          <div className="row widget-container" style={containerStyle}>
            <div class="widget-10">
              <form>
                <fieldset>
                  <legend>Start date</legend>
                  <input className='input--text' id="startDate" type="date" value={this.state.startDate} onChange={evt => this.onInputChange(evt.target)} />
                </fieldset>
                <fieldset>
                  <legend>End date</legend>
                  <input className='input--text' id="endDate" type="date" value={this.state.endDate} onChange={evt => this.onInputChange(evt.target)} />
                </fieldset>
                <fieldset>
                  <legend>Interval</legend>
                  <input className='form__input-unit input--text'
                    id="rangeValue"
                    min='1'
                    type="number"
                    value={this.state.rangeValue}
                    onChange={evt => this.onInputChange(evt.target)} />
                  <Select
                    value={this.state.rangeUnit}
                    onChange={(e) => this.onInputChange({id: 'rangeUnit', value: e.value})}
                    id="rangeUnit"
                    clearable={false}
                    options={this.state.rangeUnits} />
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
                  <legend>Teams</legend>
                  <Select
                    multi
                    value={Object.keys(this.state.teams)}
                    onChange={(clicked) => this.onMultiSelectChange('teams', clicked)}
                    id="teams"
                    options={this.state.teamsList}
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
                <fieldset>
                  {haveUserData && <CSVExport filename='timeseries.csv' data={this.state.timeseriesData}/>}
                </fieldset>
              </form>
            </div>
            <div className='widget-90' style={rightWidgetStyle}>
              <h3 className='header--small'>{this.statsHeader('Categorized')}</h3>
              <div className='chart' style={{ height: '400px', marginBottom: '50px' }}>
                <TimeSeriesEditsChart userData={Object.values(this.state.accumulatedUserTimeseriesData)} />
              </div>
              <div style={{ marginTop: '50px' }}>
                {haveUserData &&
                  <Table
                    idMap={this.state.userIdMap}
                    tableSchema={osmesaUserStatSchema}
                    notSortable={true}
                    data={Object.values(this.state.accumulatedUserTimeseriesData)}
                    totals={{}}
                  />
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}