import React from 'react';
import Letter from '../Letter/Letter';
import './Alphabet.css';

const Alphabet = props => {
  return (
    <div className="Alphabet">
      {[...props.letters].map(
        (letter, index) => <Letter key={index} letter={letter.letter} disabled={letter.disabled} onClick={props.onClick} />
      )}
    </div>
  );
};

Alphabet.propTypes = {
  letters: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Alphabet
