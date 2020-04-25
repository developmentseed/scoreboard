import React, { Component, useState } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
import Table from '../components/common/Table'
import TeamsConnectBanner from '../components/TeamConnectBanner'
import join from 'url-join'
import { APP_URL_PREFIX } from '../api/src/config'
import Link from '../components/Link'
import { LoadingState } from '../components/common/LoadingState'
import { equals, pathOr } from 'ramda'

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
    const { authenticatedUser } = props
    this.state = {
      loading: true,
      teams: [...props.teams.records],
      canCreate: props.teams.canCreate,
      searchText: '',
      onlyMemberTeams: false,
      onlyModeratedTeams: false,
      user: { ...authenticatedUser }
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleOnlyMemberTeamsToggle = this.handleOnlyMemberTeamsToggle.bind(this)
    this.handleOnlyModeratedTeamsToggle = this.handleOnlyModeratedTeamsToggle.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  async componentDidMount () {
    await this.props.getAuthenticatedUser().then(() => {
      this.setState({ loading: false })
    })
    await this.props.getAllTeams()
  }

  componentDidUpdate (prevProps) {
    const { teams: prevTeams } = prevProps
    const { teams, authenticatedUser } = this.props
    if (prevTeams.records.length !== teams.records.length) {
      this.setState({
        user: authenticatedUser,
        teams: teams.records,
        canCreate: teams.canCreate
      })
    }
  }

  handleOnlyMemberTeamsToggle (e) {
    const onlyMemberTeams = e.target.checked
    const { onlyModeratedTeams, searchText } = this.state
    this.handleFilters({ searchText, onlyMemberTeams, onlyModeratedTeams })
    this.setState({ onlyMemberTeams })
  }

  handleOnlyModeratedTeamsToggle (e) {
    const onlyModeratedTeams = e.target.checked
    const { onlyMemberTeams, searchText } = this.state
    this.setState({ onlyModeratedTeams })
    this.handleFilters({ searchText, onlyMemberTeams, onlyModeratedTeams })
  }

  handleSearch (e) {
    e.preventDefault()
    const searchText = e.target.value
    const { onlyMemberTeams, onlyModeratedTeams } = this.state
    this.setState({ searchText })
    this.handleFilters({ searchText, onlyMemberTeams, onlyModeratedTeams })
  }

  handleFilters ({ searchText, onlyModeratedTeams, onlyMemberTeams }) {
    const { user: { account: { id: osmId } = {} } = {} } = this.state
    let { teams: { records: teams } } = this.props
    if (searchText) {
      const rgx = new RegExp(searchText, 'ig')
      teams = teams.filter(record => rgx.test(record.name) || rgx.test(record.bio) || rgx.test(record.hashtag))
    }
    if (onlyModeratedTeams) {
      teams = teams.filter(team => Object.keys(team.moderators).includes(osmId))
    }
    if (onlyMemberTeams) {
      teams = teams.filter(team => team.members.includes(Number(osmId)))
    }
    this.setState({ teams })
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
    if (this.state.loading || !this.state.user) {
      return (
        <div>
          <header className='header--internal--green header--page' style={{ paddingBottom: '8rem' }} />
          <LoadingState />
        </div>
      )
    }

    const { teams, canCreate, user, searchText, onlyMemberTeams, onlyModeratedTeams } = this.state
    const loggedIn = pathOr(false, ['loggedIn'], user)
    const activatedTeams = pathOr(false, ['account', 'activatedTeams'], user)
    return (
      <div className='Teams'>
        <header className='header--internal--green header--page'>
          <div className='row widget-container'>
            <div className='widget-75'>
              <h1 className='section-sub--left header--xlarge margin-top-sm'>Teams</h1>
            </div>
            { activatedTeams && canCreate
              ? <div className='page-actions'>
                <Link href='/create-team'>
                  <a>
                    <button className='button'>
                    Create Team
                    </button>
                  </a>
                </Link>
              </div>
              : <></>
            }
          </div>
        </header>
        {
          loggedIn && !activatedTeams
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
