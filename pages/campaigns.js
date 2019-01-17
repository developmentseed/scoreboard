import React, { Component } from 'react'
import queryString from 'query-string'
import Pagination from 'react-js-pagination'
import CampaignFilters from '../components/CampaignFilters'
import CampaignsListing from '../components/CampaignsListing'

import { actions } from '../lib/store'
import { connect } from 'unistore/react'
export class Campaigns extends Component {
  constructor () {
    super()

    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (event) {
    this.props.handleCampaignsSearch(event.target.value)
  }

  handleFilterChange (completeness) {
    this.props.handleCampaignsFilterChange(completeness)
  }

  handlePageChange (pageNumber) {
    this.setState({ records: {} })
    window.scrollTo(0, 0)
    this.props.handleCampaignsPageChange(pageNumber || 1)
  }

  componentDidMount () {
    if (this.props.location) {
      let { page } = queryString.parse(this.props.location.search)
      this.props.handleCampaignsPageChange(page || 1)
    } else {
      this.props.handleCampaignsPageChange(1)
    }
  }

  render () {
    const { page, searchText, compl_min, compl_max } = this.props.campaigns
    const { records: { total, records, allCount }, apiStatus } = this.props.campaigns

    return (
      <div className='Campaigns'>
        <header className='header--internal--green header--page'>
          <div className='row'>
            <h1 className='header--xlarge'>Campaigns</h1>
          </div>
        </header>
        <section>
          <div className='row widget-container'>
            <div className='widget-25'>
              <h3 className='header--medium'>Filter</h3>
              <CampaignFilters
                handleFilterChange={this.handleFilterChange}
                handleSearch={this.handleSearch}
                searchText={searchText}
                completeness={{ compl_min, compl_max }}
              />
            </div>
            <div className='widget-75'>
              <CampaignsListing records={records} apiStatus={apiStatus} total={total} allCount={allCount} />
              <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={total}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
              />
            </div>
          </div>
        </section>
      </div>
    )
  }
};

export default connect(['campaigns'], actions)(Campaigns)
