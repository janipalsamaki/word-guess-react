import React from 'react';
import './Category.css';

const Category = props => {
  return (
    <div className="Category">{props.category.category}</div>
  )
};

export default Category
