import React from 'react'
import PropTypes from 'prop-types'
import './GuessesLeft.css'

const GuessesLeft = ({ guessesLeft }) => {
  return <div className="GuessesLeft">{guessesLeft}</div>
}

GuessesLeft.propTypes = {
  guessesLeft: PropTypes.number.isRequired
}

export default GuessesLeft
