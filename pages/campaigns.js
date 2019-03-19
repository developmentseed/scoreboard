import React, { Component } from 'react'
import queryString from 'query-string'
import Pagination from 'react-js-pagination'
import CampaignFilters from '../components/campaigns/CampaignFilters'
import CampaignsListing from '../components/campaigns/CampaignsListing'
import { formatUpdateDescription } from '../lib/utils/format'

import { actions } from '../lib/store'
import { connect } from 'unistore/react'
export class Campaigns extends Component {
  constructor () {
    super()

    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleCompletenessChange = this.handleCompletenessChange.bind(this)
    this.handleValidationChange = this.handleValidationChange.bind(this)
    this.handleSelectTM = this.handleSelectTM.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleCampaignsSortChange = this.handleCampaignsSortChange.bind(this)
  }

  handleSearch (event) {
    this.props.handleCampaignsSearch(event.target.value)
  }

  handleSelectTM (selectedTM) {
    this.props.handleSelectTM(selectedTM)
  }

  handleCompletenessChange (completeness) {
    this.props.handleCampaignsCompletenessChange(completeness)
  }

  handleCampaignsSortChange (selectedOption) {
    this.props.handleCampaignsSortChange(selectedOption)
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
    const {
      page,
      searchText,
      records: { total, records, allCount, tms, refreshDate },
      apiStatus,
      selectedTM,
      sortOrder
    } = this.props.campaigns
    if (!records) {
      return <div />
    }

    return (
      <div className='Campaigns'>
        <header className='header--internal--green header--page'>
          <div className='row'>
            <h1 className='header--xlarge'>Campaigns</h1>
            <div className='section-sub--right'>
              <ul>
                <li className='list--inline refresh'>
                  <span className='list-label'>Last refreshed: </span>
                  <span>{formatUpdateDescription(refreshDate)}</span>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <section>
          <div className='row widget-container'>
            <div className='widget-25'>
              <h3 className='header--medium'>Filter</h3>
              <CampaignFilters
                handleCompletenessChange={this.handleCompletenessChange}
                handleValidationChange={this.handleValidationChange}
                handleSortChange={this.handleCampaignsSortChange}
                handleSelectTM={this.handleSelectTM}
                tmList={tms}
                selectedTM={selectedTM}
                sortOrder={sortOrder}
                handleSearch={this.handleSearch}
                searchText={searchText}
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
