import React from 'react';
import PropTypes from 'prop-types';
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
  letters: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Alphabet
