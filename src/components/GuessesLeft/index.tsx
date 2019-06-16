import React from 'react'
import PropTypes from 'prop-types'
import './GuessesLeft.css'

interface Props {
  guessesLeft: number
}

const GuessesLeft: React.FunctionComponent<Props> = ({ guessesLeft }) => {
  const ariaLabel: string = `Guesses left: ${guessesLeft}`

  return (
    <div className="GuessesLeft" aria-label={ariaLabel}>
      {guessesLeft}
    </div>
  )
}

GuessesLeft.propTypes = {
  guessesLeft: PropTypes.number.isRequired
}

export default GuessesLeft
