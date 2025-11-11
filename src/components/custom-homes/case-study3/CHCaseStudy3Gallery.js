// src/components/custom-homes/case-study3/CHCaseStudy3Gallery.js
import React from 'react';
import './CHCaseStudy3Gallery.css';

const images = [
  // Top row
  { src: require('../../../assets/images/custom-homes/case3/main.jpg'), alt: 'Exterior 1', className: 'case3-gallery-item case3-item-top' },
  { src: require('../../../assets/images/custom-homes/case3/1.jpg'), alt: 'Exterior 2', className: 'case3-gallery-item case3-item-top' },
  // Bottom row
  { src: require('../../../assets/images/custom-homes/case3/2.jpg'), alt: 'Front View', className: 'case3-gallery-item case3-item-bottom' },
  { src: require('../../../assets/images/custom-homes/case3/3.jpg'), alt: 'Front Center', className: 'case3-gallery-item case3-item-bottom' },
  { src: require('../../../assets/images/custom-homes/case3/4.jpg'), alt: 'Entry Detail', className: 'case3-gallery-item case3-item-bottom' },
];

export default function CHCaseStudy3Gallery() {
  return (
    <div className="case3-gallery">
      {images.map((img, idx) => (
        <div className={img.className} key={idx}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
}