// src/components/custom-homes/case-study4/CHCaseStudy4Gallery.js
import React from 'react';
import './CHCaseStudy4Gallery.css';

const images = [
  // Top row
  { src: require('../../../assets/images/custom-homes/case4/main.jpg'), alt: 'Exterior 1', className: 'case4-gallery-item case4-item-top' },
  { src: require('../../../assets/images/custom-homes/case4/1.jpg'), alt: 'Exterior 2', className: 'case4-gallery-item case4-item-top' },
  // Bottom row
  { src: require('../../../assets/images/custom-homes/case4/2.jpg'), alt: 'Front View', className: 'case4-gallery-item case4-item-bottom' },
  { src: require('../../../assets/images/custom-homes/case4/3.jpg'), alt: 'Front Center', className: 'case4-gallery-item case4-item-bottom' },
  { src: require('../../../assets/images/custom-homes/case4/4.jpg'), alt: 'Entry Detail', className: 'case4-gallery-item case4-item-bottom' },
];

export default function CHCaseStudy4Gallery() {
  return (
    <div className="case4-gallery">
      {images.map((img, idx) => (
        <div className={img.className} key={idx}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
}