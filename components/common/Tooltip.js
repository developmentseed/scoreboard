import React from 'react'
import ReactTooltip from 'react-tooltip'

const Tooltip = props => {
  return (
    <>
      <span data-tip={props.dataTip} className={'table-tooltip' + ' ' + props.className}>
        {props.children}
      </span>
      <ReactTooltip />
    </>
  )
}

export default Tooltip
