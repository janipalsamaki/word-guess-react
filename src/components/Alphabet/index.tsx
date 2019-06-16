import React from 'react'
import PropTypes from 'prop-types'
import Letter, { LetterType } from '../Letter'
import './Alphabet.css'

interface Props {
  letters: LetterType[]
  onClick(letter: string): void
}

const Alphabet: React.FunctionComponent<Props> = ({ letters, onClick }) => (
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

Alphabet.propTypes = {
  letters: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Alphabet
