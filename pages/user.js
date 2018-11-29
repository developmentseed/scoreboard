import React, { Component } from 'react'
import api from '../lib/utils/api'
import '../styles/Users.scss'
import UserGlance from '../components/UserGlance'
import UserHeader from '../components/UserHeader'
import UserStats from '../components/UserStats'
import getSumEdits from '../lib/utils/sum_edits'

class User extends Component {
  static async getInitialProps ({ req }) {
    const { id } = req.params

    try {
      const res = await api('get', `/api/users/${id}`)
      const { records, country, badges } = res.data

      return {
        id,
        records,
        country,
        badges
      }
    } catch (e) {
      console.log(e)
      this.props.setNotification({ type: 'error', message: 'Could not get user' })
    }
  }

  async componentDidMount () {
    const { id, records, badges } = this.props
    if (!records || !badges) {
      try {
        const res = await api('get', `/api/users/${id}`)
        const { records, country, badges } = res.data

        this.setState({
          id,
          records,
          country,
          badges
        })
      } catch (e) {
        console.log(e)
        this.props.setNotification({ type: 'error', message: 'Could not get user' })
      }
    }
  }

  render () {
    const { records, country, badges } = this.props
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

export default User
