import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
import Link from '../components/Link'
import join from 'url-join'
import { Tooltip } from '../components/common/Tooltip'

import { APP_URL_PREFIX } from '../api/src/config'

const tableHeaders = require('../lib/page-text/table-headers.json')
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
  constructor () {
    super()

    this.state = {
      loading: true,
      teams: []
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  async componentDidMount () {
    await this.props.getAllTeams()
  }

  componentDidUpdate () {
    const { teams } = this.props
    if (teams && this.state.loading) {
      this.setState({
        loading: false,
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

    if (!teams || !teams.length) return

    return (
      <div>
        <table className='admin-table'>
          <thead>
            <tr>
              {tableHeaders
                .filter(table => table.categories.includes('team'))
                .map(header => (
                  <th>
                    {header.name_en}
                    <Tooltip dataTip={header.description_en} />
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {
              teams
                .map((team) => (
                  <tr key={`team-${team.name}`}>
                    <td>
                      <Link href={`/teams/${team.id}`}>
                        <a className='link--normal'>{team.name}</a >
                      </Link>
                    </td>
                    <td>{team.hashtag}</td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    )
  }

  render () {
    const teams = this.state.teams

    return (
      <div className='Users'>
        <header className='header--internal--green header--page'>
          <div className='row'>
            <h1 className='section-sub--left header--xlarge margin-top-sm'>Teams</h1>
          </div>
        </header>
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

const Page = connect(['teams'], actions)(Teams)
export default Page
