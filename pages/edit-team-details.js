import React from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
import fetch from '../lib/utils/api'
import TeamDetailsForm from '../components/teams/TeamDetailsForm'
import Router from '../lib/router'

function EditTeam (props) {
  const handleSubmit = async (data) => {
    await props.updateTeam(props.id, data)
    Router.push(`/teams/${props.id}`)
  }

  return (
    <div className='admin'>
      <section>
        <div className='row widget-container'>
          <div className='widget-25'>
            <h2 className='header--large'>Edit a team</h2>
          </div>
          <div className='widget-75'>
            <div>
              <h1 className='header--xlarge'>Details</h1>
            </div>
            { props.data
              ? <TeamDetailsForm
                onSubmit={handleSubmit}
                details={props.data}
              />
              : <div />
            }
          </div>
        </div>
      </section>
    </div>
  )
}

const Page = connect(['authenticatedUser', 'teams'], actions)(EditTeam)

Page.getInitialProps = async ({ query }) => {
  const { id } = query
  const res = await fetch(`/api/teams/${id}`)
  const data = await res.json()
  return { id, data }
}

export default Page
