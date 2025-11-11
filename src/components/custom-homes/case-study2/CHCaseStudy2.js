import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './CHCaseStudy2.css';
import CHCaseStudy2Gallery from './CHCaseStudy2Gallery';

export default function Home() {
  return (
    <>
    <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="case2-title" >
      Case Study: 713 Island Pine Drive
    </Typography>
    <Box className="case2-study-content" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="case2-study-introduction">
        The exterior exudes timeless beauty, featuring a carefully curated blend of tumbled brick, stone, and stucco, enhanced by full-radius arches that add to its classic European charm.
        <br/><br/>
        Inside, the Old World-inspired design offers a warm yet refined ambiance. Rich, deep tones paired with natural materials create a sophisticated yet welcoming space. Intricate detailing, textured finishes, and rustic elements give the home a lived-in character that feels both luxurious and inviting.
        <br/><br/>
        While this architectural style comes with a higher price tag due to its high-quality materials and detailed craftsmanship, the result is a home that stands apart—full of charm, elegance, and lasting beauty. 
        <br/><br/>
        With Wheelhouse Construction’s expertise, every element was executed with precision, ensuring that the architectural vision was not only met but elevated. The result is a masterpiece that seamlessly blends history, artistry, and modern comfort, standing as a testament to timeless design.
        </Box>
        <Box className="case2-study-info">
            <Typography className='case2-font-bold'>PROJECT DETAILS</Typography><br/>  
            <Typography className='case2-font-bold'>Style</Typography>: French Country/ Old World Style
          </Box>
    </Box>
    <CHCaseStudy2Gallery />
    <Box className="case-study2-sub-button">
      <Button
        className="case-study2-button"
        onClick={() => window.location.href = '/custom-homes/ch-case-study-1'}
      >
        PREVIOUS CASE STUDY
      </Button>
      <Button
        className="case-study2-button"
        onClick={() => window.location.href = '/custom-homes/ch-case-study-3'}
      >
        NEXT CASE STUDY
      </Button>
    </Box>
    </>
  );
}