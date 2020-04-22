import React, { useState, useEffect } from 'react'
import NotLoggedIn from '../components/NotLoggedIn'
import { LoadingState } from '../components/common/LoadingState'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
import Table from '../components/common/Table'
import Link from '../components/Link'
import { includes, prop } from 'ramda'

const tableSchema = {
  'headers': {
    'name': { type: 'string', accessor: 'full_name' },
    'role': { type: 'string', accessor: 'role' },
    'button': { type: 'string', accessor: 'button' }
  },
  columnOrder: ['name', 'role', 'button'],
  displaysTooltip: []
}

export function EditTeamModerators (props) {
  const [loading, setLoading] = useState(true)

  // On load get the user
  useEffect(() => {
    props.getAuthenticatedUser()
      .then(() => props.getTeam(props.id))
      .then(() => setLoading(false))
  }, [])

  if (loading || !props.team) {
    return <LoadingState />
  }
  const { authenticatedUser } = props

  if (!authenticatedUser.loggedIn) {
    return <NotLoggedIn />
  }

  const { users, moderators, id: teamId, name } = props.team
  const moderatorIds = moderators.map(prop('osm_id'))

  const rows = users.map(u => {
    const isUserModerator = includes(u.osm_id, moderatorIds)
    return {
      full_name: u.full_name,
      role: isUserModerator ? 'moderator' : 'member',
      button: isUserModerator
        ? <button style={{ 'padding': '5px' }} className='button button--destroy' onClick={() => props.removeModerator({ id: teamId, osmId: u.osm_id })} >Remove Moderator</button>
        : <button style={{ 'padding': '5px' }} className='button' onClick={() => props.assignModerator({ id: teamId, osmId: u.osm_id })} >Add Moderator</button>
    }
  })

  return (
    <div className='admin'>
      <section>
        <div className='row widget-container'>
          <div className='widget-25'>
            <h2 className='header--large'>Edit team</h2>
            <ul className='admin-sidebar-links'>
              <li>
                <Link href={`/teams/${teamId}`}>
                  <a className='link--large'>
                    Team Page
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/teams/${teamId}/edit-details`}>
                  <a className='link--large'>
                    Edit team details
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='widget-75'>
            <div>
              <h1 className='header--xlarge'>Edit Moderators for {name}</h1>
              <div className='widget'>
                <Table tableSchema={tableSchema} data={rows} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const Page = connect(['authenticatedUser', 'teams', 'team'], actions)(EditTeamModerators)

Page.getInitialProps = async ({ query }) => {
  const { id } = query
  return { id }
}

export default Page
