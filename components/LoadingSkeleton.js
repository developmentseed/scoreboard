'use strict'
import React from 'react'
import c from 'classnames'

export const LoadingSkeletonGroup = ({ children, style }) => (
  <div className='lsk__group' style={style}>{children}</div>
)

export const LoadingSkeleton = ({ type, size, width, inline, style, theme }) => {
  width = width || 1
  const k = c('lsk__item', {
    [`lsk__item--${type}`]: !!type,
    [`lsk__item--${size}`]: !!size,
    [`lsk__item--${theme}`]: !!theme
  })
  style = {
    ...style,
    width: `${width * 100}%`,
    display: inline ? 'inline-block' : 'block'
  }
  return <span className={k} style={style} />
}
