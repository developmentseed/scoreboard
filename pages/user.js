import React, { Component } from 'react'
import UserGlance from '../components/UserGlance'
import UserHeader from '../components/UserHeader'
import UserStats from '../components/UserStats'
import getSumEdits from '../lib/utils/sum_edits'
import { actions } from '../lib/store'
import { connect } from 'unistore/react'

export class User extends Component {
  componentDidMount () {
    this.props.getUser(this.props.id)
  }

  render () {
    if (!this.props.user) return <div />
    const { records, country, badges } = this.props.user
    if (!records) return <div />

    const edits = getSumEdits(records)

    let numBadges = 0
    let BadgeSection = (
      <div className='About'>
        <header className='header--internal '>
          <div className='row'>
            <h1 className='header--xlarge'>User stats are missing!</h1>
          </div>
        </header>
        <section className='text-body section-first--sm'>
          <div className='row'>
            <p className='text-body--large'>We couldn't find stats for this user. Please contact an administrator.</p>
          </div>
        </section>
      </div>
    )
    if (badges) {
      numBadges = Object.keys(badges.earnedBadges).length
      BadgeSection = (
        <div>
          <UserGlance records={records} badges={badges} />
          <UserStats records={records} badges={badges} />
        </div>
      )
    }

    return (
      <div className='User'>
        <UserHeader
          name={records.name}
          edit_times={records.edit_times}
          num_badges={numBadges}
          num_edits={edits}
          num_hashtags={records.hashtags.length}
          country={country}
        />
        { BadgeSection }
      </div>
    )
  }
}

const connectedUser = connect(['user'], actions)(User)
connectedUser.getInitialProps = function ({ req }) {
  const { id } = req.params
  return {
    id
  }
}

export default connectedUser
