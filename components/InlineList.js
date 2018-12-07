import React from 'react'
import Link from './Link'

export default ({ list }) => {
  return (
    <ul>
      {
        list && list.map((item) => {
          return (
            <li>
              <Link href={item.href}>
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
