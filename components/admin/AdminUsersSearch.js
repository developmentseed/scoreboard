import Pagination from 'react-js-pagination'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import join from 'url-join'

import { connect } from 'unistore/react'
import { actions } from '../../lib/store'
import { APP_URL_PREFIX } from '../../api/src/config'

import Table from '../common/Table'

const searchIcon = join(APP_URL_PREFIX, '/static/magnifier-left.svg')

const tableSchema = {
  'headers': {
    'name': { type: 'string', accessor: 'full_name' },
    'user-id': { type: 'string', accessor: 'osm_id' },
    'button': { type: 'string', accessor: 'button' }
  },
  columnOrder: ['name', 'user-id', 'button'],
  displaysTooltip: ['user-id']
}

class UsersSearch extends Component {
  constructor (props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.onSearchUsersClick = this.onSearchUsersClick.bind(this)
    this.onSelectedUsersClick = this.onSelectedUsersClick.bind(this)
  }

  handleSearch (event) {
    this.props.adminTeamMemberSearch(event.target.value)
  }

  onSearchUsersClick (user) {
    this.props.addUser(user)
  }

  onSelectedUsersClick (user) {
    this.props.removeUser(user)
  }

  handlePageChange (pageNumber) {
    this.props.adminTeamMemberPageChange(pageNumber || 1)
  }

  componentDidMount () {
    this.props.adminTeamMemberPageChange(1)
  }

  render () {
    let { selectedUsers, searchHeader, searchInputLegend } = this.props
    selectedUsers = (selectedUsers || []).map(user => {
      return Object.assign(user, {
        button: <button style={{ 'padding': '5px' }} className='button button--destroy' onClick={() => this.onSelectedUsersClick(user)} >Remove</button>
      })
    })

    const { page, searchText } = this.props.adminTeamMemberFilters
    const { stats: { records, subTotal } } = this.props.adminTeamMemberSearchResults
    if (!records) return <div />

    let searchUsers = records.map(record => {
      let isAssigned = false
      selectedUsers.forEach(user => {
        if (record.osm_id.toString() === user.osm_id.toString()) isAssigned = true
      })
      return Object.assign(record, {
        button: (isAssigned ? <div /> : <button style={{ 'padding': '5px' }} className='button' onClick={() => this.onSearchUsersClick(record)} >Add</button>)
      })
    })

    return (
      <div>
        {
          (selectedUsers.length > 0)
            ? (<section className='section-sub'>
              <h1>Selected</h1>
              <div className='widget'>
                <Table tableSchema={tableSchema} data={selectedUsers} />
              </div>
            </section>)
            : <div />
        }
        <section className='section-sub'>
          {searchHeader && <h1>{searchHeader}</h1>}
          <div>
            <fieldset>
              {searchInputLegend && <legend>{searchInputLegend}</legend>}
              <div className='search'>
                <input className='input--text' value={searchText} onChange={this.handleSearch} />
                <span className='search-icon' style={{ backgroundImage: `url(${searchIcon})` }} />
              </div>
            </fieldset>
          </div>
          <div className='widget'>
            <Table tableSchema={tableSchema} data={searchUsers} />
            <Pagination
              activePage={page}
              itemsCountPerPage={10}
              totalItemsCount={subTotal}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            />
          </div>
        </section>
      </div>
    )
  }
}
UsersSearch.propTypes = {
  searchHeader: PropTypes.string,
  searchInputLegend: PropTypes.string,
  selectedUsers: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired
}

export default connect(['adminTeamMemberFilters', 'adminTeamMemberSearchResults'], actions)(UsersSearch)
