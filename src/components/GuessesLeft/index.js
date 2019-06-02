import React from 'react'
import PropTypes from 'prop-types'
import './GuessesLeft.css'

const GuessesLeft = ({ guessesLeft }) => {
  const ariaLabel = `Guesses left: ${guessesLeft}`

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
