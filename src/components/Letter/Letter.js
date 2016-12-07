import React from 'react';
import './Letter.css';

const Letter = props => {
  const classNames = props.letter === ' ' ? 'Letter space'
    : props.letter === '-' ? 'Letter dash'
    : 'Letter';

  return (
    <div className={classNames} onClick={() => props.onClick(props.letter)} disabled={props.disabled}>{props.letter}</div>
  )
};

export default Letter
