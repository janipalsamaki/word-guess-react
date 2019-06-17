import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import './NewWord.css'

interface Props {
  onClick(): void
}

const NewWord: FunctionComponent<Props> = ({ onClick }) => (
  <button
    className="NewWord"
    onClick={() => onClick()}
    aria-label="Start a new game"
  >
    <i className="fa fa-arrow-right" aria-hidden="true" />
  </button>
)

NewWord.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NewWord
