import React from 'react';
import PropTypes from 'prop-types';
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
  languages: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default LanguageSwitcher
