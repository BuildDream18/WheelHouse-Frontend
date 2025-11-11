import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './CHCaseStudy4.css';
import CHCaseStudy4Gallery from './CHCaseStudy4Gallery';

export default function Home() {
  return (
    <>
    <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="case4-title" >
      Case Study: 1235 Stillwater Drive
    </Typography>
    <Box className="case4-study-content" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="case4-study-introduction">
        Nestled along the Stillwater community’s nature trail, this home combines characteristics from old and new together in a peaceful setting. 
        <br/>
        Time-tested materials such as stone, copper and mahogany provide a rich and durable exterior. 
        <br/>
        The interior has modern appliances, Silestone countertops, and energy efficient windows that are low maintenance solutions for everyday living. 
        <br/>
        This home radiates a warm and inviting atmosphere both inside and out.
        </Box>
        <Box className="case4-study-info">
            <Typography className='case4-font-bold'>PROJECT DETAILS</Typography><br/>  
            <Typography className='case4-font-bold'>Style</Typography>: French Country / Old World themed home built to sell <br/>  
            <Typography className='case4-font-bold'>Size</Typography>: 3150 sq. ft. heated
          </Box>
    </Box>
    <CHCaseStudy4Gallery />
    <Box className="case-study4-sub-button">
      <Button
        className="case-study4-button"
        onClick={() => window.location.href = '/custom-homes/ch-case-study-3'}
      >
        PREVIOUS CASE STUDY
      </Button>
      <Button
        className="case-study4-button"
        onClick={() => window.location.href = '/custom-homes/ch-case-study-5'}
      >
        NEXT CASE STUDY
      </Button>
    </Box>
    </>
  );
}