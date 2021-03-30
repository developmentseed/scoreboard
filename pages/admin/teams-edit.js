import React, { Component } from 'react'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'
import AdminUsersSearch from '../../components/admin/AdminUsersSearch'
import Link from '../../components/Link'
import { LoadingState } from '../../components/common/LoadingState'

export class AdminTeamsEdit extends Component {
  constructor () {
    super()

    this.state = {
      loading: true,
      descriptionInput: '',
      disableInteraction: false,
      nameInput: '',
      hashtagInput: '',
      teamCampaigns: [],
      teamUsers: []
    }

    // Event handlers
    this.handleAddNewTeamFormSubmit = this.handleAddNewTeamFormSubmit.bind(this)
    this.handleDescriptionInputChange = this.handleDescriptionInputChange.bind(this)
    this.handleNameInputChange = this.handleNameInputChange.bind(this)
    this.handleHashtagInputChange = this.handleHashtagInputChange.bind(this)
    this.resetInputs = this.resetInputs.bind(this)
    this.renderCampaignsSelectSection = this.renderCampaignsSelectSection.bind(this)

    this.addCampaignToTeam = this.addCampaignToTeam.bind(this)
    this.removeCampaignFromTeam = this.removeCampaignFromTeam.bind(this)

    this.addUserToTeam = this.addUserToTeam.bind(this)
    this.removeUserFromTeam = this.removeUserFromTeam.bind(this)
  }

  async componentDidMount () {
    const { id } = this.props

    try {
      await this.props.getAuthenticatedUser()
      await this.props.getTeam(id)
    } catch (err) {
      console.log(err)
      this.setState({ loading: false })
    }
  }

  componentDidUpdate () {
    const { team } = this.props
    if (team && this.state.loading) {
      this.setState({
        loading: false,
        nameInput: team.name,
        descriptionInput: team.bio,
        hashtagInput: team.hashtag,
        teamCampaigns: team.campaigns,
        initialUsers: team.users,
        teamUsers: team.users
      })
    }
  }

  async updateTeam () {
    const { id } = this.props
    this.setState({ disableInteraction: true })

    const {
      descriptionInput,
      nameInput,
      hashtagInput,
      teamCampaigns,
      teamUsers,
      initialUsers
    } = this.state

    const params = {
      bio: descriptionInput,
      name: nameInput,
      hashtag: hashtagInput,
      campaigns: teamCampaigns.map(c => ({ 'id': c.id, 'team_priority': c.team_priority })),
      newusers: teamUsers.map(u => u.osm_id),
      oldusers: initialUsers.map(u => u.osm_id)
    }

    try {
      await this.props.updateTeam(id, params)
    } catch (e) {
      this.setState({ disableInteraction: false })
    }
  }

  renderCampaignsSelectSection () {
    return (
      <div className='form__section'>
        <h2 className='header--medium'>
          Team campaigns
        </h2>
        { /*
        <AdminCampaignsSearch
          selectedCampaigns={this.state.teamCampaigns}
          addCampaign={this.addCampaignToTeam}
          removeCampaign={this.removeCampaignFromTeam}
        />
        */
        }
        <AdminUsersSearch
          searchHeader='Users'
          searchInputLegend='Search'
          selectedUsers={this.state.teamUsers}
          addUser={this.addUserToTeam}
          removeUser={this.removeUserFromTeam}
          showSelectedUserTable
        />
      </div>
    )
  }

  addCampaignToTeam (campaign) {
    let { teamCampaigns } = this.state
    teamCampaigns = teamCampaigns.filter(c => c.id !== campaign.id)
    teamCampaigns.push(campaign)
    this.setState({ teamCampaigns }, this.updateTeam.bind(this))
  }

  removeCampaignFromTeam (campaign) {
    let { teamCampaigns } = this.state
    teamCampaigns = teamCampaigns.filter(c => c.id !== campaign.id)
    this.setState({ teamCampaigns }, this.updateTeam.bind(this))
  }

  addUserToTeam (user) {
    let { teamUsers } = this.state
    teamUsers = teamUsers.filter(c => c.osm_id.toString() !== user.osm_id.toString())
    teamUsers.push(user)
    this.setState({ teamUsers }, this.updateTeam.bind(this))
  }

  removeUserFromTeam (user) {
    let { teamUsers } = this.state
    teamUsers = teamUsers.filter(c => c.osm_id.toString() !== user.osm_id.toString())
    this.setState({ teamUsers }, this.updateTeam.bind(this))
  }

