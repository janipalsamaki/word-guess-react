import React from 'react';
import PropTypes from 'prop-types';
import Letter from '../Letter/Letter';
import './Word.css';

const Word = props => {
  return (
    <div className="Word">
      {[...props.word].map(
        (letter, index) => <Letter key={index} letter={letter.letter} disabled={letter.disabled} onClick={() => {}} />
      )}
    </div>
  );
};

Word.propTypes = {
  word: PropTypes.array.isRequired
};

export default Word