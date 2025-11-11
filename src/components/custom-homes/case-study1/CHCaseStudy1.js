import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './CHCaseStudy1.css';
import CHCaseStudy1Gallery from './CHCaseStudy1Gallery';

export default function Home() {
  return (
    <>
    <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="case-study1-title" >
      Case Study: Rustic Mountain Modern
    </Typography>
    <Box className="case-study1-content" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="case-study1-introduction">
            This custom home, built in 2021 is located on top of the prominent Ceasar's Head mountain and has been designed to maximize the stunning views while providing a luxuriously comfortable living space.
            <br/><br/>
            The home is situated on two lots purchased by the homeowner to maximize the privacy and enjoyment of the natural wooded surroundings.
            <br/><br/>
            Matthew J. Bunn, the owner of Wheelhouse Construction, mentioned one of the challenges they had to overcome building on top of the granite monolith were steep inclines and descents for all the construction materials and equipment that needed to be transported to the top of the BLANK ft. tall mountain. Another challenge was cutting through hard rock to install various utilities. A third challenge was the weather - the optimal building season is reduced because of it's elevation in relation to the surrounding terrain.
            <br/><br/>
            With his team of highly-experienced craftsman, Matthew J. Bunn created a custom home that fits the aesthetic of the surrounding environment and provides a relaxing environment for the owner and any Visitors.
        </Box>
        <Box className="case-study1-info">
            <Typography className='case-study1-font-bold'>PROJECT DETAILS</Typography><br/>  
            <Typography className='case-study1-font-bold'>Style</Typography>: Rustic Modern<br/>
            <Typography className='case-study1-font-bold'>Architect</Typography>: Justice Design Studio<br/>
        </Box>
    </Box>
    <CHCaseStudy1Gallery />
    <Box className="case-study1-sub-button">
      <Button
        className="case-study1-button"
        onClick={() => window.location.href = '/custom-homes/ch-case-study-2'}
      >
        NEXT CASE STUDY
      </Button>
    </Box>
    </>
  );
}