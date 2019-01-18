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
    this.handleCompletenessChange = this.handleCompletenessChange.bind(this)
    this.handleValidationChange = this.handleValidationChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (event) {
    this.props.handleCampaignsSearch(event.target.value)
  }

  handleCompletenessChange (completeness) {
    this.props.handleCampaignsCompletenessChange(completeness)
  }

  handleValidationChange (validation) {
    this.props.handleCampaignsValidationChange(validation)
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
    const { page, searchText } = this.props.campaigns
    const { records: { total, records, all_count }, apiStatus } = this.props.campaigns

    return (
      <div className='Campaigns'>
        <header className='header--internal--green header--page'>
          <div className='row'>
            <h1 className='section-sub--left header--xlarge margin-top-sm'>Campaigns</h1>
            <ul className='section-sub--right'>
              <li className='list--inline'>
                <span className='descriptor-chart'>Campaigns</span>
                <span className='num--large'>{all_count}</span>
              </li>
            </ul>
          </div>
        </header>
        <section className='section--tertiary'>
          <div className='row'>
            <div className='sidebar'>
              <h3 className='header--medium'>Filter</h3>
              <CampaignFilters
                handleCompletenessChange={this.handleCompletenessChange}
                handleValidationChange={this.handleValidationChange}
                handleSearch={this.handleSearch}
                searchText={searchText}
              />
            </div>
            <div className='content--with-sidebar'>
              <CampaignsListing records={records} apiStatus={apiStatus} total={total} />
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
