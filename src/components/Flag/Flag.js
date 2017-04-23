import React from 'react';
import PropTypes from 'prop-types';
import '../../../node_modules/flag-icon-css/css/flag-icon.min.css';
import './Flag.css';

const Flag = props => {
  const flagClasses = `flag-icon flag-icon-${props.language}`;
  return (
    <div className="Flag" onClick={() => props.onClick(props.language)}>
      <span className={flagClasses}>&nbsp;</span>
    </div>
  )
};

Flag.propTypes = {
  language: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Flag
