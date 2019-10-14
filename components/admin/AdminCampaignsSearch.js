import Pagination from 'react-js-pagination'
import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../../lib/store'
import Select from 'react-select'
import { Tooltip } from '../common/Tooltip'

const tableHeaders = require('../../lib/page-text/table-headers.json')

class Assignment extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleChange (selectedOption) {
    let record = Object.assign({}, this.props.record, { team_priority: selectedOption })
    this.props.handleChange(record)
  }

  handleRemove () {
    this.props.handleRemove(this.props.record)
  }

  render () {
    const record = this.props.record
    const { team_priority } = record

    // Select
    let selector = <Select
      simpleValue
      value={team_priority}
      onChange={this.handleChange}
      options={[
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' }
      ]}
    />

    return (
      <tr key={`campaign-${record.name}`} className='admin-table-row'>
        <td>{`${record.name} - project-${(record.tm_id || record.id)}`}</td>
        <td><div style={{ 'padding': '5px' }}>{ selector }</div></td>
        <td><button style={{ 'padding': '5px' }} className='button' onClick={() => this.handleRemove(record)} >Remove</button></td>
      </tr>
    )
  }
}

class CampaignSearch extends Component {
  constructor (props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.onSearchCampaignClick = this.onSearchCampaignClick.bind(this)
    this.onSelectedCampaignClick = this.onSelectedCampaignClick.bind(this)
    this.onTaskPriorityChange = this.onTaskPriorityChange.bind(this)
  }

  handleSearch (event) {
    this.props.adminTeamCampaignsSearch(event.target.value)
  }

  onSearchCampaignClick (campaign) {
    this.props.addCampaign(campaign)
  }

  onSelectedCampaignClick (campaign) {
    this.props.removeCampaign(campaign)
  }

  handlePageChange (pageNumber) {
    this.props.adminTeamCampaignsPageChange(pageNumber || 1)
  }

  onTaskPriorityChange (campaign) {
    this.props.addCampaign(campaign)
  }

  componentDidMount () {
    this.props.adminTeamCampaignsPageChange(1)
  }

  render () {
    const { selectedCampaigns } = this.props
    const { page, searchText } = this.props.adminTeamCampaignsFilters
    const { records: { total, records } } = this.props.adminTeamCampaignsSearchResults
    if (!records || !selectedCampaigns) return <div />

    let assignments = selectedCampaigns.map(record =>
      <Assignment record={record}
        handleChange={this.onTaskPriorityChange}
        handleRemove={this.onSelectedCampaignClick}
      />
    )

    return (
      <div>
        {
          (selectedCampaigns.length > 0)
            ? (<section className='section-sub'>
              <h1>Assigned</h1>
              <table className='admin-table'>
                <thead>
                  <tr>
                    {tableHeaders
                      .filter(table => table.categories.includes('admin-campaign-contributions'))
                      .map(header => (
                        <th>
                          <Tooltip dataTip={header.description_en}>{header.name_en}</Tooltip>
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {assignments}
                </tbody>
              </table>
            </section>)
            : <div />
        }
        <section className='section-sub'>
          <h1>Task list</h1>
          <div>
            <fieldset>
              <legend>Search</legend>
              <div className='search'>
                <input className='input--text' onChange={this.handleSearch} value={searchText} />
              </div>
            </fieldset>
          </div>
          <div className=''>
            <table className='admin-table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Task Priority</th>
                </tr>
              </thead>
              <tbody>
                {records.map(record => {
                  let isAssigned = false
                  selectedCampaigns.forEach(task => {
                    if (record.id === task.id) isAssigned = true
                  })

                  return <tr key={`campaign-${record.id}`} onClick={isAssigned ? null : () => this.onSearchCampaignClick(record)} className={isAssigned ? 'admin-table-row-alt' : 'admin-table-row'} >
                    <td>{`${record.name} - project-${(record.tm_id || record.id)}`}</td>
                    <td>{record.priority}</td>
                  </tr>
                })
                }
              </tbody>
            </table>
            <Pagination
              activePage={page}
              itemsCountPerPage={10}
              totalItemsCount={total}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            />
          </div>
        </section>
      </div>
    )
  }
}

export default connect(['adminTeamCampaignsSearchResults', 'adminTeamCampaignsFilters'], actions)(CampaignSearch)
