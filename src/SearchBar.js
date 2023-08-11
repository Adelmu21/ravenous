// SearchBar.js

import React from 'react';
import './SearchBar.css'; // Create this CSS file for any additional styling
import { Form, Button, InputGroup } from 'react-bootstrap';

const sortingOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

const SearchBar = () => {
  const renderSortingOptions = () => {
    return Object.keys(sortingOptions).map((option) => (
      <option key={sortingOptions[option]} value={sortingOptions[option]}>
        {option}
      </option>
    ));
  };

  return (
    <div className="SearchBar">
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Search Businesses" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Where?" />
        </Form.Group>
        <Form.Group>
          <Form.Control as="select">{renderSortingOptions()}</Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Let's Go
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
