import React from 'react'
import Link from './Link'

export default function InlineList ({ list }) {
  return (
    <ul className='inline-list'>
      {
        list && list.map((item) => {
          return (
            <li key={item.name}>
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
