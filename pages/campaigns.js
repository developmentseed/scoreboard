import React, { Component } from 'react'
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
    this.handleReset = this.handleReset.bind(this)
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
    window.scrollTo(0, 0)
    this.props.handleCampaignsPageChange(pageNumber || 1)
  }

  handleReset () {
    this.props.handleCampaignsFiltersReset()
  }

  componentDidMount () {
    if (!this.props.campaignSearchResults || !Object.keys(this.props.campaignSearchResults.records).length) {
      this.props.handleCampaignsPageChange(1)
    }
  }

  render () {
    const {
      page,
      searchText,
      selectedTM,
      compl_min,
      compl_max,
      valid_min,
      valid_max,
      sortOrder
    } = this.props.campaigns

    const {
      records: { total, records, allCount, tms, refreshDate },
      apiStatus
    } = this.props.campaignSearchResults

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
                handleReset={this.handleReset}
                tmList={tms || []}
                complMin={compl_min}
                complMax={compl_max}
                validMin={valid_min}
                validMax={valid_max}
                selectedTM={selectedTM}
                sortOrder={sortOrder}
                handleSearch={this.handleSearch}
                searchText={searchText}
              />
            </div>
            <div className='widget-75'>
              {
                records &&
                <>
                  <CampaignsListing records={records} apiStatus={apiStatus} total={total} allCount={allCount} />
                  <Pagination
                    activePage={page}
                    itemsCountPerPage={10}
                    totalItemsCount={total}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                  />
                </>
              }
            </div>
          </div>
        </section>
      </div>
    )
  }
};

export default connect(['campaigns', 'campaignSearchResults'], actions)(Campaigns)
