import React, { Component } from 'react'
import FilterBar from '../FilterBar'
import AssignmentsTable from '../AssignmentsTable'
import { sortBy, prop } from 'ramda'
import Link from '../Link'

class DashboardAssignments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      assignmentsFilter: 'all'
    }

    this.onAssignmentsFilterClick = this.onAssignmentsFilterClick.bind(this)
  }

  onAssignmentsFilterClick (assignmentsFilter) {
    this.setState({ assignmentsFilter })
  }

  render () {
    const { favorites, assignments, authenticatedUser } = this.props

    const assignmentFilters = [
      { name: 'Teams', id: 'teams' },
      { name: 'Favorites', id: 'favorites' },
      { name: 'All', id: 'all' }
    ]

    let teamAssignments = sortBy(prop('team_priority'), assignments).map(task => {
      return {
        priority: task.team_priority ? `team priority: ${task.team_priority}` : task.priority,
        name: task.name,
        assigned_by: task.team_name,
        campaign_hashtag: task.campaign_hashtag
      }
    })

    const allCampaigns = {
      favorites: sortBy(prop('priority'), favorites),
      teams: teamAssignments,
      all: teamAssignments.concat(favorites)
    }

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
            <a class='header-link'>Campaigns</a>
          </Link>
        </h2>
        <FilterBar
          filters={assignmentFilters}
          active={this.state.assignmentsFilter}
          onClick={this.onAssignmentsFilterClick}
        />
        <AssignmentsTable assignments={assignmentsTable} />
      </div>
    )
  }
}

export default DashboardAssignments
