import React from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'

export class GlobalLoading extends React.Component {

  render () {
    return createPortal((
      <div className='loading-container'>
        <div className='loading-pane'>
          <div className='spinner'>
            <div className='spinner__bounce' />
            <div className='spinner__bounce' />
            <div className='spinner__bounce' />
          </div>
        </div>
      </div>
    ), document.body)
  }
}
