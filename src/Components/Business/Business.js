// Business.js

import React from 'react';
import { Card } from 'react-bootstrap';
import './Business.css'; // Create this CSS file for any additional styling if needed

const Business = ({ business }) => {
  return (
    <Card className="Business">
      <Card.Img variant="top" src={business.imageSrc} alt={business.name} />
      <Card.Body>
        <Card.Title>{business.name}</Card.Title>
        <Card.Text>
          {business.address}
          <br />
          {business.city}, {business.state} {business.zipcode}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          {business.category} | Rating: {business.rating} | Reviews: {business.reviewCount}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default Business;

