import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './RVCaseStudy1.css';
import RVCaseStudy1Gallery from './RVCaseStudy1Gallery';

export default function Home() {
  return (
    <>
    <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="rv-case-study1-title" >
    Case Study: 9 Pimlico Road
    </Typography>
    <Box className="rv-case-study1-content" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="rv-case-study1-introduction">
        This project was truly transformational. Located in the highly sought-after neighborhood of Gower Estates inside the Greenville city limits, this home was in desperate need of updating. The preliminary meetings with David and Anna involved a thorough assessment of the existing conditions and a brainstorming session to capture their vision. Detailed planning and budgeting were done before any construction work was performed to reduce unknown factors and mitigate cost variables. Once everyone was on the same page and comfortable with proceeding, the real fun began with removing the roof and ceiling on half of the house. Necessary structural reinforcements were made to the foundation and framing so that a second story could be built above for a master bedroom suite. Much of this home was renovated as well including interior and exterior surfaces, heating and cooling systems, electrical, and plumbing improvements. New, wide-plank hardwood flooring, ceramic tile and granite countertops were installed on the inside along with cement board siding, architectural shingles and new windows on the exterior.
        </Box>
        <Box className="rv-case-study1-info">
            <Typography className='rv-case-study1-font-bold'>PROJECT DETAILS</Typography><br/>  
            <Typography className='rv-case-study1-font-bold'>Style</Typography>: Renovation & addition to a dated home in an established community.<br/>
            <Typography className='rv-case-study1-font-bold'>Total sq ft</Typography>: 2,700 sq. ft. heated
        </Box>
    </Box>
    <RVCaseStudy1Gallery />
    <Box className="rv-case-study1-sub-button">
      <Button
        className="rv-case-study1-button"
        onClick={() => window.location.href = '/renovations/rv-case-study-2'}
      >
        NEXT CASE STUDY
      </Button>
    </Box>
    </>
  );
}