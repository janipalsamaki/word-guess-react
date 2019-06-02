import React from 'react'
import PropTypes from 'prop-types'
import './Letter.css'

const Letter = ({ disabled, letter, onClick, role }) => {
  const classNames =
    letter === ' ' ? 'Letter space' : letter === '-' ? 'Letter dash' : 'Letter'

  const ariaLabel = disabled ? letter : 'blank'

  return (
    <li
      className={classNames}
      role={role}
      onClick={() => onClick(letter)}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <button aria-label={ariaLabel}>{letter}</button>
    </li>
  )
}

Letter.propTypes = {
  disabled: PropTypes.bool.isRequired,
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  role: PropTypes.string
}

export default Letter