  render () {
    const { authenticatedUser } = this.props
    const { destroyConfirmation } = this.state

    if (this.state.loading) {
      return (
        <div>
          <AdminHeader />
          <LoadingState />
        </div>
      )
    }

    if (!authenticatedUser.loggedIn) {
      return <NotLoggedIn />
    }

    if (!isAdmin(authenticatedUser.account.roles)) {
      return Router.push('/')
    }

    return (
      <div className='admin'>
        <AdminHeader />
        <section>
          <div className='row widget-container'>
            <div className='widget-25'>
              <h2 className='header--large'>Teams</h2>
              <ul className='admin-sidebar-links'>
                <li>
                  <Link href='/admin/teams'>
                    <a className='link--large'>
                      Teams List
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/admin/teams/add'>
                    <a className='link--large'>
                      Create new team
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='widget-75'>
              <div className='row'>
                <h1 className='header--xlarge'>Edit team</h1>
              </div>
              <div className='row'>
                {this.renderAddNewForm()}
              </div>
              <div className='row' style={{ marginTop: 50 }}>
                <h2 className='header--large' style={{ borderTop: '1px solid #efefef', paddingTop: 20 }}>Delete team</h2>
                {
                  destroyConfirmation
                    ? this.renderDestroyConfirmation()
                    : this.renderDestroyButton()
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  renderDestroyConfirmation () {
    const { id } = this.props

    return (
      <div className='form__footer'>
        <p>Are you sure you want to delete this team?</p>
        <button className='button button--destroy'
          id='delete-badge-confirmation-operation-button'
          type='button'
          onClick={async () => {
            await this.props.deleteTeam(id)
            Router.push('/admin/teams')
          }}
        >
          Delete this team permanently
        </button>

        <button className='button button--secondary'
          id='cancel-delete-badge-operation-button'
          type='button'
          onClick={() => {
            this.setState({ destroyConfirmation: false })
          }}
        >
          Cancel
        </button>
      </div>
    )
  }

  renderDestroyButton () {
    return (
      <button className='button button--destroy'
        id='delete-badge-operation-button'
        type='button'
        onClick={() => {
          this.setState({ destroyConfirmation: true })
        }}
      >
        Delete this team
      </button>
    )
  }

  renderHeader () {
    return (
      <header className='header--internal--green header--page'>
        <div className='row'>
          <h1 className='section-sub--left header--xlarge margin-top-sm'>Add a new team</h1>
        </div>
      </header>
    )
  }

  renderAddNewForm () {
    return (
      <form
        className='form form--two-column'
        id='form-add-new-badge'
        onSubmit={this.handleAddNewTeamFormSubmit}
      >
        {this.renderBasicDetailsSection()}
        <div className='form__footer' style={{ 'marginBottom': '30px' }}>
          <button
            className='button'
            id='update-details-submit-button'
            type='submit'
          >
            Update Details
          </button>
        </div>
        {this.renderCampaignsSelectSection()}
      </form >
    )
  }

  renderBasicDetailsSection () {
    return (
      <div className='form__section'>
        <h2 className='header--medium'>Team Details</h2>
        <div className='form__input-unit'>
          <label
            className='form__label'
            htmlFor='add-new-badge-name'
          >
            Team Name
          </label>
          <input
            id='team-name'
            name='team-name'
            onChange={this.handleNameInputChange}
            placeholder='Awesome TEAM'
            required
            type='text'
            value={this.state.nameInput}
          />
        </div>
        <div className='form__input-unit'>
          <label
            className='form__label'
            htmlFor='add-new-badge-name'
          >
            Team Hashtag
          </label>
          <input
            id='team-hashtag'
            name='team-hashtag'
            onChange={this.handleHashtagInputChange}
            required
            placeholder='#team-awesome'
            type='text'
            value={this.state.hashtagInput}
          />
        </div>
        <div className='form__input-unit'>
          <label
            className='form__label'
            htmlFor='badge-description'
          >
            Team bio
          </label>
          <textarea
            id='badge-description'
            name='badge-description'
            maxLength={400}
            onChange={this.handleDescriptionInputChange}
            placeholder='Let users know about this team'
            required
            rows={5}
            value={this.state.descriptionInput}
          />
        </div>
      </div>
    )
  }

  handleNameInputChange (e) {
    const { value } = e.target
    this.setState({ nameInput: value })
  }

  handleDescriptionInputChange (e) {
    const { value } = e.target
    this.setState({ descriptionInput: value })
  }

  handleHashtagInputChange (e) {
    const { value } = e.target
    this.setState({
      hashtagInput: value
    })
  }

  handleAddNewTeamFormSubmit (e) {
    e.preventDefault()
    this.updateTeam()
  }

  resetInputs () {
    this.setState({
      loading: true,
      descriptionInput: '',
      disableInteraction: false,
      nameInput: '',
      hashtagInput: '',
      teamCampaigns: [],
      teamUsers: []
    })
  }
}

const Page = connect(['authenticatedUser', 'error', 'team', 'admin'], actions)(AdminTeamsEdit)

Page.getInitialProps = function ({ req }) {
  const { id } = req.params
  return { id }
}

export default Page
