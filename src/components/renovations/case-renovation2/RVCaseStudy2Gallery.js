import React from 'react';
import './RVCaseStudy2Gallery.css';

const images = [
  // Top row
  { src: require('../../../assets/images/renovations/case2/1.jpg'), alt: 'Exterior 1', className: 'rv-case2-gallery-item rv-case2-item-large' },
  { src: require('../../../assets/images/renovations/case2/main.jpg'), alt: 'Living Room', className: 'rv-case2-gallery-item rv-case2-item-medium' },
  // Middle row
  { src: require('../../../assets/images/renovations/case2/2.jpg'), alt: 'Kitchen', className: 'rv-case2-gallery-item rv-case2-item-small' },
  { src: require('../../../assets/images/renovations/case2/3.jpg'), alt: 'Bedroom', className: 'rv-case2-gallery-item rv-case2-item-small' },
  { src: require('../../../assets/images/renovations/case2/4.jpg'), alt: 'View from Living Room', className: 'rv-case2-gallery-item rv-case2-item-small' },
  // Bottom row
  { src: require('../../../assets/images/renovations/case2/5.jpg'), alt: 'Exterior 2', className: 'rv-case2-gallery-item rv-case2-item-small' },
  { src: require('../../../assets/images/renovations/case2/6.jpg'), alt: 'Garage', className: 'rv-case2-gallery-item rv-case2-item-small' },
  { src: require('../../../assets/images/renovations/case2/7.jpg'), alt: 'Garage', className: 'rv-case2-gallery-item rv-case2-item-small' },
];

export default function RVCaseStudy2Gallery() {
  return (
    <div className="rv-case2-gallery">
      {images.map((img, idx) => (
        <div className={img.className} key={idx}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
}