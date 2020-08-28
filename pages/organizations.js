import React, { useEffect, useState } from 'react'
import { connect } from 'unistore/react'

import Table from '../components/common/Table'
import NotLoggedIn from '../components/NotLoggedIn'
import { actions } from '../lib/store'
import { LoadingState } from '../components/common/LoadingState'
import AdminUsersSearch from '../components/admin/AdminUsersSearch'

export function ManageOrg (props) {
  const [loading, setLoading] = useState(true)

  // On load get the user
  useEffect(() => {
    props.getAuthenticatedUser()
      .then(() => props.getOrganization())
      .then(() => setLoading(false))
  }, [])

  if (loading) {
    return <LoadingState />
  }
  const { authenticatedUser } = props

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
                  selectedUsers={[]}
                  addUser={() => {}}
                  removeUser={() => {}}
                  showOnlyResults
                />
              </form>
              {/* <MemberTable teamRecords={[...props.teams.records]} /> */}
            </div >
          </div >
        </div>
      </section>
    </div>

  )
}
export default connect(['authenticatedUser', 'organization'], actions)(ManageOrg)

const memberTableSchema = {
  'headers': {
    'team-name': { type: 'teamlink', accessor: 'name' },
    '#-members': { type: 'number', accessor: 'memberCount' },
    'team-hashtag': { type: 'string', accessor: 'hashtag' },
    'moderator-names': { type: 'string', accessor: 'moderatorNames' }
  },
  columnOrder: [ 'team-name', '#-of-members', 'team-hashtag', 'moderator-names' ],
  'displaysTooltip': [
    'team-hashtag'
  ]
}

function MemberTable ({ teamRecords }) {
  if (!teamRecords || !teamRecords.length) return (<div />)
  const tableData = teamRecords.map(record => {
    const memberCount = record.members.length
    const moderatorNames = Object.values(record.moderators).join(', ')
    return {
      ...record,
      memberCount,
      moderatorNames
    }
  })
  let idMap = Object.assign(...teamRecords.map(({ id, name }) => ({ [name]: id })))
  return (
    <div>
      <Table tableSchema={memberTableSchema} data={tableData} idMap={idMap} />
    </div>
  )
}
