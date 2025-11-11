import React from 'react';
import './RVCaseStudy3Gallery.css';

const images = [
  // Top row
  { src: require('../../../assets/images/renovations/case3/1.jpg'), alt: 'Exterior 1', className: 'rv-case3-gallery-item rv-case3-item-large' },
  { src: require('../../../assets/images/renovations/case3/main.jpg'), alt: 'Living Room', className: 'rv-case3-gallery-item rv-case3-item-large' },
  // Middle row
  { src: require('../../../assets/images/renovations/case3/2.jpg'), alt: 'Kitchen', className: 'rv-case3-gallery-item rv-case3-item-small' },
  { src: require('../../../assets/images/renovations/case3/3.jpg'), alt: 'Bedroom', className: 'rv-case3-gallery-item rv-case3-item-small' },
  { src: require('../../../assets/images/renovations/case3/4.jpg'), alt: 'View from Living Room', className: 'rv-case3-gallery-item rv-case3-item-small' },
  { src: require('../../../assets/images/renovations/case3/5.jpg'), alt: 'View from Living Room', className: 'rv-case3-gallery-item rv-case3-item-small' },
];

export default function RVCaseStudy3Gallery() {
  return (
    <div className="rv-case3-gallery">
      {images.map((img, idx) => (
        <div className={img.className} key={idx}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
}