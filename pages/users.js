import React, { Component } from 'react'
import '../styles/Users.scss'
import '../styles/Campaigns.scss'
import {equals, pick} from 'ramda'
import queryString from 'query-string'
import Pagination from 'react-js-pagination'
import AllUsersTable from '../components/AllUsersTable'
import api, { createApiUrl } from '../lib/utils/api'
import { actions } from '../lib/store'
import { connect } from 'unistore/react'
import dynamic from 'next/dynamic'
import AllUsersHeader from '../components/AllUsersHeader'

const AllUsersFilter = dynamic(() => import('../components/AllUsersFilter'), { ssr: false})

export class Users extends Component {
  constructor(props) {
    super(props)

    this.state = {
      records: {},
      apiStatus: 'LOADING',
      searchText: '', 
      page: 1, 
      selectedValue: null, 
      selectedSortValue: null, 
      selectedActive: false
    }

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSortSelect = this.handleSortSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggleActive = this.handleToggleActive.bind(this);
    this._handleChange = this._handleChange.bind(this)
  }

  componentDidMount () {
    if (this.props.location) {
      let { page } = queryString.parse(this.props.location.search);
      this.props.changePage(page || 1);
    }
    this._handleChange(this.props)
  }
  
  _handleChange (props) {
    let { searchText: q, page, selectedValue: country, selectedSortValue: sortType, selectedActive: active} = props;
    api('get', createApiUrl('/api/users/stats', {q, page, country, sortType, active}))
      .then(res => {
        this.setState(Object.assign({ records: res.data, apiStatus: "SUCCESS"}));
      })
      .catch(err => {
        console.log('err', err)
        this.setState({apiStatus: "ERROR"});
      });
  }
  
  static getDerivedStateFromProps (props, state) {
    let filters = ['searchText', 'page', 'selectedValue', 'selectedSortValue', 'selectedActive']
    if (props.users && !equals(pick(filters, props.users), pick(filters, state))) {
      let nextState = {
        records: {
          records: [],
          total: 0,
          subTotal: 0,
          editTotal: 0,
          countries: []
        }
      }
      filters.forEach(filter => {
        nextState[filter] = props.users[filter]
      })
  
      return nextState
    }
    return null
  }
  
  componentDidUpdate () {
    if (!this.state.records.records || this.state.records.records.length === 0) {
      this._handleChange(this.props.users)
    }
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
  
  handlePageChange(pageNumber) {
    this.setState({ records: {} });
    window.scrollTo(0, 0);
    this.props.changePage(pageNumber || 1)
  }
  
  handleToggleActive(event) {
    this.props.toggleActive(event.target.checked)
  }

  render() {
    const {
      apiStatus,
      records: recordData
    } = this.state;
    
    const { total, records, subTotal, editTotal, countries } = recordData
    
    const {
      searchText,
      selectedValue,
      selectedSortValue,
      selectedActive,
      page
    } = this.props.users

    return (
      <div className="Users">)
        <AllUsersHeader countries={countries} users={total} edits={editTotal}/>
        <section>
          <div className="row">
            <AllUsersFilter
              handleSearch={this.handleSearch}
              handleSelect={this.handleSelect}
              handleSortSelect={this.handleSortSelect}
              selectedValue={selectedValue}
              selectedSortValue={selectedSortValue}
              searchText={searchText}
              activeValue={selectedActive}
              handleToggleActive={this.handleToggleActive}
              countries={countries || []}
            />
            <div className="content--with-sidebar">
              <h3 className="header--medium">{subTotal} Results</h3>
              <AllUsersTable users={records} apiStatus={apiStatus}/>
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
