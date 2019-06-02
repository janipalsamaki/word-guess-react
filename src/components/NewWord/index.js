import React from 'react'
import PropTypes from 'prop-types'
import './NewWord.css'

const NewWord = ({ onClick }) => {
  return (
    <button
      className="NewWord"
      onClick={() => onClick()}
      aria-label="Start a new game"
    >
      <i className="fa fa-arrow-right" aria-hidden="true" />
    </button>
  )
}

NewWord.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NewWord
