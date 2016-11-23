import React from 'react';
import './Letter.css';

const Letter = props => {
  return (
    <div className="Letter" onClick={() => props.onClick(props.letter)} disabled={props.disabled}>{props.letter}</div>
  )
};

export default Letter
