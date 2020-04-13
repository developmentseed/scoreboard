import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
import join from 'url-join'
import Table from '../components/common/Table'
import TeamsConnectBanner from '../components/TeamConnectBanner'
import { APP_URL_PREFIX } from '../api/src/config'

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

const searchIcon = join(APP_URL_PREFIX, '/static/magnifier-left.svg')

const Sidebar = ({ handleSearch }) => (
  <div className='widget-25'>
    <h3 className='header--medium'>Filter</h3>
    <form className='filters' onSubmit={e => e.preventDefault()}>
      <fieldset>
        <legend>Search</legend>
        <div className='search'>
          <input className='input--text' onChange={handleSearch} />
          <span className='search-icon' style={{ backgroundImage: `url(${searchIcon})` }} />
        </div>
      </fieldset>
    </form>
  </div>
)

/**
 * Teams page shows the list of teams
 * that exist on the platform
 */
class Teams extends Component {
  constructor (props) {
    super(props)
    this.state = { teams: [...props.teams.records] }
    this.handleSearch = this.handleSearch.bind(this)
  }

  async componentDidMount () {
    await this.props.getAuthenticatedUser()
    await this.props.getAllTeams()
  }

  componentDidUpdate (prevProps) {
    const { teams: prevTeams } = prevProps
    const { teams, authenticatedUser } = this.props
    if (prevTeams.records.length !== teams.records.length) {
      console.log(teams.records)
      this.setState({
        user: authenticatedUser,
        teams: teams.records
      })
    }
  }

  handleSearch (e) {
    e.preventDefault()
    let searchText = e.target.value
    let teams = this.props.teams.records
    const rgx = new RegExp(searchText, 'ig')
    teams = teams.filter(record => rgx.test(record.name) || rgx.test(record.bio) || rgx.test(record.hashtag))
    this.setState({
      teams
    })
  }

  renderList () {
    const { teams } = this.state
    // console.log( teams )

    if (!teams || !teams.length) return

    let idMap = Object.assign(...teams.map(({ id, name }) => ({ [name]: id })))
    return (
      <div>
        <Table tableSchema={tableSchema} data={teams} idMap={idMap} />
      </div>
    )
  }

  render () {
    const { teams, user } = this.state

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
            <Sidebar handleSearch={this.handleSearch} />
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
