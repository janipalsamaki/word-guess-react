import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import Flag from '../Flag'
import './LanguageSwitcher.css'

interface Props {
  languages: string[]
  onClick(language: string): void
}

const LanguageSwitcher: FunctionComponent<Props> = ({ languages, onClick }) => (
  <div className="LanguageSwitcher">
    {[...languages].map(language => (
      <Flag key={language} language={language} onClick={onClick}>
        {language}
      </Flag>
    ))}
  </div>
)

LanguageSwitcher.propTypes = {
  languages: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default LanguageSwitcher
