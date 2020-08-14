import React from 'react'
import PropTypes from 'prop-types'

export default function Chip ({ label, color }) {
  return (
    <div className={`chip chip--${color}`}>
      <span className='chip--label'>{label.toUpperCase()}</span>
    </div>
  )
}

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
}

Chip.defaultProps = {
  color: 'primary'
}
