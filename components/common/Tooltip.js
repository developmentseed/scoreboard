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
