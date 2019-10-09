import React from 'react'
import InfoIcon from '../../static/circle-information'
import ReactTooltip from 'react-tooltip'

export const Tooltip = props => {
  return (
    <>
      <span data-tip={props.dataTip}>
        <InfoIcon className='tooltip' />
      </span>
      <ReactTooltip />
    </>
  )
}

export const TooltipDescriptions = {
  ROADS: 'kilometers of road added or modified',
  RAILWAYS: 'kilometers of railway added or modified',
  COASTLINES: 'kilometers of coastline added or modified',
  WATERWAYS: 'kilometers of waterways added or modified'
}
