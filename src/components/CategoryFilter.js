import React from 'react';
import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ handleChange }) => (
  <div>
    <select name="category" onChange={(event) => handleChange(event)}>
      <option value="All">All</option>
      { categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      )) }
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
