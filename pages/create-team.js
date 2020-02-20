import React from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
import TeamDetailsForm from '../components/teams/TeamDetailsForm'
import Router from '../lib/router'

function CreateTeam (props) {
  const handleSubmit = async (data) => {
    try {
      await props.createTeam(data)
      Router.push('/teams')
    } catch (e) {
      console.error(e)
    }
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
