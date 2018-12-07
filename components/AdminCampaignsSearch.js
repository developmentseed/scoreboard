import Pagination from 'react-js-pagination'
import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'

class CampaignSearch extends Component {
  constructor (props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.onSearchCampaignClick = this.onSearchCampaignClick.bind(this)
    this.onSelectedCampaignClick = this.onSelectedCampaignClick.bind(this)
  }

  handleSearch (event) {
    this.props.handleCampaignsSearch(event.target.value)
  }

  onSearchCampaignClick (campaign) {
    this.props.addCampaign(campaign.id)
  }

  onSelectedCampaignClick (campaign) {
    this.props.removeCampaign(campaign.id)
  }

  handlePageChange (pageNumber) {
    this.props.handleCampaignsPageChange(pageNumber || 1)
  }

  componentDidMount () {
    this.props.handleCampaignsPageChange(1)
  }

  render () {
    if (!this.props.campaigns) return <div />

    const { selectedCampaigns } = this.props
    const { page } = this.props.campaigns
    const { records: { total, records } } = this.props.campaigns
    if (!records) return <div />

    let assigned = []
    records.forEach(record => {
      selectedCampaigns.forEach(id => {
        if (record.id === id) {
          assigned.push(record)
        }
      })
    })

    return (
      <div>
        {
          (selectedCampaigns.length > 0)
            ? (<section className=''>
              <h1>Assigned</h1>
              <table className='admin-table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {assigned.map(record => (
                    <tr key={`campaign-${record.name}`} onClick={() => this.onSelectedCampaignClick(record)} className='admin-table-row'>
                      <td>{`${record.name} - project-${(record.tm_id || record.id)}`}</td>
                      <td>{record.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>)
            : <div />
        }
        <section className=''>
          <h1>Unassigned</h1>
          <form onSubmit={e => e.preventDefault()}>
            <fieldset>
              <legend>Search</legend>
              <div className='search'>
                <input className='input--text' onChange={this.handleSearch} />
              </div>
            </fieldset>
          </form>
          <div className=''>
            <table className='admin-table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                {records.map(record => (
                  <tr key={`campaign-${record.name}`} onClick={() => this.onSearchCampaignClick(record)} className='admin-table-row'>
                    <td>{`${record.name} - project-${(record.tm_id || record.id)}`}</td>
                    <td>{record.priority}</td>
                  </tr>
                ))}
              </tbody>
              <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={total}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
              />
            </table>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(['campaigns'], actions)(CampaignSearch)
