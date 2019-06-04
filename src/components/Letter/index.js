import React from 'react'
import PropTypes from 'prop-types'
import './Letter.css'

const Letter = ({ disabled, letter, onClick, role }) => {
  const classNames =
    letter === ' ' ? 'Letter space' : letter === '-' ? 'Letter dash' : 'Letter'

  return (
    <li
      className={classNames}
      role={role}
      onClick={() => onClick(letter)}
      disabled={disabled}
      aria-disabled={disabled ? 'true' : null}
    >
      {renderLetterElement(letter, role, disabled)}
    </li>
  )
}

const renderLetterElement = (letter, role, disabled) => {
  if (role === 'button') {
    const ariaLabel = disabled ? letter : 'blank'

    return (
      <button aria-label={ariaLabel} disabled={disabled}>
        {letter}
      </button>
    )
  } else if (!disabled) {
    return <span>&nbsp;</span>
  }

  return <span>{letter}</span>
}

Letter.propTypes = {
  disabled: PropTypes.bool.isRequired,
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  role: PropTypes.string
}

export default Letter
