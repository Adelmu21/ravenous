// BusinessList.js

import React from 'react';
import Business from './Business'; // Make sure to provide the correct path to the Business component
import './BusinessList.css'; // Create this CSS file for styling if needed

const BusinessList = () => {
  const businesses = [
    // Array of business objects (similar to the hardcoded data example)
    // You can have multiple business objects in this array
    {
      id: 1,
      imageSrc: 'https://placekitten.com/200/200',
      name: 'Sample Restaurant 1',
      address: '123 Sample Street',
      city: 'Sample City',
      state: 'SS',
      zipcode: '12345',
      category: 'Sample Cuisine',
      rating: 4.5,
      reviewCount: 123,
    },
    // Add more business objects as needed
    {
        id: 2,
        imageSrc: 'https://placekitten.com/200/200',
        name: 'Sample Restaurant 2',
        address: '456 Sample Avenue',
        city: 'Sampleville',
        state: 'SV',
        zipcode: '54321',
        category: 'Delicious Food',
        rating: 4.2,
        reviewCount: 85,
      },
      {
        id: 3,
        imageSrc: 'https://placekitten.com/200/200',
        name: 'Cafe Delight',
        address: '789 Java Lane',
        city: 'Codeville',
        state: 'CV',
        zipcode: '98765',
        category: 'Coffee and More',
        rating: 4.8,
        reviewCount: 200,
      },
      {
        id: 4,
        imageSrc: 'https://placekitten.com/200/200',
        name: 'Tasty Tacos',
        address: '321 Taco Street',
        city: 'Flavor City',
        state: 'FC',
        zipcode: '24680',
        category: 'Mexican Cuisine',
        rating: 4.6,
        reviewCount: 150,
      },
  ];

  return (
    <div className="BusinessList">
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
