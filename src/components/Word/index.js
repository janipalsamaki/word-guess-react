import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Letter from '../Letter'
import './Word.css'

const Word = ({ guessedTheWord, word }) => {
  const ariaLabel = getAriaLabel(word, guessedTheWord)
  const ariaDescribedBy = 'word-description'

  return (
    <Fragment>
      <ul
        className="Word"
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
      >
        {[...word].map((letter, index) => (
          <Letter
            key={index}
            letter={letter.letter}
            disabled={letter.disabled}
            onClick={() => {}}
          />
        ))}
      </ul>
      <p id={ariaDescribedBy} className="sr-only">
        This is the word to be guessed. Correctly guessed letters are
        pronounced. Other letters are pronounced as "blank" until guessed
        correctly.
      </p>
    </Fragment>
  )
}

const getAriaLabel = (word, guessedTheWord) => {
  const pronouncedWord = guessedTheWord
    ? word
    : [...word]
        .map((letter, index) => (letter.disabled ? letter.letter : 'blank'))
        .join(', ')

  return `Word: ${pronouncedWord}`
}

Word.propTypes = {
  guessedTheWord: PropTypes.bool.isRequired,
  word: PropTypes.array.isRequired
}

export default Word
