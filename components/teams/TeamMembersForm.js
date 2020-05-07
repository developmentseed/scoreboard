import Pagination from 'react-js-pagination'
import React, { useEffect } from 'react'
import { connect } from 'unistore/react'
import { includes, prop } from 'ramda'
import { actions } from '../../lib/store'
import Table from '../common/Table'

const tableSchema = {
  'headers': {
    'name': { type: 'string', accessor: 'full_name' },
    'user-id': { type: 'string', accessor: 'osm_id' },
    'button': { type: 'string', accessor: 'button' }
  },
  columnOrder: ['name', 'user-id', 'button'],
  displaysTooltip: ['user-id']
}

function SelectedUsersTable (props) {
  const selectedUsers = (props.members || []).map(user => {
    return Object.assign(user, {
      button: <button key={`remove-${user.osm_id}`} style={{ 'padding': '5px' }} className='button button--destroy' onClick={() => props.removeUser(user)} >Remove</button>
    })
  })

  return <section className='section-sub'>
    <h1>Selected</h1>
    <div className='widget'>
      <Table tableSchema={Object.assign({}, tableSchema)} data={selectedUsers} />
    </div>
  </section>
}

function EditMembersForm (props) {
  // Iniitalize
  useEffect(() => {
    props.adminTeamMemberSearch('')
  }, [])

  const { page } = props.adminTeamMemberFilters
  const { stats: { subTotal, records } } = props.adminTeamMemberSearchResults

  if (!records) return <div>Error loading</div>

  const memberIds = props.members.map(prop('osm_id'))

  const searchUsers = records.map(record => {
    if (includes(record.osm_id, memberIds)) {
      return record
    }
    return Object.assign(record, {
      button: <button style={{ 'padding': '5px' }} className='button' onClick={() => props.addUser(record)} >Add</button>
    })
  })

  return (
    <div>
      <SelectedUsersTable members={props.members} removeUser={props.removeUser} />
      <section className='section-sub'>
        <h1>Search for users</h1>
        <div>
          <fieldset>
            <legend>Search</legend>
            <div className='search'>
              <input className='input--text' onChange={
                e => props.adminTeamMemberSearch(e.target.value)
              } />
            </div>
          </fieldset>
        </div>
        <div className='widget'>
          <Table tableSchema={tableSchema} data={searchUsers} />
          <Pagination
            activePage={page}
            itemsCountPerPage={25}
            totalItemsCount={subTotal}
            pageRangeDisplayed={5}
            onChange={number => props.adminTeamMemberPageChange(number || 1)}
          />
        </div>
      </section>
    </div>
  )
}

EditMembersForm.whyDidYouRender = true

export default connect(['adminTeamMemberFilters', 'adminTeamMemberSearchResults'], actions)(EditMembersForm)
