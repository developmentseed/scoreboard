import Pagination from 'react-js-pagination'
import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../../lib/store'

class UsersSearch extends Component {
  constructor (props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.onSearchUsersClick = this.onSearchUsersClick.bind(this)
    this.onSelectedUsersClick = this.onSelectedUsersClick.bind(this)
  }

  handleSearch (event) {
    this.props.changeSearchText(event.target.value)
  }

  onSearchUsersClick (user) {
    this.props.addUser(user)
  }

  onSelectedUsersClick (user) {
    this.props.removeUser(user)
  }

  handlePageChange (pageNumber) {
    this.props.changePage(pageNumber || 1)
  }

  componentDidMount () {
    this.props.changePage(1)
  }

  render () {
    if (!this.props.users) return <div />

    let { selectedUsers } = this.props
    selectedUsers = selectedUsers || []

    const { stats: { total, records }, page } = this.props.users
    if (!records) return <div />

    return (
      <div>
        {
          (selectedUsers.length > 0)
            ? (<section className='section-sub'>
              <h1>Selected</h1>
              <div className='widget'>
                <table className='admin-table'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>User ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedUsers.map(record => (
                      <tr key={`user-${record.osm_id}`} className='admin-table-row'>
                        <td>{`${record.full_name}`}</td>
                        <td>{`${record.osm_id}`}</td>
                        <td><button style={{ 'padding': '5px' }} className='button' onClick={() => this.onSelectedUsersClick(record)} >Remove</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>)
            : <div />
        }
        <section className='section-sub'>
          <h1>Users</h1>
          <div>
            <fieldset>
              <legend>Search</legend>
              <div className='search'>
                <input className='input--text' onChange={this.handleSearch} />
              </div>
            </fieldset>
          </div>
          <div className='widget'>
            <table className='admin-table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>User ID</th>
                </tr>
              </thead>
              <tbody>
                {records.map(record => {
                  let isAssigned = false
                  selectedUsers.forEach(user => {
                    if (record.osm_id.toString() === user.osm_id.toString()) isAssigned = true
                  })

                  return <tr key={`user-${record.osm_id}`} onClick={isAssigned ? null : () => this.onSearchUsersClick(record)} className={isAssigned ? 'admin-table-row-alt' : 'admin-table-row'} >
                    <td>{`${record.full_name}`}</td>
                    <td>{`${record.osm_id}`}</td>
                  </tr>
                })
                }
              </tbody>
              <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={total}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
              />
            </table>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(['users'], actions)(UsersSearch)
