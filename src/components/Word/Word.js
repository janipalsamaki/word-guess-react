import React from 'react';
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
  word: React.PropTypes.array.isRequired
};

export default Word