import React from 'react'
import PropTypes from 'prop-types'
import Flag from '../Flag'
import './LanguageSwitcher.css'

const LanguageSwitcher = ({ languages, onClick }) => {
  return (
    <div className="LanguageSwitcher">
      {[...languages].map(language => (
        <Flag key={language} language={language} onClick={onClick}>
          {language}
        </Flag>
      ))}
    </div>
  )
}

LanguageSwitcher.propTypes = {
  languages: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default LanguageSwitcher
