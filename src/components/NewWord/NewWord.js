import React from 'react';
import './NewWord.css';

const NewWord = props => {
  return (
    <div className="NewWord" onClick={() => props.onClick()}></div>
  )
};

export default NewWord
