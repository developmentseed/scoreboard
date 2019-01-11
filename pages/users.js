import React, { Component } from 'react'
import queryString from 'query-string'
import Pagination from 'react-js-pagination'
import AllUsersTable from '../components/AllUsersTable'
import { actions } from '../lib/store'
import { connect } from 'unistore/react'
import dynamic from 'next/dynamic'
import AllUsersHeader from '../components/AllUsersHeader'

const AllUsersFilter = dynamic(() => import('../components/AllUsersFilter'), { ssr: false })

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
    if (this.props.location) {
      let { page } = queryString.parse(this.props.location.search)
      this.props.changePage(page || 1)
    }
    this.props.changePage(1)
  }

  handleSearch (event) {
    this.props.changeSearchText(event.target.value)
  }

  handleSelect (selectedOption) {
    this.props.changeCountry(selectedOption || null)
  }

  handleSortSelect (selectedOption) {
    this.props.changeSelectedSort(selectedOption || null)
  }

  handlePageChange (pageNumber) {
    this.setState({ records: {} })
    window.scrollTo(0, 0)
    this.props.changePage(pageNumber || 1)
  }

  handleActiveSelect (selectedOption) {
    this.props.handleActiveSelect(selectedOption || null)
  }

  render () {
    const {
      searchText,
      selectedValue,
      selectedSortValue,
      selectedActive,
      page,
      stats,
      apiStatus
    } = this.props.users
    if (!this.props.users) {
      return <div />
    }

    const { total, records, subTotal, editTotal, countries, active } = stats

    return (
      <div className='Users'>
        <AllUsersHeader countries={countries} totalUsers={total} activeUsers={active} edits={editTotal} />
        <section>
          <div className='row'>
            <AllUsersFilter
              handleSearch={this.handleSearch}
              handleSelect={this.handleSelect}
              handleSortSelect={this.handleSortSelect}
              selectedValue={selectedValue}
              selectedSortValue={selectedSortValue}
              searchText={searchText}
              selectedActive={selectedActive}
              handleActiveSelect={this.handleActiveSelect}
              countries={countries || []}
            />
            <div className='content--with-sidebar'>
              <h3 className='header--medium'>{subTotal} Mappers</h3>
              <AllUsersTable users={records} apiStatus={apiStatus} />
              <Pagination
                activePage={page}
                itemsCountPerPage={25}
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
}

// export default () => 'div />'
export default connect(['users'], actions)(Users)
