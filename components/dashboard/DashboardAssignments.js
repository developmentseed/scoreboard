import React, { Component } from 'react'
import FilterBar from '../FilterBar'
import AssignmentsTable from '../AssignmentsTable'
import { sortBy, prop } from 'ramda'
import Link from '../Link'

class DashboardAssignments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      assignmentsFilter: 'userContributions'
    }

    this.onAssignmentsFilterClick = this.onAssignmentsFilterClick.bind(this)
  }

  onAssignmentsFilterClick (assignmentsFilter) {
    this.setState({ assignmentsFilter })
  }

  render () {
    const { favorites, assignments, authenticatedUser, all } = this.props
    const assignmentFilters = [
      { name: 'Teams', id: 'teams' },
      { name: 'Favorites', id: 'favorites' },
      { name: 'All', id: 'userContributions' }
    ]
    let teamAssignments = sortBy(prop('team_priority'), assignments).map(task => {
      return {
        priority: task.team_priority ? `team priority: ${task.team_priority}` : task.priority,
        name: task.name,
        assigned_by: task.team_name,
        campaign_hashtag: task.campaign_hashtag,
        source: 'ASSIGNMENT'
      }
    })
    let userFavorites = favorites.map(favorite => {
      return {
        campaign_hashtag: favorite.campaign_hashtag,
        campaign_id: favorite.campaign_id,
        name: favorite.name,
        priority: favorite.priority,
        tasker_id: favorite.tasker_id,
        tm_id: favorite.tm_id,
        source: 'FAVORITES'
      }
    })
    let userContributions = all.map(campaign => {
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
    })
    const allCampaigns = {
      favorites: sortBy(prop('priority'), userFavorites),
      teams: teamAssignments,
      userContributions
    }
    console.log(userContributions)
    const assignmentsTable = allCampaigns[this.state.assignmentsFilter].map((assignment) => {
      if (!assignment.assigned_by) {
        assignment.assigned_by = authenticatedUser.osm.displayName
      }
      return assignment
    })

    return (
      <div>
        <h2 className='header--large header--with-description'>
          <Link href='/campaigns'>
            <a className='header-link'>Campaigns</a>
          </Link>
        </h2>
        <FilterBar
          filters={assignmentFilters}
          active={this.state.assignmentsFilter}
          onClick={this.onAssignmentsFilterClick}
        />
        <AssignmentsTable assignments={assignmentsTable} filter={this.state.assignmentsFilter} />
      </div>
    )
  }
}

export default DashboardAssignments
