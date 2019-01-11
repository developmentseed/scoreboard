import React, { Component } from 'react'
import queryString from 'query-string'
import AllCountriesTable from '../components/AllCountriesTable'
import { actions } from '../lib/store'
import { connect } from 'unistore/react'
import dynamic from 'next/dynamic'
import AllCountriesHeader from '../components/AllCountriesHeader'

const AllCountriesFilter = dynamic(() => import('../components/AllCountriesFilter'), { ssr: false })

export class Countries extends Component {
  constructor (props) {
    super(props)

    this.state = {
      records: {},
      apiStatus: 'LOADING',
      searchText: '',
      page: 1,
      selectedValue: null,
      selectedSortValue: null
    }

    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleSortSelect = this.handleSortSelect.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount () {
    if (this.props.location) {
      let { page } = queryString.parse(this.props.location.search)
      this.props.changeCountryPage(page || 1)
    }
    this.props.changeCountryPage(1)
  }

  handleSearch (event) {
    this.props.changeCountrySearchText(event.target.value)
  }

  handleSortSelect (selectedOption) {
    this.props.changeCountrySelectedSort(selectedOption || null)
  }

  handlePageChange (pageNumber) {
    this.setState({ records: {} })
    window.scrollTo(0, 0)
    this.props.changeCountryPage(pageNumber || 1)
  }

  render () {
    const {
      searchText,
      selectedSortValue,
      stats,
      apiStatus
    } = this.props.countries
    if (!this.props.countries) {
      return <div />
    }

    const { total, records, subTotal, editTotal } = stats

    return (
      <div className='Countries'>
        <AllCountriesHeader countries={total} edits={editTotal} />
        <section>
          <div className='row'>
            <AllCountriesFilter
              handleSearch={this.handleSearch}
              handleSortSelect={this.handleSortSelect}
              selectedSortValue={selectedSortValue}
              searchText={searchText}
            />
            <div className='content--with-sidebar'>
              <h3 className='header--medium'>{subTotal} Countries</h3>
              <AllCountriesTable countries={records} apiStatus={apiStatus} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

// export default () => 'div />'
export default connect(['countries'], actions)(Countries)
