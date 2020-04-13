import Pagination from 'react-js-pagination'
import React, { Component, useEffect } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../../lib/store'
import { includes, sortBy, prop } from 'ramda'
import Table from '../common/Table'

import Select from 'react-select'

const searchCampaignsSchema = {
  'headers': {
    'name': { type: 'string', accessor: 'name' },
    'campaign-hashtag': { type: 'string', accessor: 'campaign_hashtag' },
    'button': { type: 'string', accessor: 'button' }
  },
  columnOrder: ['name', 'team-priority', 'button'],
  displaysTooltip: ['user-id']
}

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

function SelectedCampaignsTable (props) {
  let assignments = sortBy(prop('id'), props.campaigns).map(record =>
    <Assignment record={record}
      handleChange={props.addCampaign}
      handleRemove={props.removeCampaign}
    />
  )
  return <section>
    <table>
      {assignments}
    </table>
  </section>
}

function CampaignSearch (props) {
  // Initialize
  useEffect(() => {
    props.adminTeamCampaignsSearch('')
  }, [])

  const { campaigns } = props
  const { page, searchText } = props.adminTeamCampaignsFilters
  const { records: { total, records } } = props.adminTeamCampaignsSearchResults
  if (!records || !campaigns) return <div>Error loading</div>

  const selectedIds = campaigns.map(prop('campaign_id'))

  const searchCampaigns = records.map(record => {
    if (includes(record.id, selectedIds)) {
      return Object.assign(record, {
        button: <div />
      })
    }
    return Object.assign(record, {
      button: <button style={{ 'padding': '5px' }} className='button' onClick={() => props.addCampaign(record)}>Add</button>
    })
  })

  return (
    <div>
      <SelectedCampaignsTable
        campaigns={campaigns}
        addCampaign={props.addCampaign}
        removeCampaign={props.removeCampaign}
      />
      <section className='section-sub'>
        <h1>Task list</h1>
        <div>
          <fieldset>
            <legend>Search</legend>
            <div className='search'>
              <input className='input--text' onChange={
                (e) => props.adminTeamCampaignsSearch(e.target.value)
              } value={searchText} />
            </div>
          </fieldset>
        </div>
        <div className='widget'>
          <Table tableSchema={searchCampaignsSchema} data={searchCampaigns} />
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={total}
            pageRangeDisplayed={5}
            onChange={no => props.adminTeamCampaignsSearch(no || 1)}
          />
        </div>
      </section>
    </div>
  )
}

export default connect(['adminTeamCampaignsSearchResults', 'adminTeamCampaignsFilters'], actions)(CampaignSearch)
