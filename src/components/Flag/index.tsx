import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import '../../../node_modules/flag-icon-css/css/flag-icon.min.css'
import './Flag.css'

interface Props {
  language: string
  onClick(language: string): void
}

const Flag: FunctionComponent<Props> = ({ language, onClick }) => {
  const ariaLabel: string = `Change language to "${language}"`
  const flagClasses: string = `flag-icon flag-icon-${language}`

  return (
    <button
      className="Flag"
      onClick={() => onClick(language)}
      aria-label={ariaLabel}
    >
      <span className={flagClasses}>&nbsp;</span>
    </button>
  )
}

Flag.propTypes = {
  language: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Flag
