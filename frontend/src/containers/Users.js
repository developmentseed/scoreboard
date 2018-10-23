import React, { Component } from 'react';
import '../styles/Users.css';
import queryString from 'query-string';
import Pagination from 'react-js-pagination';
import AllUsersTable from '../components/AllUsersTable';
import api, { createApiUrl } from '../utils/api';
import { formatDecimal } from '../utils/format';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import countries, {getName} from 'i18n-iso-countries';
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const initialState = {
  searchText: "",
  selectedValue: null,
  selectedSortValue: null,
  page: 1,
  selectedActive: false
}

const allUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PAGE_CHANGE':
      return Object.assign(state, { page: action.page });
    case 'SEARCH_TEXT_CHANGE':
      return Object.assign(state, { searchText: action.searchText, page: 1 });
    case 'SELECTED_COUNTRY_CHANGE':
      return Object.assign(state, { selectedValue: action.selectedValue, page: 1 });
    case 'SELECTED_SORT_CHANGE':
      return Object.assign(state, { selectedSortValue: action.selectedSortValue, page: 1 });
    case 'TOGGLE_ACTIVE':
      return Object.assign(state, { selectedActive: action.activeValue, page: 1 });
    default:
      return state;
  }
}


const AllUsersHeader = ({countries, users, edits}) => (
  <header className="header--internal--green header--page">
    <div className="row">
      <div className="section-sub--left section-width-forty">
        <h1 className="header--xlarge">Users</h1>
      </div>
      <ul className="section-sub--right section-width-sixty">
        <li className="list--inline">
          <span className="descriptor-chart">Rep. Countries</span>
          <span className="num--large">{(countries && countries.length) || 0}</span>
        </li>
        <li className="list--inline">
          <span className="descriptor-chart">Total Users</span>
          <span className="num--large">{formatDecimal(users)}</span>
        </li>
        <li className="list--inline">
          <span className="descriptor-chart">Total Edits</span>
          <span className="num--large">{formatDecimal(edits)}</span>
        </li>
      </ul>
    </div>
  </header>
);

const AllUsersFilter = ({
  searchText, handleSearch, countries, handleSelect, handleSortSelect, selectedValue, selectedSortValue,
  handleToggleActive, activeValue
}) => (
  <div className="sidebar">
    <h3 className="header--medium">Filter</h3>
    <form onSubmit = {e => e.preventDefault() }>
      <fieldset>
        <legend>Search</legend>
        <div className="search">
          <input className="input--text" value={searchText} onChange={handleSearch} />
          <span className="search-icon"></span>
        </div>
      </fieldset>
      <fieldset>
        <legend>Country</legend>
        <Select name="country-select"
          multi={true}
          simpleValue
          value={selectedValue}
          onChange={handleSelect}
          options={
           countries.map(({country}) => { return {value: country, label: getName(country, "en")} })
          }
        />
      </fieldset>
      <fieldset>
        <legend>Sort by</legend>
        <Select name="sort-select"
          simpleValue
          value={selectedSortValue}
          onChange={handleSortSelect}
          options={
            [{value: 'Most recent', label: 'Most recent edit'}, {value: 'Least recent', label: 'Least recent edit'}, 
            {value: 'Most total', label: 'Most total edits'}, {value: 'Least total', label: 'Least total edits'}]
          }
        />
      </fieldset>
      <fieldset>
        <legend>Active Users</legend>
        <input type="checkbox" checked={activeValue} onChange={handleToggleActive} />
        Filter active users (edited in the past 6 months)
      </fieldset>
    </form>
  </div>
);

class Users extends Component {
  constructor() {
    super()
    this.state = {
      "records": {},
      apiStatus: "LOADING",
      ...initialState
    }

    this.dispatch = this.dispatch.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSortSelect = this.handleSortSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggleActive = this.handleToggleActive.bind(this);
  }

  dispatch (action) {
    const state = this.state;
    const newState = allUsersReducer(state, action);

    this.setState(Object.assign(newState, { apiStatus: "LOADING" }));
    let { searchText: q, page, selectedValue: country, selectedSortValue: sortType, selectedActive: active} = newState;
    api('get', createApiUrl('/api/users/stats', {q, page, country, sortType, active}))
      .then(res => {
        this.setState(Object.assign({ records: res.data, apiStatus: "SUCCESS"}));
      })
      .catch(err => {
        this.setState({apiStatus: "ERROR"});
      });
  }

  handleSearch (event) {
    this.dispatch({ type: 'SEARCH_TEXT_CHANGE', searchText: event.target.value});
  }

  handleSelect (selectedOption) {
    const value = selectedOption  || null;
    this.dispatch({ type: 'SELECTED_COUNTRY_CHANGE', selectedValue: value});
  }

  handleSortSelect (selectedOption) {
    const value = selectedOption  || null;
    this.dispatch({ type: 'SELECTED_SORT_CHANGE', selectedSortValue: value});
  }

  handlePageChange(pageNumber) {
    this.setState({ records: {} });
    window.scrollTo(0, 0);
    this.dispatch({ type: 'PAGE_CHANGE', page: pageNumber || 1 });
  }

  handleToggleActive(event) {
    this.dispatch({ type: 'TOGGLE_ACTIVE', activeValue: event.target.checked });
  }

  componentDidMount() {
    if (this.props.location) {
      let { page } = queryString.parse(this.props.location.search);
      this.dispatch({ type: 'PAGE_CHANGE', page: page || 1 });
    }
  }

  render() {
    const {
      page,
      records: { total, records, subTotal, editTotal, countries },
      apiStatus,
      searchText,
      selectedValue,
      selectedSortValue,
      selectedActive
    } = this.state;
    return (
      <div className="Users">
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

export default Users;
