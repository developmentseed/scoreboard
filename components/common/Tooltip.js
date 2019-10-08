export const Tooltip = props => {
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

export const TooltipDescriptions = {
  ROADS: 'kilometers of roads added or modified',
  RAILWAYS: 'kilometers of railways added or modified',
  COASTLINES: 'kilometers of coastlin added or modified',
  WATERWAYS: 'kilometers of waterways added or modified',
}
