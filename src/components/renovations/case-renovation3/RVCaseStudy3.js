import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './RVCaseStudy3.css';
import RVCaseStudy3Gallery from './RVCaseStudy3Gallery';

export default function Home() {
  return (
    <>
    <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="rv-case-study3-title" >
    Case Study: 15 Lakecrest Drive
    </Typography>
    <Box className="rv-case-study3-content" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="rv-case-study3-introduction">
        “Matt and his excellent subs did a great job in building my carport! Under extreme wet conditions they were able to complete it within budget and on time. Matt did a great job of keeping me update throughout the project and made it easier. I especially liked the way he handled the permitting with the city and inspectors. I would highly recommend Wheelhouse Construction for all new and remodeling projects!” —Frank Poe
        </Box>
        <Box className="rv-case-study3-info">
            <Typography className='rv-case-study3-font-bold'>PROJECT DETAILS</Typography><br/>  
            <Typography className='rv-case-study3-font-bold'>Style</Typography>: Carport addition to existing home in downtown Greenville.<br/>  
            <Typography className='rv-case-study3-font-bold'>Size</Typography>: 28 ft x 22 ft<br/>  
            <Typography className='rv-case-study3-font-bold'>Architect</Typography>: Justice Design Studio
        </Box>
    </Box>
    <RVCaseStudy3Gallery />
    <Box className="rv-case-study3-sub-button">
      <Button
        className="rv-case-study3-button"
        onClick={() => window.location.href = '/renovations/rv-case-study-2'}
      >
        PREVIOUS CASE STUDY
      </Button>
    </Box>
    </>
  );
}