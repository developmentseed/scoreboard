import React, { Component } from 'react'
import Pagination from 'react-js-pagination'
import AllUsersTable from '../components/users/AllUsersTable'
import { actions } from '../lib/store'
import { connect } from 'unistore/react'
import dynamic from 'next/dynamic'
import ScoreboardPanel from '../components/ScoreboardPanel'
import { formatDecimal, formatUpdateDescription } from '../lib/utils/format'

const AllUsersFilter = dynamic(() => import('../components/users/AllUsersFilter'), { ssr: false })

export class Users extends Component {
  constructor (props) {
    super(props)

    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSortSelect = this.handleSortSelect.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleActiveSelect = this.handleActiveSelect.bind(this)
  }

  componentDidMount () {
    this.props.resetUser()
    if (!this.props.usersSearchResults || !Object.keys(this.props.usersSearchResults.stats).length) {
      this.props.usersPageChange(1)
    }
  }

  handleSearch (event) {
    this.props.usersSearch(event.target.value)
  }

  handleSelect (selectedOption) {
    this.props.usersChangeCountry(selectedOption || null)
  }

  handleSortSelect (selectedOption) {
    this.props.usersChangeSelectedSort(selectedOption || null)
  }

  handlePageChange (pageNumber) {
    window.scrollTo(0, 0)
    this.props.usersPageChange(pageNumber || 1)
  }

  handleActiveSelect (selectedOption) {
    this.props.usersChangeActiveSelect(selectedOption || null)
  }

  render () {
    const {
      searchText,
      selectedValue,
      selectedSortValue,
      selectedActive,
      page
    } = this.props.usersFilters

    const { stats, apiStatus } = this.props.usersSearchResults

    const { total, records, subTotal, editTotal, countries, active, refreshDate } = stats

    return (
      <div className='Users'>
        <header className='header--internal--green header--page'>
          <div className='row'>
            <div className='section-sub--left section-width-forty'>
              <h1 className='header--xlarge'>Users</h1>
            </div>
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
        <ScoreboardPanel title='' facets={[
          { label: 'Rep. Countries', value: (countries && countries.length) || 0 },
          { label: 'Active Mappers', value: formatDecimal(active) },
          { label: 'Total Mappers', value: formatDecimal(total) },
          { label: 'Total Edits', value: formatDecimal(editTotal) }
        ]} />
        <section>
          <div className='row widget-container'>
            <AllUsersFilter
              handleSearch={this.handleSearch}
              handleSelect={this.handleSelect}
              handleSortSelect={this.handleSortSelect}
              searchText={searchText}
              selectedValue={selectedValue}
              selectedSortValue={selectedSortValue}
              selectedActive={selectedActive}
              handleActiveSelect={this.handleActiveSelect}
              countries={countries || []}
            />
            <div className='widget-75'>
              <h3 className='header--medium'>{subTotal} Mappers</h3>
              <AllUsersTable users={records} apiStatus={apiStatus} />
              <Pagination
                activePage={page}
                itemsCountPerPage={25}
                totalItemsCount={subTotal}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
              />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

// export default () => 'div />'
export default connect(['usersFilters', 'usersSearchResults', 'user'], actions)(Users)
