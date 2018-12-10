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
    this.props.addCampaign(campaign)
  }

  onSelectedCampaignClick (campaign) {
    this.props.removeCampaign(campaign)
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

    return (
      <div>
        {
          (selectedCampaigns.length > 0)
            ? (<section className='section-sub'>
              <h1>Assigned</h1>
              <table className='admin-table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCampaigns.map(record => (
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
        <section className='section-sub'>
          <h1>Task list</h1>
          <div>
            <fieldset>
              <legend>Search</legend>
              <div className='search'>
                <input className='input--text' onChange={this.handleSearch} />
              </div>
            </fieldset>
          </div>
          <div className=''>
            <table className='admin-table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                {records.map(record => {
                  let isAssigned = false
                  selectedCampaigns.forEach(task => {
                    if (record.id === task.id) isAssigned = true
                  })

                  return <tr key={`campaign-${record.name}`} onClick={isAssigned ? null : () => this.onSearchCampaignClick(record)} className={isAssigned ? 'admin-table-row-alt' : 'admin-table-row'} >
                    <td>{`${record.name} - project-${(record.tm_id || record.id)}`}</td>
                    <td>{record.priority}</td>
                  </tr>
                })
                }
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
