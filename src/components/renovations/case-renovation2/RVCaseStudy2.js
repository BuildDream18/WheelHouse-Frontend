import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './RVCaseStudy2.css';
import RVCaseStudy2Gallery from './RVCaseStudy2Gallery';

export default function Home() {
  return (
    <>
    <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="rv-case-study2-title" >
    Case Study: 102 Briar Creek Road
    </Typography>
    <Box className="rv-case-study2-content" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="rv-case-study2-introduction">
        We started working with Lynn and Kim from a concept they had that would allow them to care for Lynn’s mother while enabling them to remain in their home in their later years as well. The idea was to build an updated master suite and sitting room off the back of the house that would be an area dedicated to Lynn’s mother and later used by Lynn and Kim. Financially, this proved to be better than paying for long-term care and logistically made more sense than selling their home in Sugar Creek. Upon a full evaluation of the home, major water infiltration and electrical hazards were discovered and resolved to protect the home and the safety of the family. Ultimately decisions were made to expand and renovate the kitchen, renovate other bathrooms, and add a covered porch with a winding brick staircase to the new addition.
        </Box>
        <Box className="rv-case-study2-info">
            <Typography className='rv-case-study2-font-bold'>PROJECT DETAILS</Typography><br/>  
            <Typography className='rv-case-study2-font-bold'>Size</Typography>: 900 sq. ft. heated addition, full home interior renovation
        </Box>
    </Box>
    <RVCaseStudy2Gallery />
    <Box className="rv-case-study2-sub-button">
      <Button
        className="rv-case-study2-button"
        onClick={() => window.location.href = '/renovations/rv-case-study-1'}
      >
        PREVIOUS CASE STUDY
      </Button>
      <Button
        className="rv-case-study2-button"
        onClick={() => window.location.href = '/renovations/rv-case-study-3'}
      >
        NEXT CASE STUDY
      </Button>
    </Box>
    </>
  );
}