import React from 'react';
import './GameResult.css';

const GameResult = props => {
  const inProgress = <i className="fa fa-smile-o" aria-hidden="true"></i>;
  const lastChance = <i className="fa fa-meh-o" aria-hidden="true"></i>;
  const lost = <i className="fa fa-frown-o" aria-hidden="true"></i>;

  return (
    props.guessesLeft > 1
      ? <div className="GameResult">{inProgress}</div>
      : props.guessesLeft === 1
      ? <div className="GameResult">{lastChance}</div>
      : <div className="GameResult">{lost}</div>
  )
};

GameResult.propTypes = {
  guessesLeft: React.PropTypes.number.isRequired
};

export default GameResult
