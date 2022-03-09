import React, { useEffect, useState } from 'react'
import { connect } from 'unistore/react'
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem
} from '@reach/menu-button'

import Table from '../components/common/Table'
import Link from '../components/Link'
import NotLoggedIn from '../components/NotLoggedIn'
import { actions } from '../lib/store'
import { LoadingState } from '../components/common/LoadingState'
import AdminUsersSearch from '../components/admin/AdminUsersSearch'

export function ManageOrg (props) {
  const { getAuthenticatedUser, authenticatedUser, getOrganizationStaff, organization, getUserList, users } = props
  const [loading, setLoading] = useState(true)
  const [members, setMembers] = useState(null)
  const [warning, setWarning] = useState(null)

  // On load get the user
  useEffect(() => {
    getAuthenticatedUser()
      .then(() => getOrganizationStaff())
      .then(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (organization) {
      const memberList = organization.organization.owners.concat(organization.organization.managers)
      const memberIds = memberList.map(member => member.id.toString())
      getUserList(memberIds)
    }
  }, [organization])

  useEffect(() => {
    if (users) {
      // Moves roles into state
      let membersWithRoles = users.map(user => {
        return organization.organization.owners.find(owner => parseInt(owner.id) === parseInt(user.osm_id)) ? (
          { ...user, role: 'owner' }
        ) : (
          { ...user, role: 'manager' }
        )
      })
      setMembers(checkForSingleOwner(membersWithRoles))
    }
  }, [users, organization])

  /**
 * Adds a new member with the role of manager.
 * @param {object} user - object containing all data listed on the user table.
 */
  const addManager = (user) => setMembers([...members, { ...user, role: 'manager' }])

  /**
 * Adds a new parameter to owner if they are the only owner in the list.
 * @param {array} members - object containing all data listed on the user table.
 */
  const checkForSingleOwner = (members) => {
    const owners = members.filter(member => member.role === 'owner')
    const singleOwner = owners.length === 1 ? owners.shift() : null
    return singleOwner ? members.map(member => member.osm_id === singleOwner.osm_id ? { ...member, singleOwner: true } : member) : members
  }

  /**
 * Updates member state with newly selected role.
 * @param {object} user - object containing all user data from the member table.
 * @param {string} role - new role selected from dropdown oneOf ['owner', 'manager', 'none'].
 */
  const setStatus = (user, role) => {
    if (user.osm_id.toString() === props.authenticatedUser.account.id) {
      findInitialRole('owners', user) && setWarning('Are you sure you want to change your role? You will lose the ability to add new owners in the future.')
      role === 'none' && setWarning("Are you sure you want to remove yourself? You won't be able to add yourself back in.")
    }
    const updatedMembers = members.map(member => member.osm_id === user.osm_id ? { ...member, role } : member)
    setMembers(checkForSingleOwner(updatedMembers))
  }

  /**
 * Identifies role of user on initial load - prior to any updates.
 * @param {string} role - role from  oneOf ['owners', 'managers'].
 * @param {object} member - object containing all user data from the member table.
 */
  const findInitialRole = (role, member) => (
    organization.organization[role].find(orgUser => orgUser.osm_id === member.osm_id)
  )

  /**
 * Makes request for each member to change status. Since the API adds and removes members one
 * at a time, each request is submitted separately rather than in batches.
 */
  const submitChanges = () => {
    members.forEach(member => {
      switch (member.role) {
        case 'owner':
          if (findInitialRole('managers', member)) {
            props.removeManager(member.osm_id)
          }
          props.addOwner(member.osm_id)
          break
        case 'manager':
          if (findInitialRole('owners', member)) {
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

  if (loading) {
    return <LoadingState />
  }

  if (!authenticatedUser.loggedIn) {
    return <NotLoggedIn />
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
            <Link href={`/teams`}>
              <a className='link--large'>
                    View Teams
              </a>
            </Link>
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
                <MemberTable members={members} setStatus={setStatus} warning={warning} />
                <button
                  type='button'
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

function MemberTable ({ members, setStatus, warning }) {
  if (!members) return <div />

  let rows = members
    .filter(member => {
      let memberIds = members.map(member => member.osm_id)
      return memberIds.includes(member.osm_id) ? member : null
    })
    .map(member => {
      return Object.assign(member, {
        button: !member.singleOwner ? (<Menu>
          <MenuButton className='button button--secondary button--inline'>
          Change Status <span aria-hidden>▾</span>
          </MenuButton>
          <MenuList>
            {member.role !== 'owner' && <MenuItem onSelect={() => setStatus(member, 'owner')}>Assign Owner</MenuItem>}
            {(member.role !== 'manager' && members.filter(member => member.role === 'owner').length > 1) && (
              <MenuItem onSelect={() => setStatus(member, 'manager')}>Assign Manager</MenuItem>
            )
            }
            {<MenuItem onSelect={() => setStatus(member, 'none')} style={{ backgroundColor: `#4FCA9E`, color: `white` }} >Remove</MenuItem>}
          </MenuList>
        </Menu>) : (<span> No Selection Available</span>)
      })
    })
  return (
    <div className='widget'>
      <Table tableSchema={memberTableSchema} data={rows} />
      {warning && <div className='error--block'>{warning}</div>}
    </div>
  )
}
