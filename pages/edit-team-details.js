import React, { useReducer, useState } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
import { pick, prop } from 'ramda'
import fetch from '../lib/utils/api'
import TeamDetailsForm from '../components/teams/TeamDetailsForm'
import TeamMembersForm from '../components/teams/TeamMembersForm'
import TeamCampaignsForm from '../components/teams/TeamCampaignsForm'
import Router from '../lib/router'

function EditTeam (props) {
  /**
   * Function for adding removing members from
   * state
   */
  const [members, setMembers] = useReducer(
    (members, { type, value }) => {
      switch (type) {
        case 'add':
          return [...members, value]
        case 'remove':
          return members.filter(({ osm_id }) => (osm_id.toString() !== value.osm_id.toString()))
      }
    }, props.data.users || []
  )

  /**
   * Function for adding removing campaigns from
   * state
   */
  const [campaigns, setCampaigns] = useReducer(
    (campaigns, { type, value }) => {
      switch (type) {
        case 'add': {
          const uniqueCampaigns = campaigns.filter(
            c => c.id !== value.id
          )
          return [...uniqueCampaigns, value]
        }
        case 'remove':
          return campaigns.filter(({ id }) => id !== value.id)
      }
    }, props.data.campaigns || []
  )

  /**
   * Function to update details
   */
  const [details, setDetails] = useState(
    pick(['location', 'name', 'hashtag', 'bio'], props.data)
  )

  const handleSubmit = async () => {
    await props.updateTeam(props.id, { ...details,
      newusers: members.map(prop('osm_id')),
      oldusers: props.data.users.map(prop('osm_id')),
      campaigns: campaigns.map(pick(['id', 'team_priority']))
    })
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
                onChange={setDetails}
                details={details}
              />
              : <div />
            }
            <br />
            <div>
              <h1 className='header--xlarge'>Add Members</h1>
              <TeamMembersForm
                members={members}
                addUser={
                  u => setMembers({ type: 'add', value: u })
                }
                removeUser={
                  u => setMembers({ type: 'remove', value: u })
                }
              />
            </div>
            <div>
              <h1 className='header--xlarge'>Add Campaigns</h1>
              <TeamCampaignsForm
                campaigns={campaigns}
                addCampaign={c => { setCampaigns({ type: 'add', value: c }) }}
                removeCampaign={
                  c => setCampaigns({ type: 'remove', value: c })}
              />
            </div>
            <input className='button' onClick={handleSubmit} value='Submit Form' />
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
