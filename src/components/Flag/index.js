import React from 'react'
import PropTypes from 'prop-types'
import '../../../node_modules/flag-icon-css/css/flag-icon.min.css'
import './Flag.css'

const Flag = ({ language, onClick }) => {
  const flagClasses = `flag-icon flag-icon-${language}`
  return (
    <div className="Flag" onClick={() => onClick(language)}>
      <span className={flagClasses}>&nbsp;</span>
    </div>
  )
}

Flag.propTypes = {
  language: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Flag
