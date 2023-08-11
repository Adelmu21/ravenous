// BusinessList.js

import React from 'react';
import Business from '../Business/Business'; // Make sure to provide the correct path to the Business component
//import './BusinessList.css'; // Create this CSS file for any additional styling
import { Row } from 'react-bootstrap';

const BusinessList = () => {
  const businesses = [
    // Array of business objects (similar to the hardcoded data example)
    // You can have multiple business objects in this array
    {
      id: 1,
      imageSrc: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/70bc81c8-b277-407d-8c3a-5c1a3e501732-4-hamburger.jpg',
      name: 'Hamburgers',
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
        imageSrc: 'https://cdnfiles.hdrcreme.com/68657/medium/2aa.jpg?1535283404',
        name: 'Pizzeria',
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
        imageSrc: 'https://www.timeoutabudhabi.com/public/images/2020/06/24/Cafe-302.jpg',
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
        imageSrc: 'https://149434078.v2.pressablecdn.com/wp-content/uploads/2021/02/Washington-DC-Restaurants-DC-Tacos-Mezcalero-Cocina-Mexicana-002-credit-Keryn-Means-800x600.jpg',
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
    <Row className="BusinessList">
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </Row>
  );
};

export default BusinessList;
