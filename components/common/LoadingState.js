import React from 'react'

export class LoadingState extends React.Component {
  render () {
    return (
      <div className='loading-container'>
        <div className='loading-pane'>
          <div className='spinner'>
            <div className='spinner__bounce' />
            <div className='spinner__bounce' />
            <div className='spinner__bounce' />
          </div>
        </div>
      </div>
    )
  }
}
