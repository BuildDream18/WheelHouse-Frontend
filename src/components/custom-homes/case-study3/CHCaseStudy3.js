import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './CHCaseStudy3.css';
import CHCaseStudy3Gallery from './CHCaseStudy3Gallery';

export default function Home() {
  return (
    <>
    <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="case3-title" >
      Case Study: Murphy Lane
    </Typography>
    <Box className="case3-study-content" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="case3-study-introduction">
        Originally a classic floor plan, the owner—an engineer—made significant modifications to ensure ample space for four children, homeschooling, and a dedicated work-from-home office.
        <br/><br/>
        Wheelhouse Construction cleared and milled the land, carefully utilizing a significant portion of the milled beams for the porches. Inside, architectural-grade glulam beams were installed, allowing for an exposed, vaulted ceiling that enhances the home's warmth and character.
        <br/><br/>
        A true collaboration between Amity and Wheelhouse Construction, Murphy Lane reflects expert craftsmanship and thoughtful design, creating a functional yet inviting family living space.
        </Box>
        <Box className="case3-study-info">
            <Typography className='case3-font-bold'>PROJECT DETAILS</Typography><br/>  
            <Typography className='case3-font-bold'>Style</Typography>: Modern Farm <br/>  
            <Typography className='case3-font-bold'>Architect</Typography>: Owner / Engineer 
          </Box>
    </Box>
    <CHCaseStudy3Gallery />
    <Box className="case-study3-sub-button">
      <Button
        className="case-study3-button"
        onClick={() => window.location.href = '/custom-homes/ch-case-study-2'}
      >
        PREVIOUS CASE STUDY
      </Button>
      <Button
        className="case-study3-button"
        onClick={() => window.location.href = '/custom-homes/ch-case-study-3'}
      >
        NEXT CASE STUDY
      </Button>
    </Box>
    </>
  );
}