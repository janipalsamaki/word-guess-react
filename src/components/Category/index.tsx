import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './Category.css'

interface Props {
  category: any
}

const Category: React.FunctionComponent<Props> = ({ category }) => {
  const ariaLabel: string = `Category: ${category.category}.`
  const ariaDescribedBy: string = 'category-description'

  return (
    <Fragment>
      <div
        className="Category"
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
      >
        {category.category}
      </div>
      <p id={ariaDescribedBy} className="sr-only">
        This is the category of the word to guess. Use keyboard to guess
        letters.
      </p>
    </Fragment>
  )
}

Category.propTypes = {
  category: PropTypes.object.isRequired
}

export default Category
