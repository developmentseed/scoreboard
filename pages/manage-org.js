import React, { useEffect, useState } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
import NotLoggedIn from '../components/NotLoggedIn'
import { LoadingState } from '../components/common/LoadingState'

export function ManageOrg (props) {
  const [loading, setLoading] = useState(true)

  // On load get the user
  useEffect(() => {
    props.getAuthenticatedUser()
      .then(() => setLoading(false))
  }, [])

  if (loading) {
    return <LoadingState />
  }
  const { authenticatedUser } = props

  if (!authenticatedUser.loggedIn) {
    return <NotLoggedIn />
  }

  return (
    <div className='admin'>
      <section>
        <div className='row widget-container'>
          <div className='widget-25'>
            <h2 className='header--large'>Organization Management</h2>
          </div>
          <div className='widget-75'>
            <div>
              <h1 className='header--xlarge'>Owners & Managers</h1>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
const Page = connect(['authenticatedUser', 'teams'], actions)(ManageOrg)

export default Page