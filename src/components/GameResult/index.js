import React from 'react'
import PropTypes from 'prop-types'
import './GameResult.css'

const GameResult = ({ guessedTheWord, guessesLeft }) => {
  const inProgress = <i className="fa fa-smile-o" aria-hidden="true" />
  const lastChance = <i className="fa fa-meh-o" aria-hidden="true" />
  const lost = <i className="fa fa-frown-o" aria-hidden="true" />
  const won = <i className="fa fa-thumbs-o-up" aria-hidden="true" />

  return guessedTheWord ? (
    <div className="GameResult" aria-label="You won the game! Congratulations!">
      {won}
    </div>
  ) : guessesLeft > 1 ? (
    <div className="GameResult" aria-label="Game is in progress.">
      {inProgress}
    </div>
  ) : guessesLeft === 1 ? (
    <div
      className="GameResult"
      aria-label="You can guess wrong only one more time."
    >
      {lastChance}
    </div>
  ) : (
    <div className="GameResult" aria-label="You lost the game. Try again!">
      {lost}
    </div>
  )
}

GameResult.propTypes = {
  guessedTheWord: PropTypes.bool.isRequired,
  guessesLeft: PropTypes.number.isRequired
}

export default GameResult
