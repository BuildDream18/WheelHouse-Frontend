// src/components/custom-homes/CHCaseStudy5Gallery.js
import React from 'react';
import './CHCaseStudy5Gallery.css';

const images = [
  // Top row
  { src: require('../../../assets/images/custom-homes/case5/1.jpg'), alt: 'Exterior 1', className: 'case5-gallery-item case5-item-large' },
  { src: require('../../../assets/images/custom-homes/case5/main.jpg'), alt: 'Living Room', className: 'case5-gallery-item case5-item-large' },
  // Middle row
  { src: require('../../../assets/images/custom-homes/case5/2.jpg'), alt: 'Kitchen', className: 'case5-gallery-item case5-item-large' },
  { src: require('../../../assets/images/custom-homes/case5/3.jpg'), alt: 'Bedroom', className: 'case5-gallery-item case5-item-small' },
  { src: require('../../../assets/images/custom-homes/case5/4.jpg'), alt: 'View from Living Room', className: 'case5-gallery-item case5-item-small' },
  // Bottom row
  { src: require('../../../assets/images/custom-homes/case5/5.jpg'), alt: 'Exterior 2', className: 'case5-gallery-item case5-item-small' },
  { src: require('../../../assets/images/custom-homes/case5/6.jpg'), alt: 'Garage', className: 'case5-gallery-item case5-item-small' },
];

export default function CHCaseStudy5Gallery() {
  return (
    <div className="case5-gallery">
      {images.map((img, idx) => (
        <div className={img.className} key={idx}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
}