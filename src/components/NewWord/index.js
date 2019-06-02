import React from 'react'
import PropTypes from 'prop-types'
import './NewWord.css'

const NewWord = ({ onClick }) => {
  return (
    <div className="NewWord" onClick={() => onClick()}>
      <i className="fa fa-arrow-right" aria-hidden="true" />
    </div>
  )
}

NewWord.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NewWord
