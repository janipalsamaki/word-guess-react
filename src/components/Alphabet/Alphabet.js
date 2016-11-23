import React from 'react';
import Letter from '../Letter/Letter';
import './Alphabet.css';

function Alphabet(props) {
  return (
    <div className="Alphabet">
      {[...props.letters].map(
        (letter, index) => <Letter key={index} letter={letter.letter} disabled={letter.disabled} onClick={props.onClick} />
      )}
    </div>
  );
}

export default Alphabet
