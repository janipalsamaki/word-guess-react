import React from 'react';
import PropTypes from 'prop-types';
import './Category.css';

const Category = props => {
  return (
    <div className="Category">{props.category.category}</div>
  )
};

Category.propTypes = {
  category: PropTypes.object.isRequired
};

export default Category
