import React from 'react';
import './GuessesLeft.css';

const GuessesLeft = props => {
  return (
    <div className="GuessesLeft">{props.guessesLeft}</div>
  )
};

GuessesLeft.propTypes = {
  guessesLeft: React.PropTypes.number.isRequired
};

export default GuessesLeft
