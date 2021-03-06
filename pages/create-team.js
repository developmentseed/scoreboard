import React, { useEffect, useState } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
import TeamDetailsForm from '../components/teams/TeamDetailsForm'
import Router from '../lib/router'
import NotLoggedIn from '../components/NotLoggedIn'
import { LoadingState } from '../components/common/LoadingState'

export function CreateTeam (props) {
  const [loading, setLoading] = useState(true)

  // On load get the user
  useEffect(() => {
    props.getAuthenticatedUser()
      .then(() => setLoading(false))
  }, [])

  if (loading) {
    return <LoadingState />
  }
  const { authenticatedUser } = props

  if (!authenticatedUser.loggedIn) {
    return <NotLoggedIn />
  }
  const handleSubmit = async (data) => {
    await props.createTeam(data)
    Router.push('/teams')
  }

  return (
    <div className='admin'>
      <section>
        <div className='row widget-container'>
          <div className='widget-25'>
            <h2 className='header--large'>Create a team</h2>
          </div>
          <div className='widget-75'>
            <div>
              <h1 className='header--xlarge'>Details</h1>
            </div>
            <TeamDetailsForm
              details={
                {
                  name: '',
                  hashtag: '',
                  bio: '',
                  location: `{
                    "type": "Point",
                    "coordinates": [0, 0]
                  }`
                }
              }
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const Page = connect(['authenticatedUser', 'teams'], actions)(CreateTeam)

export default Page
