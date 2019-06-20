import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Letter.css'

interface Props {
  disabled: boolean
  letter: string
  onClick(letter: string): void
  role?: string
}

const Letter: FunctionComponent<Props> = ({
  disabled,
  letter,
  onClick,
  role
}) => {
  const classes = classNames(
    'Letter',
    { space: letter === ' ' },
    { dash: letter === '-' },
    { disabled: disabled }
  )

  return (
    <li
      className={classes}
      role={role}
      onClick={() => onClick(letter)}
      aria-disabled={disabled ? 'true' : false}
    >
      {renderLetterElement(letter, disabled, role)}
    </li>
  )
}

const renderLetterElement = (
  letter: string,
  disabled: boolean,
  role?: string
) => {
  if (role === 'button') {
    const ariaLabel: string = disabled ? letter : 'blank'

    return (
      <button aria-label={ariaLabel} disabled={disabled}>
        {letter}
      </button>
    )
  } else if (letter === '-') {
    return <span>{letter}</span>
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

export interface LetterType {
  letter: string
  disabled: boolean
}

export default Letter
