import React, { Component } from 'react'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/AdminHeader'
import AdminCampaignsSearch from '../../components/AdminCampaignsSearch'
import Link from '../../components/Link'

export class AdminTeamsEdit extends Component {
  constructor () {
    super()

    this.state = {
      loading: true,
      descriptionInput: '',
      disableInteraction: false,
      nameInput: '',
      hashtagInput: '',
      teamCampaigns: []
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
        teamCampaigns: team.campaigns
      })
    }
  }

  async updateTeam (params) {
    const { id } = this.props
    this.setState({ disableInteraction: true })

    try {
      await this.props.updateTeam(id, params)
      Router.push('/admin/teams')
    } catch (e) {
      console.log(e)
      this.setState({ disableInteraction: false })
    }
  }

  renderCampaignsSelectSection () {
    return (
      <div className='form__section'>
        <h2 className='header--medium'>
          Team campaigns
        </h2>
        <AdminCampaignsSearch
          selectedCampaigns={this.state.teamCampaigns}
          addCampaign={this.addCampaignToTeam}
          removeCampaign={this.removeCampaignFromTeam}
        />
      </div>
    )
  }

  addCampaignToTeam (campaignId) {
    let { teamCampaigns } = this.state
    teamCampaigns = teamCampaigns.filter(c => c !== campaignId)
    teamCampaigns.push(campaignId)
    this.setState({ teamCampaigns })
  }

  removeCampaignFromTeam (campaignId) {
    let { teamCampaigns } = this.state
    teamCampaigns = teamCampaigns.filter(c => c !== campaignId)
    this.setState({ teamCampaigns })
  }

  render () {
    const { authenticatedUser } = this.props
    const { destroyConfirmation } = this.state

    if (this.state.loading) {
      return (
        <div><AdminHeader /></div>
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
          <div className='row'>
            <div className='sidebar'>
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
            <div className='content--with-sidebar'>
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
        {this.renderCampaignsSelectSection()}
        <div className='form__footer'>
          <button
            className='button'
            id='add-new-badge-submit-button'
            type='submit'
          >
            Update Team
          </button>
        </div>
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
            maxLength={150}
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

    const {
      descriptionInput,
      nameInput,
      hashtagInput,
      teamCampaigns
    } = this.state

    const params = {
      bio: descriptionInput,
      name: nameInput,
      hashtag: hashtagInput,
      campaigns: teamCampaigns
    }

    this.updateTeam(params)
  }

  resetInputs () {
    this.setState({
      loading: true,
      descriptionInput: '',
      disableInteraction: false,
      nameInput: '',
      hashtagInput: '',
      teamCampaigns: []
    })
  }
}

const Page = connect(['authenticatedUser', 'error', 'team', 'admin'], actions)(AdminTeamsEdit)

Page.getInitialProps = function ({ req }) {
  const { id } = req.params
  return { id }
}

export default Page
