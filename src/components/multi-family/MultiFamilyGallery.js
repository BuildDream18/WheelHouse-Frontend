import React from 'react';
import './MultiFamilyGallery.css';

const images = [
  { src: require('../../assets/images/multi-family/1.jpg'), alt: 'Exterior 1', className: 'multi-family-gallery-item multi-family-item-large' },
  { src: require('../../assets/images/multi-family/2.jpg'), alt: 'Exterior 2', className: 'multi-family-gallery-item multi-family-item-large' },
  { src: require('../../assets/images/multi-family/3.jpg'), alt: 'Interior 1', className: 'multi-family-gallery-item multi-family-item-small' },
  { src: require('../../assets/images/multi-family/4.jpg'), alt: 'Interior 2', className: 'multi-family-gallery-item multi-family-item-small' },
  { src: require('../../assets/images/multi-family/5.jpg'), alt: 'Interior 3', className: 'multi-family-gallery-item multi-family-item-small' },
  { src: require('../../assets/images/multi-family/6.jpg'), alt: 'Interior 4', className: 'multi-family-gallery-item multi-family-item-small' },
  { src: require('../../assets/images/multi-family/7.jpg'), alt: 'Interior 5', className: 'multi-family-gallery-item multi-family-item-large' },
  { src: require('../../assets/images/multi-family/8.jpg'), alt: 'Exterior 3', className: 'multi-family-gallery-item multi-family-item-large' },
  { src: require('../../assets/images/multi-family/9.jpg'), alt: 'Exterior 4', className: 'multi-family-gallery-item multi-family-item-small' },
  { src: require('../../assets/images/multi-family/10.jpg'), alt: 'Interior 6', className: 'multi-family-gallery-item multi-family-item-small' },
  { src: require('../../assets/images/multi-family/11.jpg'), alt: 'Interior 7', className: 'multi-family-gallery-item multi-family-item-small' },
  { src: require('../../assets/images/multi-family/12.jpg'), alt: 'Interior 8', className: 'multi-family-gallery-item multi-family-item-small' },
  { src: require('../../assets/images/multi-family/13.jpg'), alt: 'Interior 9', className: 'multi-family-gallery-item multi-family-item-large' },
  { src: require('../../assets/images/multi-family/14.jpg'), alt: 'Interior 10', className: 'multi-family-gallery-item multi-family-item-large' },
  { src: require('../../assets/images/multi-family/15.jpg'), alt: 'Interior 11', className: 'multi-family-gallery-item multi-family-item-small' },
  { src: require('../../assets/images/multi-family/16.jpg'), alt: 'Interior 12', className: 'multi-family-gallery-item multi-family-item-small' },
  { src: require('../../assets/images/multi-family/17.jpg'), alt: 'Interior 13', className: 'multi-family-gallery-item multi-family-item-small' },
  { src: require('../../assets/images/multi-family/18.jpg'), alt: 'Interior 14', className: 'multi-family-gallery-item multi-family-item-small' },
];

export default function MultiFamilyGallery() {
  return (
    <div className="multi-family-gallery">
      {images.map((img, idx) => (
        <div className={img.className} key={idx}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
}