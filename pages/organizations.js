import React, { useEffect, useState } from 'react'
import { connect } from 'unistore/react'

import Table from '../components/common/Table'
import NotLoggedIn from '../components/NotLoggedIn'
import { actions } from '../lib/store'
import { LoadingState } from '../components/common/LoadingState'
import AdminUsersSearch from '../components/admin/AdminUsersSearch'

export function ManageOrg (props) {
  const { getAuthenticatedUser, authenticatedUser, getOrganization, organization, getUserList, userList } = props
  const [loading, setLoading] = useState(true)
  // const [members, setMembers] = useState([])

  // On load get the user
  useEffect(() => {
    getAuthenticatedUser()
      .then(() => getOrganization())
      .then(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (organization) {
      const memberList = organization.organization.owners.concat(organization.organization.managers)
      const memberIds = memberList.map(member => member.osm_id.toString())
      console.log('memberIds', memberIds)
      getUserList(memberIds)
        .then(() => console.log('?', props))
    }
  }, [organization])

  if (loading) {
    return <LoadingState />
  }
  if (!authenticatedUser.loggedIn) {
    return <NotLoggedIn />
  }
  const addManager = (user) => {
    props.addManager(user.osm_id)
  }
  console.log('props', userList, props)
  const memberList = organization.organization.owners.concat(organization.organization.managers)

  return (
    <div className='Org'>
      <header className='header--internal--green header--page'>
        <div className='row widget-container'>
          <div className='widget-75'>
            <h1 className='section-sub--left header--xlarge margin-top-sm'>Organization Management</h1>
          </div>
        </div>
      </header>
      <section>
        <div className='row widget-container'>
          <div className='widget-25'>
            <h3 className='header--medium'>EDIT ORG.</h3>
          </div>
          <div className='widget-75'>
            <div className='row'>
              <h2 className='header--large'>Owners & Managers</h2>
              <p>Organizations are groupings of teams with extra permissions that help control the
              creation and moderation of teams. Only organization owners can see this page. Owners are responsible for
              setting organization managers, who (along with Owners) are the only users permitted to create new teams.
              Managers can then promote other users. Scoreboard is enabled for a single organization at a time.
              Organization owners can create teams and have all the permissions as Managers and Moderators.
              Managers may be promoted to Owners.</p>
            </div>
            <div className='row'>
              <form className='form'>
                <AdminUsersSearch
                  searchInputLegend='Add Organization Manager'
                  selectedUsers={memberList}
                  addUser={addManager}
                  showOnlyResults
                />
              </form>
              <MemberTable memberList={memberList} />
            </div >
          </div >
        </div>
      </section>
    </div>

  )
}
export default connect(['authenticatedUser', 'organization', 'users'], actions)(ManageOrg)

const memberTableSchema = {
  'headers': {
    'name': { type: 'string', accessor: 'full_name' },
    'user-id': { type: 'string', accessor: 'osm_id' },
    'button': { type: 'string', accessor: 'button' }
  },
  columnOrder: ['name', 'user-id', 'button'],
  displaysTooltip: ['user-id']
}

function MemberTable ({ memberList }) {
  // if (!allRecords) return <div />
  let test = [
    { osm_id: 10328243, edit_count: 1373, full_name: 'jo', country: null },
    { osm_id: 1835967, edit_count: 1373, full_name: 'meg', country: null },
    { osm_id: 2647319, edit_count: 1373, full_name: 'alic', country: null }
  ]
  let members = test
    .filter(user => {
      let memberIds = memberList.map(member => member.osm_id)
      return memberIds.includes(user.osm_id) ? user : null
    })
    .map(record => {
      return Object.assign(record, {
        button: (<button style={{ 'padding': '5px' }} className='button' onClick={() => this.onSearchUsersClick(record)} >Add</button>)
      })
    })
  return (
    <div className='widget'>
      <Table tableSchema={memberTableSchema} data={members} />
    </div>
  )
}
