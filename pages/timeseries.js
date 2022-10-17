import React, { Component } from 'react'
import Select, { Async } from 'react-select'
import fetch, { createApiUrl } from '../lib/utils/api'
import Table from '../components/common/Table'
import TimeSeriesEditsChart from '../components/charts/TimeSeriesEditsChart'
import { Duration, DateTime } from 'luxon'
import CSVExport from '../components/CSVExport'
import debounce from 'lodash.debounce'
import { AllSubstringsIndexStrategy, Search, UnorderedSearchIndex } from 'js-search'

const apiHeaderCrosswalk = {
  counts: {
    buildings: 'buildings_add_mod',
    pois: 'poi_add_mod'
  },
  measurements: {
    road: 'km_roads_add_mod',
    railline: 'km_railways_add_mod',
    waterway: 'km_waterways_add_mod',
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
  waterway_km_added: 'km_waterways_add',
  waterway_km_modified: 'km_waterways_mod'
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

function fetchTeams () {
  return fetch(createApiUrl('/api/teams', {}), { credentials: 'include' })
    .then(async res => {
      if (res.status === 200) {
        const { teams } = await res.json()
        return teams.reduce((teamsConfig, { name, id, members, moderators }) => {
          teamsConfig.teamsList.push({ label: name, value: id })
          teamsConfig.teamsLookup[id] = [...members, ...moderators]
          return teamsConfig
        }, { teamsList: [], teamsLookup: {} })
      } else {
        throw new Error('failed to get user data')
      }
    })
    .catch((error) => {
      console.log(error)
      return []
    })
}

function fetchCountries () {
  return fetch(createApiUrl('/api/countries', {}))
    .then(async res => {
      if (res.status === 200) {
        const results = await res.json()
        return results.records.map(({ name, code }) => { return { label: name, value: code } })
      } else {
        throw new Error('failed to get country data')
      }
    })
    .catch((error) => {
      console.log(error)
      return []
    })
}

function fetchUsers () {
  return fetch(createApiUrl('/api/users', {}), { credentials: 'include' })
    .then(async res => {
      if (res.status === 200) {
        const results = await res.json()
        return results.map(({ osm_id, full_name }) => {
          return { label: full_name, value: osm_id }
        })
      } else {
        throw new Error('failed to get user data')
      }
    })
    .catch((error) => {
      console.log(error)
      return []
    })
}

const APPLY_MESSAGE = 'Apply a country or user filter'
const NO_RESPONSE_MESSAGE = 'Supplied query returns no results'
const RESPONSE_MESSAGE = (startDate, endDate) => `Edits from ${startDate.split('T')[0]} to ${endDate.split('T')[0]}`

export default class TimeSeries extends Component {
  constructor () {
    super()
    this.state = {
      headerMessage: APPLY_MESSAGE,
      startDate: new Date(new Date().setMonth(new Date().getMonth() - (4 * 12))).toISOString().split('T')[0],
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
      debouncedLoadOptions: { usersList: () => {} },
      accumulatedUserTimeseriesData: {},
      userIdMap: {},
      requestInflight: false
    }
  }

  filterRangeUnits () {
    let duration = DateTime.fromISO(this.state.endDate).diff(DateTime.fromISO(this.state.startDate))
    const filteredUnits = []

    if (duration.as('years') >= 1) { filteredUnits.push({ label: 'Years', value: 'Y' }) }
    if (duration.as('months') >= 1) { filteredUnits.push({ label: 'Months', value: 'M' }) }
    if (duration.as('weeks') >= 1) { filteredUnits.push({ label: 'Weeks', value: 'W' }) }
    if (duration.as('years') <= 0.5) { filteredUnits.push({ label: 'Days', value: 'D' }) }

    return filteredUnits
  }

  getInitialRangeUnit () {
    let duration = DateTime.fromISO(this.state.endDate).diff(DateTime.fromISO(this.state.startDate))

    if (duration.as('years') >= 1) {
      return 'Y'
    } else if (duration.as('months') >= 6) {
      return 'M'
    } else if (duration.as('months') >= 1) {
      return 'W'
    } else {
      return 'D'
    }
  }

  componentDidMount () {
    this.setState({
      rangeUnits: this.filterRangeUnits(),
      rangeUnit: this.getInitialRangeUnit()
    })
    this.initializeFilters()
  }

  async initializeFilters () {
    const [countries, users, { teamsList, teamsLookup }] = await Promise.all([
      fetchCountries(),
      fetchUsers(),
      fetchTeams()
    ])

    function loadOptions (jsSearch) {
      return debounce((searchTerm, callback) => {
        callback(null, { options: jsSearch.search(searchTerm) })
      }, 300)
    }

    const debouncedLoadOptions = this.state.debouncedLoadOptions

    Object.keys(debouncedLoadOptions).forEach(list => {
      const search = new Search('label')
      search.searchIndex = new UnorderedSearchIndex()
      search.indexStrategy = new AllSubstringsIndexStrategy()
      search.addIndex('label')
      search.addDocuments(users)
      debouncedLoadOptions[list] = loadOptions(search)
    })

    this.setState({
      countriesList: countries,
      usersList: users,
      teamsList: teamsList,
      debouncedLoadOptions: debouncedLoadOptions,
      teamsLookup: teamsLookup
    })
  }

  buildBinInterval (nextState) {
    if (!nextState.rangeValue.length || Number.isNaN(nextState.rangeValue)) { return null }

    const interval = nextState.rangeUnits.find(({ value }) => value === nextState.rangeUnit)

    if (interval === undefined) { return null }

    const duration = Duration.fromObject({ [interval.label]: nextState.rangeValue })

    if (duration.toMillis() <= 0) { return null }

    return duration.toISO()
  }

  async updateTimeseriesData (nextState) {
    const queryParams = {
      startDate: nextState.startDate,
      endDate: nextState.endDate
    }

    const validBinInterval = this.buildBinInterval(nextState)

    if (validBinInterval === null) { // do not send request if user did not specify a time unit
      return
    }

    queryParams.binInterval = validBinInterval

    const countries = Object.keys(nextState.countries)
    const users = Object.keys(nextState.users)
    const teams = Object.keys(nextState.teams)

    const queryUsers = []

    if (countries.length) queryParams.countriesFilter = countries.join('|')
    if (users.length) queryUsers.push(...users)
    if (teams.length) teams.forEach(teamId => queryUsers.push(...this.state.teamsLookup[teamId]))

    if (queryUsers.length) { queryParams.userIdsFilter = queryUsers.filter((u, idx) => queryUsers.indexOf(u) === idx).join('|') }

    const nextTimeseriesData = await fetch(createApiUrl('/api/timeseries', queryParams))
      .then(async res => {
        if (res.status === 200) {
          const results = await res.json()
          return results
        } else {
          throw new Error('failed to get country data')
        }
      })
      .catch((error) => {
        console.log(error)
        return { bins: [] }
      })

    // accumulate the timeseries data for users
    const accumulatedUserTimeseriesData = {}
    const timeseriesData = []
    const userIdMap = {}
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
      } = bin

      timeseriesData.push(
        Object.assign({
          name: name,
          bin_start: bin_start,
          bin_end: bin_end,
          edit_count: edit_count,
          changeset_count: changeset_count
        },
        Object.keys(measurements).reduce((crossWalked, k) => { crossWalked[csvCrosswalk[k]] = measurements[k]; return crossWalked }, {
          km_roads_add: 0,
          km_roads_mod: 0,
          km_railways_add: 0,
          km_railways_mod: 0,
          km_coastlines_add: 0,
          km_coastlines_mod: 0,
          km_waterways_add: 0,
          km_waterways_mod: 0
        }),
        Object.keys(counts).reduce((crossWalked, k) => { crossWalked[csvCrosswalk[k]] = counts[k]; return crossWalked }, {
          buildings_add: 0,
          buildings_mod: 0,
          poi_add: 0,
          poi_mod: 0
        }))
      )

      const accumulatedUserStats = accumulatedUserTimeseriesData[user_id] || {
        name: name,
        km_roads_add_mod: 0,
        buildings_add_mod: 0,
        poi_add_mod: 0,
        km_railways_add_mod: 0,
        km_waterways_add_mod: 0,
        km_coastlines_add_mod: 0,
        edit_count: 0,
        changeset_count: 0
      }

      userIdMap[name] = user_id

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
          const key = count.split('_')[0]
          if (apiHeaderCrosswalk.counts.hasOwnProperty(key)) {
            accumulatedUserStats[apiHeaderCrosswalk.counts[key]] += counts[count]
          }
        }
      })

      accumulatedUserStats.edit_count += edit_count
      accumulatedUserStats.changeset_count += changeset_count
      accumulatedUserTimeseriesData[user_id] = accumulatedUserStats
    })

    let nextHeaderMessage = ''
    if (timeseriesData.length) {
      nextHeaderMessage = RESPONSE_MESSAGE(nextState.startDate, nextState.endDate)
    } else if (users.length || countries.length || teams.length) {
      nextHeaderMessage = NO_RESPONSE_MESSAGE
    } else {
      nextHeaderMessage = APPLY_MESSAGE
    }

    this.setState(Object.assign(nextState, {
      headerMessage: nextHeaderMessage,
      accumulatedUserTimeseriesData: accumulatedUserTimeseriesData,
      timeseriesData: timeseriesData.sort((userA, userB) => userA.name.localeCompare(userB.name)),
      requestInFlight: false,
      userIdMap: userIdMap
    }))
  }

  onInputChange ({ id, value }) {
    const nextState = this.state
    nextState[id] = value
    this.updateTimeseriesData(nextState)
  }

  onMultiSelectChange (id, selected) {
    const nextState = this.state
    nextState[id] = selected.reduce((next, { value }) => {
      next[value] = true
      return next
    }, {})
    this.updateTimeseriesData(nextState)
  }

  render () {
    const haveUserData = this.state.timeseriesData && this.state.timeseriesData.length > 0
    const containerStyle = {}
    const rightWidgetStyle = {}

    if (!haveUserData) {
      containerStyle.justifyContent = 'start'
      rightWidgetStyle.marginLeft = '10px'
    }

    return (
      <div className='Timeseries'>
        <section>
          <div className='row widget-container' style={containerStyle}>
            <div class='widget-10' style={{ maxWidth: '25%' }}>
              <form>
                <fieldset>
                  <legend>Start date</legend>
                  <input className='input--text' id='startDate' type='date' value={this.state.startDate} onChange={evt => this.onInputChange(evt.target)} />
                </fieldset>
                <fieldset>
                  <legend>End date</legend>
                  <input className='input--text' id='endDate' type='date' value={this.state.endDate} onChange={evt => this.onInputChange(evt.target)} />
                </fieldset>
                <fieldset>
                  <legend>Interval</legend>
                  <input className='form__input-unit input--text'
                    id='rangeValue'
                    min='1'
                    type='number'
                    value={this.state.rangeValue}
                    onChange={evt => this.onInputChange(evt.target)} />
                  <Select
                    value={this.state.rangeUnit}
                    onChange={(e) => this.onInputChange({ id: 'rangeUnit', value: e.value })}
                    id='rangeUnit'
                    clearable={false}
                    options={this.state.rangeUnits} />
                </fieldset>
                <fieldset>
                  <legend>Users</legend>
                  <Async
                    multi
                    value={Object.keys(this.state.users).map(uid => { const nUid = Number(uid); return this.state.usersList.find(({ value }) => value === nUid) })}
                    onChange={(clicked) => this.onMultiSelectChange('users', clicked)}
                    loadOptions={this.state.debouncedLoadOptions.usersList}
                    id='users'
                    options={this.state.usersList}
                    className='basic-multi-select'
                    classNamePrefix='select' />
                </fieldset>
                <fieldset>
                  <legend>Teams</legend>
                  <Select
                    multi
                    value={Object.keys(this.state.teams)}
                    onChange={(clicked) => this.onMultiSelectChange('teams', clicked)}
                    id='teams'
                    options={this.state.teamsList}
                    className='basic-multi-select'
                    classNamePrefix='select' />
                </fieldset>
                <fieldset>
                  <legend>Countries</legend>
                  <Select
                    multi
                    value={Object.keys(this.state.countries)}
                    onChange={(clicked) => this.onMultiSelectChange('countries', clicked)}
                    id='users'
                    options={this.state.countriesList}
                    className='basic-multi-select'
                    classNamePrefix='select' />
                </fieldset>
                <fieldset>
                  {haveUserData && <CSVExport filename='timeseries.csv' data={this.state.timeseriesData} />}
                </fieldset>
              </form>
            </div>
            <div className='widget-90' style={rightWidgetStyle}>
              <h3 className='header--small'>{this.state.headerMessage}</h3>
              <div className='chart' style={{ height: '400px', marginBottom: '50px' }}>
                <TimeSeriesEditsChart userData={Object.values(this.state.accumulatedUserTimeseriesData)} />
              </div>
              <div style={{ marginTop: '50px' }}>
                {haveUserData &&
                  <Table
                    idMap={this.state.userIdMap}
                    tableSchema={osmesaUserStatSchema}
                    notSortable
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
