import React from 'react';
import './RVCaseStudy1Gallery.css';

const images = [
  // Top row
  { src: require('../../../assets/images/renovations/case1/1.jpg'), alt: 'Exterior 1', className: 'rv-case1-gallery-item rv-case1-item-large' },
  { src: require('../../../assets/images/renovations/case1/main.jpg'), alt: 'Living Room', className: 'rv-case1-gallery-item rv-case1-item-medium' },
  // Middle row
  { src: require('../../../assets/images/renovations/case1/2.jpg'), alt: 'Kitchen', className: 'rv-case1-gallery-item rv-case1-item-small' },
  { src: require('../../../assets/images/renovations/case1/3.jpg'), alt: 'Bedroom', className: 'rv-case1-gallery-item rv-case1-item-small' },
  { src: require('../../../assets/images/renovations/case1/4.jpg'), alt: 'View from Living Room', className: 'rv-case1-gallery-item rv-case1-item-small' },
  // Bottom row
  { src: require('../../../assets/images/renovations/case1/5.jpg'), alt: 'Exterior 2', className: 'rv-case1-gallery-item rv-case1-item-small' },
  { src: require('../../../assets/images/renovations/case1/6.jpg'), alt: 'Garage', className: 'rv-case1-gallery-item rv-case1-item-small' },
  { src: require('../../../assets/images/renovations/case1/7.jpg'), alt: 'Garage', className: 'rv-case1-gallery-item rv-case1-item-small' },
];

export default function RVCaseStudy1Gallery() {
  return (
    <div className="rv-case1-gallery">
      {images.map((img, idx) => (
        <div className={img.className} key={idx}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
}