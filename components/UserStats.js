import React from 'react'
import dynamic from 'next/dynamic'
import BadgeBox from './BadgeBox'

const CalendarHeatmap = dynamic(() => import('./charts/CalendarHeatmap'), {
  ssr: false
})

const UserExtentMap = dynamic(() => import('./charts/UserExtentMap'), {
  ssr: false
})

const badgeBox = (badges) => (
  <div className='row'>
    <h2 className='header--large'>Badges</h2>
    <BadgeBox badges={badges} />
  </div>
)

const editBox = (records) => (
  <div className='row'>
    <div className='section-sub--tertiary'>
      <h2 className='header--large'>Edits</h2>
      <CalendarHeatmap times={records.edit_times} />
    </div>
    <div>
      <UserExtentMap extent={records.extent_uri} uid={records.uid} />
    </div>
  </div>
)

// const withActiveNav = (match) => (active, component) => {
//   const isActive = (prop) => (prop === active) ? 'active' : ''
//   return (
//     <div>
//       <div className='row'>
//         <ul className='nav-tab'>
//           <li className={`list--inline ${isActive('edits')}`}><Link href={`${match.url}/edits`}>Edits</Link></li>
//           <li className={`list--inline ${isActive('badges')}`}><Link href={`${match.url}/badges`}>Badges</Link></li>
//         </ul>
//       </div>
//       {component}
//     </div>
//   )
// }

export default ({ records, badges }) => (
  <section className='section--tertiary'>
    {badgeBox(badges)}
    {editBox(records)}
  </section>
)
