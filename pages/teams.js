import React, { Component, useState } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
import Table from '../components/common/Table'
import TeamsConnectBanner from '../components/TeamConnectBanner'
import join from 'url-join'
import { APP_URL_PREFIX } from '../api/src/config'
import { equals } from 'ramda'

const searchIcon = join(APP_URL_PREFIX, '/static/magnifier-left.svg')

const tableSchema = {
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

const Sidebar = ({
  handleOnlyMemberTeamsToggle,
  handleOnlyModeratedTeamsToggle,
  handleReset,
  handleSearch,
  onlyMemberTeams,
  onlyModeratedTeams,
  searchText,
  user = {}
}) => {
  const [initialSearchText] = useState(searchText)
  const [initialOnlyModeratedTeams] = useState(onlyModeratedTeams)
  const [initialOnlyMemberTeams] = useState(onlyMemberTeams)
  const isReset = equals(
    { searchText, onlyModeratedTeams, onlyMemberTeams },
    { searchText: initialSearchText, onlyModeratedTeams: initialOnlyModeratedTeams, onlyMemberTeams: initialOnlyMemberTeams }
  )
  const _handleReset = () => {
    handleReset({
      searchText: initialSearchText,
      onlyMemberTeams: initialOnlyMemberTeams,
      onlyModeratedTeams: initialOnlyModeratedTeams
    })
  }
  return (
    <div className='widget-25'>
      <h3 className='header--medium'>Filter</h3>
      <form className='filters' onSubmit={e => e.preventDefault()}>
        <fieldset>
          <legend>Search</legend>
          <div className='search'>
            <input className='input--text' value={searchText} onChange={handleSearch} />
            <span className='search-icon' style={{ backgroundImage: `url(${searchIcon})` }} />
          </div>
        </fieldset>
        {
          user.loggedIn &&
          <fieldset>
            <div className='checkbox'>
              <input type='checkbox' id='toggleOnlyMemberTeams' name='onlyMembers'
                checked={onlyMemberTeams}
                onChange={handleOnlyMemberTeamsToggle} />
              <label htmlFor='toggleOnlyMemberTeams'>Only show teams I am a member of.</label>
            </div>
            <div className='checkbox'>
              <input type='checkbox' id='toggleOnlyModeratedTeams' name='onlyModerated'
                checked={onlyModeratedTeams}
                onChange={handleOnlyModeratedTeamsToggle} />
              <label htmlFor='toggleOnlyModeratedTeams'>Only show teams I moderate.</label>
            </div>
          </fieldset>
        }
        {
          !isReset &&
          <div className='reset'>
            <div className='link--normal' onClick={_handleReset}>
              <legend>&#10005; Reset Filters</legend></div>
          </div>
        }
      </form>
    </div>
  )
}

/**
 * Teams page shows the list of teams
 * that exist on the platform
 */
class Teams extends Component {
  constructor (props) {
    super(props)
    this.state = {
      teams: [...props.teams.records],
      searchText: '',
      onlyMemberTeams: false,
      onlyModeratedTeams: false
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleOnlyMemberTeamsToggle = this.handleOnlyMemberTeamsToggle.bind(this)
    this.handleOnlyModeratedTeamsToggle = this.handleOnlyModeratedTeamsToggle.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  async componentDidMount () {
    await this.props.getAuthenticatedUser()
    await this.props.getAllTeams()
  }

  componentDidUpdate (prevProps) {
    const { teams: prevTeams } = prevProps
    const { teams, authenticatedUser } = this.props
    if (prevTeams.records.length !== teams.records.length) {
      this.setState({
        user: authenticatedUser,
        teams: teams.records
      })
    }
  }

  handleOnlyMemberTeamsToggle (e) {
    const { teams, user } = this.state
    const id = Number(user.account.id)
    const filteredTeams = teams.filter(team => team.members.includes(id))
    this.setState({
      teams: filteredTeams,
      onlyMemberTeams: e.target.checked
    })
  }

  handleOnlyModeratedTeamsToggle (e) {
    const { teams, user } = this.state
    const id = user.account.id
    const filteredTeams = teams.filter(team => Object.keys(team.moderators).includes(id))
    this.setState({
      teams: filteredTeams,
      onlyModeratedTeams: e.target.checked
    })
    this.setState({
      teams: filteredTeams,
      onlyModeratedTeams: e.target.checked
    })
  }

  handleSearch (e) {
    e.preventDefault()
    let searchText = e.target.value
    let teams = this.props.teams.records
    const rgx = new RegExp(searchText, 'ig')
    teams = teams.filter(record => rgx.test(record.name) || rgx.test(record.bio) || rgx.test(record.hashtag))
    this.setState({
      teams,
      searchText
    })
  }

  handleReset ({ searchText, onlyMemberTeams, onlyModeratedTeams }) {
    const teams = [...this.props.teams.records]
    this.setState(
      {
        searchText,
        onlyMemberTeams,
        onlyModeratedTeams,
        teams
      }
    )
  }

  renderList () {
    const { teams } = this.state
    if (!teams || !teams.length) return
    const tableData = teams.map(team => {
      const memberCount = team.members.length
      const moderatorNames = Object.values(team.moderators).join(', ')
      return {
        ...team,
        memberCount,
        moderatorNames
      }
    })
    let idMap = Object.assign(...teams.map(({ id, name }) => ({ [name]: id })))
    return (
      <div>
        <Table tableSchema={tableSchema} data={tableData} idMap={idMap} />
      </div>
    )
  }

  render () {
    const { teams, user, searchText, onlyMemberTeams, onlyModeratedTeams } = this.state
    console.log(user)

    return (
      <div className='Users'>
        <header className='header--internal--green header--page'>
          <div className='row'>
            <h1 className='section-sub--left header--xlarge margin-top-sm'>Teams</h1>
          </div>
        </header>
        {
          (
            user &&
            user.loggedIn &&
            !user.account.activatedTeams)
            ? <TeamsConnectBanner />
            : <div />
        }
        <section>
          <div className='row widget-container'>
            <Sidebar
              user={user}
              searchText={searchText}
              onlyMemberTeams={onlyMemberTeams}
              onlyModeratedTeams={onlyModeratedTeams}
              handleSearch={this.handleSearch}
              handleOnlyMemberTeamsToggle={this.handleOnlyMemberTeamsToggle}
              handleOnlyModeratedTeamsToggle={this.handleOnlyModeratedTeamsToggle}
              handleReset={this.handleReset}
            />
            <div className='widget-75'>
              <h3 className='header--medium'>{`${teams.length} Teams`}</h3>
              {this.renderList()}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const Page = connect(['teams', 'authenticatedUser'], actions)(Teams)
export default Page
