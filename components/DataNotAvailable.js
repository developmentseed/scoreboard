import React from 'react'
import Link from './Link'

export default ({ message, callToAction, callToActionUrl }) => {
  return (
    <div>
      <p>
        <span>{message}.</span>
        <span>
          <Link href={callToActionUrl}>
            <a>{callToAction}.</a>
          </Link>
        </span>
      </p>
    </div>
  )
}
