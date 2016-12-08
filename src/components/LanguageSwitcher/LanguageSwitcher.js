import React from 'react';
import Flag from '../Flag/Flag';
import './LanguageSwitcher.css';

const LanguageSwitcher = props => {
  return (
    <div className="LanguageSwitcher">
      {[...props.languages].map(
        language => <Flag key={language} language={language} onClick={props.onClick}>{language}</Flag>)
      }
    </div>
  )
};

LanguageSwitcher.propTypes = {
  languages: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default LanguageSwitcher
