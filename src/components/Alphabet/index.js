import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Letter from '../Letter'
import './Alphabet.css'

const Alphabet = ({ letters, onClick }) => {
  return (
    <ul className="Alphabet">
      {[...letters].map((letter, index) => {
        return (
          <Letter
            key={index}
            letter={letter.letter}
            disabled={letter.disabled}
            onClick={onClick}
            role="button"
          />
        )
      })}
    </ul>
  )
}

Alphabet.propTypes = {
  letters: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Alphabet
