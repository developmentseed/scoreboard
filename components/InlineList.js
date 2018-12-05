import React from 'react'
import Link from './Link'

export default ({ list }) => {
  return (
    <ul>
      {
        list && list.map((item) => {
          return (
            <li>
              <Link>
                <a>
                  {item.name}
                </a>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
