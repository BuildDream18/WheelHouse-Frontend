// src/components/custom-homes/CHCaseStudy1Gallery.js
import React from 'react';
import './CHCaseStudy1Gallery.css';

const images = [
  // Top row
  { src: require('../../../assets/images/custom-homes/case1/1.jpg'), alt: 'Exterior 1', className: 'case1-gallery-item case1-item-large' },
  { src: require('../../../assets/images/custom-homes/case1/main.jpg'), alt: 'Living Room', className: 'case1-gallery-item case1-item-medium' },
  // Middle row
  { src: require('../../../assets/images/custom-homes/case1/2.jpg'), alt: 'Kitchen', className: 'case1-gallery-item case1-item-small' },
  { src: require('../../../assets/images/custom-homes/case1/3.jpg'), alt: 'Bedroom', className: 'case1-gallery-item case1-item-small' },
  { src: require('../../../assets/images/custom-homes/case1/4.jpg'), alt: 'View from Living Room', className: 'case1-gallery-item case1-item-medium' },
  // Bottom row
  { src: require('../../../assets/images/custom-homes/case1/5.jpg'), alt: 'Exterior 2', className: 'case1-gallery-item case1-item-large' },
  { src: require('../../../assets/images/custom-homes/case1/6.jpg'), alt: 'Garage', className: 'case1-gallery-item case1-item-medium' },
];

export default function CHCaseStudy1Gallery() {
  return (
    <div className="case1-gallery">
      {images.map((img, idx) => (
        <div className={img.className} key={idx}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
}