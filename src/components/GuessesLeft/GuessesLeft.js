import React from 'react'
import PropTypes from 'prop-types'
import './GuessesLeft.css'

const GuessesLeft = props => {
  return (
    <div className="GuessesLeft">{props.guessesLeft}</div>
  )
}

GuessesLeft.propTypes = {
  guessesLeft: PropTypes.number.isRequired
}

export default GuessesLeft
