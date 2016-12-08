import React from 'react';
import './NewWord.css';

const NewWord = props => {
  return (
    <div className="NewWord" onClick={() => props.onClick()}>
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
  )
};

NewWord.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default NewWord
