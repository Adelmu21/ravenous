import React from 'react';
import './Business.css'; // Create this CSS file for styling if needed

const Business = () => {

    const business = {
        imageSrc: 'https://placekitten.com/200/200', // Example image URL
        name: 'Sample Restaurant',
        address: '123 Sample Street',
        city: 'Sample City',
        state: 'SS',
        zipcode: '12345',
        category: 'Sample Cuisine',
        rating: 4.5,
        reviewCount: 123,
      };

      
  return (
    <div className="Business">
      <div className="image-container">
        {/* Add the image */}
      </div>
      <h2>{/* Business name */}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{/* Address */}</p>
          <p>{/* City, State, Zipcode */}</p>
        </div>
        <div className="Business-reviews">
          <h3>{/* Category */}</h3>
          <h3 className="rating">{/* Rating */}</h3>
          <p>{/* Review count */}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
