import React from 'react';
import './GameResult.css';

const GameResult = props => {
  return (
    props.guessedTheWord
      ? <div className="GameResult" onClick={() => props.onClick()}>:-)</div>
      : props.guessesLeft === 0
      ? <div className="GameResult" onClick={() => props.onClick()}>:-(</div>
      : null
  )
};

export default GameResult
