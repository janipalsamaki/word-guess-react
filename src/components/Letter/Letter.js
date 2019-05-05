import React from 'react'
import PropTypes from 'prop-types'
import './Letter.css'

const Letter = props => {
  const classNames = props.letter === ' ' ? 'Letter space'
    : props.letter === '-' ? 'Letter dash'
    : 'Letter'

  return (
    <div className={classNames} onClick={() => props.onClick(props.letter)} disabled={props.disabled}>{props.letter}</div>
  )
}

Letter.propTypes = {
  disabled: PropTypes.bool.isRequired,
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Letter
