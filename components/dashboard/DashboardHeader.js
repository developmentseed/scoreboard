import React from 'react'
import Link from '../Link'

function DashboardHeader (props) {
  const { authenticatedUser } = props
  const { osm, account } = authenticatedUser
  const osmUser = osm._xml2json.user

  // use default gravatar image
  let profileImage = 'https://www.gravatar.com/avatar/00000000000000000000000000000000'
  if (osmUser && osmUser.img && osmUser.img['@'] && osmUser.img['@']['href']) {
    profileImage = osmUser.img['@']['href']
  }
  return (
    <header className='header--internal--green header--page'>
      <div className='row'>
        <div className='header--content--wrapper'>
          <div className='section-sub--left section-width-fifty-plus'>
            {<img className='profile--thumb' style={{ float: 'left' }} src={profileImage} alt='Profile pic' />}
            <h1 className='header--xlarge header--with-description'>{osmUser['@']['display_name']}</h1>
            <Link href={`/users/${account.id}`}><a className='link--large'>View Public Profile</a></Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
