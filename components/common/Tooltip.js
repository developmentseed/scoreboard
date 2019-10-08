import React from 'react'
import InfoIcon from '../../static/circle-information'

export const Tooltip = props => {
  return (
    <>
      <div className='tooltip-container'>
        {props.children}
        <div className='tooltip'>
          <InfoIcon className='tooltip-button' />
          <span className='tooltip-info'>{props.description}</span>
        </div>
      </div>
    </>
  )
}

export const TooltipDescriptions = {
  ROADS: 'kilometers of road added or modified',
  RAILWAYS: 'kilometers of railway added or modified',
  COASTLINES: 'kilometers of coastline added or modified',
  WATERWAYS: 'kilometers of waterways added or modified'
}
