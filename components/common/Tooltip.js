import React from 'react'

const Tooltip = props => {
  return (
    <>
      <div className='tooltip-container'>
        {props.children}
        <div className='tooltip'>
          <i className='tooltip-button' />
          <span className='tooltip-info'>{props.description}</span>
        </div>
      </div>
    </>
  )
}

export default Tooltip
