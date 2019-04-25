import React, { Component } from 'react'
import FilterBar from '../FilterBar'
import AssignmentsTable from '../AssignmentsTable'
import { sortBy, prop, concat, reduce, map } from 'ramda'
import Link from '../Link'

class DashboardAssignments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      assignmentsFilter: 'Contributions'
    }

    this.onAssignmentsFilterClick = this.onAssignmentsFilterClick.bind(this)
  }

  onAssignmentsFilterClick (assignmentsFilter) {
    this.setState({ assignmentsFilter })
  }

  render () {
    const { favorites, assignments, all } = this.props
    let teamAssignments = map(task => {
      return {
        priority: task.team_priority ? `team priority: ${task.team_priority}` : task.priority,
        name: task.name,
        campaign_hashtag: task.campaign_hashtag,
        source: task.team_name
      }
    }, sortBy(prop('team_priority'), assignments))

    let userFavorites = sortBy(prop('priority'), map(favorite => {
      return {
        campaign_hashtag: favorite.campaign_hashtag,
        campaign_id: favorite.campaign_id,
        name: favorite.name,
        priority: favorite.priority,
        tasker_id: favorite.tasker_id,
        tm_id: favorite.tm_id,
        source: 'FAVORITES'
      }
    }, favorites))

    let userContributions = map(campaign => {
      return {
        author: campaign.author,
        campaign_hashtag: campaign.campaign_hashtag,
        changeset_comment: campaign.changeset_comment,
        created_at: campaign.created_at,
        description: campaign.description,
        done: campaign.done,
        geometry: campaign.geometry,
        id: campaign.id,
        instructions: campaign.instructions,
        name: campaign.name,
        priority: campaign.priority,
        status: campaign.status,
        tasker_id: campaign.tasker_id,
        tm_id: campaign.tm_id,
        updated_at: campaign.updated_at,
        validated: campaign.validated,
        source: 'CONTRIBUTION'
      }
    }, all)

    let assignmentsTable = reduce(concat, [], [userFavorites, teamAssignments, userContributions])

    switch (this.state.assignmentsFilter) {
      case 'Teams': {
        assignmentsTable = teamAssignments
        break
      }
      case 'Favorites': {
        assignmentsTable = userFavorites
        break
      }
      case 'Contributions': {
        assignmentsTable = userContributions
        break
      }

      case 'All': {
        break
      }
    }

    return (
      <div>
        <h2 className='header--large header--with-description'>
          <Link href='/campaigns'>
            <a className='header-link'>Campaigns</a>
          </Link>
        </h2>
        <FilterBar
          filters={[
            { name: 'Teams', id: 'Teams' },
            { name: 'Favorites', id: 'Favorites' },
            { name: 'Contributions', id: 'Contributions' },
            { name: 'All', id: 'All' }
          ]}

          active={this.state.assignmentsFilter}
          onClick={this.onAssignmentsFilterClick}
        />
        <AssignmentsTable assignments={assignmentsTable} filter={this.state.assignmentsFilter} />
      </div>
    )
  }
}

export default DashboardAssignments
