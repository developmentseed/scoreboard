import React, { Component } from 'react'
import '../styles/Campaigns.scss'
import api, { createApiUrl } from '../lib/utils/api'
import queryString from 'query-string'
import Pagination from 'react-js-pagination'
import CampaignFilters from '../components/CampaignFilters'
import CampaignsListing from '../components/CampaignsListing'

const initialState = {
  searchText: '',
  compl_min: 0,
  compl_max: 100,
  page: 1
}

const campaignsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PAGE_CHANGE':
      return Object.assign(state, { page: action.page })
    case 'SEARCH_TEXT_CHANGE':
      return Object.assign(state, { searchText: action.searchText, page: 1 })
    case 'COMPLETENESS_FILTER_CHANGE': {
      const { min: compl_min, max: compl_max } = action.completeness
      return Object.assign(state, { compl_min, compl_max, page: 1 })
    }
    default:
      return state
  }
}

class Campaigns extends Component {
  constructor () {
    super()
    this.state = {
      records: {},
      apiStatus: 'LOADING',
      ...initialState
    }
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  dispatch (action) {
    const state = this.state
    const newState = campaignsReducer(state, action)

    this.setState(Object.assign(newState, { apiStatus: 'LOADING' }))
    let { searchText: q, page, compl_min, compl_max } = newState

    api('get', createApiUrl('/api/campaigns', { q, page, compl_min, compl_max }))
      .then(res => {
        this.setState(Object.assign({ records: res.data, apiStatus: 'SUCCESS' }))
      })
      .catch(err => {
        this.setState({ apiStatus: 'ERROR' })
      })
  }

  handleSearch (event) {
    this.dispatch({ type: 'SEARCH_TEXT_CHANGE', searchText: event.target.value })
  }

  handleFilterChange (completeness) {
    this.dispatch({ type: 'COMPLETENESS_FILTER_CHANGE', completeness })
  }

  handlePageChange (pageNumber) {
    this.setState({ records: {} })
    window.scrollTo(0, 0)
    this.dispatch({ type: 'PAGE_CHANGE', page: pageNumber || 1 })
  }

  componentDidMount () {
    if (this.props.location) {
      let { page } = queryString.parse(this.props.location.search)
      this.dispatch({ type: 'PAGE_CHANGE', page: page || 1 })
    }
  }

  render () {
    const { page, records: { total, records, all_count }, searchText, compl_min, compl_max, apiStatus } = this.state
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
                handleFilterChange={this.handleFilterChange}
                handleSearch={this.handleSearch}
                searchText={searchText}
                completeness={{ compl_min, compl_max }}
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

export default Campaigns
