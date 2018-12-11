import React from 'react'
import Link from './Link'

export default ({ message, callToAction, callToActionUrl }) => {
  return (

    <div className='data-not-available'>
      <span>{message}.</span>
      {
        callToAction && (
          <span>
            <br />
            <Link href={callToActionUrl}>
              <a>{callToAction}.</a>
            </Link>
          </span>
        )
      }
    </div>
  )
}
