import React, { useEffect, useState } from 'react'
import { connect } from 'unistore/react'

import Table from '../components/common/Table'
import NotLoggedIn from '../components/NotLoggedIn'
import { actions } from '../lib/store'
import { LoadingState } from '../components/common/LoadingState'
import AdminUsersSearch from '../components/admin/AdminUsersSearch'

export function ManageOrg (props) {
  const { getAuthenticatedUser, authenticatedUser, getOrganization, organization, getUserList, users } = props
  const [loading, setLoading] = useState(true)
  const [members, setMembers] = useState(null)

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
      getUserList(memberIds)
    }
  }, [organization])

  useEffect(() => {
    if (users) {
      let membersWithRoles = users.map(user => {
        return organization.organization.owners.find(owner => owner.osm_id === user.osm_id) ? (
          { ...user, role: 'owner' }
        ) : (
          { ...user, role: 'manager' }
        )
      })
      setMembers(membersWithRoles)
    }
  }, [users])

  if (loading) {
    return <LoadingState />
  }
  if (!authenticatedUser.loggedIn) {
    return <NotLoggedIn />
  }
  const addManager = (user) => {
    props.addManager(user.osm_id)
  }

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
                  selectedUsers={members}
                  addUser={addManager}
                  showOnlyResults
                />
              </form>
              <MemberTable members={members} />
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

function MemberTable ({ members }) {
  if (!members) return <div />

  let rows = members
    .filter(user => {
      let memberIds = members.map(member => member.osm_id)
      return memberIds.includes(user.osm_id) ? user : null
    })
    .map(record => {
      return Object.assign(record, {
        button: (<button style={{ 'padding': '5px' }} className='button' onClick={() => this.onSearchUsersClick(record)} >Add</button>)
      })
    })
  return (
    <div className='widget'>
      <Table tableSchema={memberTableSchema} data={rows} />
    </div>
  )
}
