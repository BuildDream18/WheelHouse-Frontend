import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './CHCaseStudy5.css';
import CHCaseStudy5Gallery from './CHCaseStudy5Gallery';

export default function Home() {
  return (
    <>
    <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="case-study5-title" >
      Case Study: 200 Jocassee Point
    </Typography>
    <Box className="case-study5-content" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="case-study5-introduction">
        My father and I started building this home in 2007 for a previous owner. 
        <br/>
        The current owners had us renovate the home when they bought it in 2010. 
        <br/>
        Since then they have hired Wheelhouse for various needs on both their homes in Greenville and this vacation home, including  a major restoration after a wild animal flooded the master wing and game room. 
        <br/>
        Here there are plenty of spaces to spread out for much-needed rest from busy city life.
        </Box>
        <Box className="case-study5-info">
            <Typography className='case-study5-font-bold'>PROJECT DETAILS</Typography><br/>  
            <Typography className='case-study5-font-bold'>Style</Typography>: Luxury home on Lake Keowee, within the gates of the Cliffs Communities.<br/>
            <Typography className='case-study5-font-bold'>Total sq ft</Typography>: 4,000 sq. ft. heated<br/>
            <Typography className='case-study5-font-bold'>Architect</Typography>: Craftsman<br/>
        </Box>
    </Box>
    <CHCaseStudy5Gallery />
    <Box className="case-study5-sub-button">
      <Button
        className="case-study5-button"
        onClick={() => window.location.href = '/custom-homes/ch-case-study-4'}
      >
        PREVIOUS CASE STUDY
      </Button>
      <Button
        className="case-study5-button"
        onClick={() => window.location.href = '/custom-homes/ch-case-study-6'}
      >
        NEXT CASE STUDY
      </Button>
    </Box>
    </>
  );
}