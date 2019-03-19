import React, { Component } from 'react'
import queryString from 'query-string'
import AllCountriesTable from '../components/AllCountriesTable'
import { actions } from '../lib/store'
import { connect } from 'unistore/react'
import dynamic from 'next/dynamic'
import ScoreboardPanel from '../components/ScoreboardPanel'
import { formatDecimal, formatUpdateDescription } from '../lib/utils/format'

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

    const { total, records, subTotal, editTotal, refreshDate } = stats
    let label = `${subTotal} countries`
    if (parseInt(subTotal) < parseInt(total)) {
      label = `${subTotal} countries out of ${total}`
    }

    return (
      <div className='Countries'>
        <header className='header--internal--green header--page'>
          <div className='row'>
            <div className='section-sub--left section-width-forty'>
              <h1 className='header--xlarge'>Countries</h1>
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
          { label: 'Total Countries', value: formatDecimal(total) },
          { label: 'Total Edits', value: formatDecimal(editTotal) }
        ]} />
        <section>
          <div className='row widget-container'>
            <AllCountriesFilter
              handleSearch={this.handleSearch}
              handleSortSelect={this.handleSortSelect}
              selectedSortValue={selectedSortValue}
              searchText={searchText}
            />
            <div className='widget-75'>
              <h3 className='header--medium'>{label}</h3>
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
