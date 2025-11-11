// src/components/custom-homes/case-study2/CHCaseStudy2Gallery.js
import React from 'react';
import './CHCaseStudy2Gallery.css';

const images = [
  // Top row
  { src: require('../../../assets/images/custom-homes/case2/main.jpg'), alt: 'Exterior 1', className: 'case2-gallery-item case2-item-top' },
  { src: require('../../../assets/images/custom-homes/case2/1.jpg'), alt: 'Exterior 2', className: 'case2-gallery-item case2-item-top' },
  // Bottom row
  { src: require('../../../assets/images/custom-homes/case2/2.jpg'), alt: 'Front View', className: 'case2-gallery-item case2-item-bottom' },
  { src: require('../../../assets/images/custom-homes/case2/3.jpg'), alt: 'Front Center', className: 'case2-gallery-item case2-item-bottom' },
  { src: require('../../../assets/images/custom-homes/case2/4.jpg'), alt: 'Entry Detail', className: 'case2-gallery-item case2-item-bottom' },
];

export default function CHCaseStudy2Gallery() {
  return (
    <div className="case2-gallery">
      {images.map((img, idx) => (
        <div className={img.className} key={idx}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
}