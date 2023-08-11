// SearchBar.js

import React from 'react';
import './SearchBar.css'; // Create this CSS file for styling if needed

const sortingOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

const SearchBar = () => {
  const renderSortingOptions = () => {
    return Object.keys(sortingOptions).map((option) => (
      <li key={sortingOptions[option]}>{option}</li>
    ));
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortingOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <button>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;
