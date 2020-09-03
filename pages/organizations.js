import React, { useEffect, useState } from 'react'
import { connect } from 'unistore/react'
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem
} from '@reach/menu-button'

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
    setMembers([...members, { ...user, role: 'manager' }])
  }

  const setStatus = (user, role) => {
    const updatedMembers = members.map(member => member.osm_id === user.osm_id ? { ...member, role } : member)
    setMembers(updatedMembers)
  }

  const findInitialRole = (role, member) => (
    organization.organization[role].find(orgUser => orgUser.osm_id === member.osm_id)
  )

  const submitChanges = () => {
    // props.addOwner('10328243')
    members.forEach(member => {
      switch (member.role) {
        case 'owner':
          if (findInitialRole('managers', member)) {
            console.log('assign owner', member, organization.organization)
            props.removeManager(member.osm_id)
          }
          props.addOwner(member.osm_id)
          break
        case 'manager':
          if (findInitialRole('owners', member)) {
            console.log('assign manager', member, organization.organization)
            props.removeOwner(member.osm_id)
          }
          props.addManager(member.osm_id)
          break
        case 'none':
          props.removeManager(member.osm_id)
          props.removeOwner(member.osm_id)
          break
      }
    })
  }
  console.log('organization', organization.organization)
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
                  addBtnText='Add Manager'
                  showOnlyResults
                />
                <MemberTable members={members} setStatus={setStatus} />
                <button
                  type='submit'
                  className='button button--primary'
                  onClick={() => submitChanges()}
                >
                  Save Changes
                </button>
              </form>
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
    'role': { type: 'string', accessor: 'role' },
    'button': { type: 'string', accessor: 'button' }
  },
  columnOrder: ['name', 'user-id', 'role', 'button'],
  displaysTooltip: ['user-id']
}

function MemberTable ({ members, setStatus }) {
  if (!members) return <div />

  let rows = members
    .filter(member => {
      let memberIds = members.map(member => member.osm_id)
      return memberIds.includes(member.osm_id) ? member : null
    })
    .map(member => {
      return Object.assign(member, {
        button: (
          <Menu>
            <MenuButton className='button button--secondary button--inline'>
          Change Status <span aria-hidden>▾</span>
            </MenuButton>
            <MenuList>
              {member.role !== 'owner' && <MenuItem onSelect={() => setStatus(member, 'owner')}>Assign Owner</MenuItem>}
              {member.role !== 'manager' && <MenuItem onSelect={() => setStatus(member, 'manager')}>Assign Manager</MenuItem>}
              <MenuItem onSelect={() => setStatus(member, 'none')} style={{ backgroundColor: `#4FCA9E`, color: `white` }} >Remove</MenuItem>
            </MenuList>
          </Menu>
        )
      })
    })
  return (
    <div className='widget'>
      <Table tableSchema={memberTableSchema} data={rows} />
    </div>
  )
}
