import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './MultiFamily.css';
import MultiFamilyGallery from './MultiFamilyGallery';

export default function Home() {
  return (
    <>
    <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="multi-family-title" >
    Case Study: Birnie St. Townhomes
    </Typography>
    <Box className="multi-family-content" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="multi-family-introduction">
        Birnie Street Townhomes redefine contemporary living in downtown Greenville, SC, blending sleek modern design with unbeatable views of Unity Park, the Auro Bridge, and the Blue Ridge Mountains. These thoughtfully crafted, three-story twin townhomes feature clean architectural lines, expansive windows, and a rooftop terrace that offers a breathtaking perspective of the city and nature beyond.
        <br /><br />
        Designed for both style and functionality, the main-level bedroom with a full bath provides a versatile space for a home office, workout room, or additional living area. The second floor serves as the heart of the home, with an open-concept kitchen and great room that flow seamlessly onto a private balcony. Premium modern finishes, including quartz countertops, soft-close cabinetry, a walk-in pantry, and a gas range with an exterior-vented hood, elevate the space with both elegance and practicality.
        <br /><br />
        On the third floor, two spacious bedrooms each feature ensuite baths and walk-in closets, offering a private and luxurious retreat. A 1.5-car garage and private backyard add to the home’s convenience, making it an exceptional choice for those seeking modern urban living.
        <br /><br />
        Expertly built by Wheelhouse Construction, these townhomes embody contemporary craftsmanship, quality, and innovation. They stand as a striking example of modern architecture in one of Greenville’s most vibrant and desirable locations.
        </Box>
        <Box className="multi-family-info">
            <Typography className='multi-family-font-bold'>PROJECT DETAILS</Typography><br/>  
            <Typography className='multi-family-font-bold'>Total area</Typography>: 5,750 sq ft<br/>  
            <Typography className='multi-family-font-bold'>Heated</Typography>: 3,428 sq ft<br/>  
            <Typography className='multi-family-font-bold'>Style</Typography>: Urban Modern<br/>  
            <Typography className='multi-family-font-bold'>Architect</Typography>: Justice Design Studio
        </Box>
    </Box>
    <MultiFamilyGallery />
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 6 }, mb: { xs: 3, md: 6 } }}>
        <Button
            className="global-button"
            onClick={() => window.location.href = '/our-process'}
        >
            Continue⟶
        </Button>
    </Box>
    </>
  );
}