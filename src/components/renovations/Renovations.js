import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './Renovations.css';

export default function Home() {
  return (
    <>
    <Box sx={{ mx: 'auto', mt: { xs: 3, md: 6 }, p: { xs: 2, md: 4 }, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }} className="renovation-container" >
      <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '24px', md: '72px' } }} className="renovation-home-title" >
        Renovations
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '18px', md: '40px' } }} className="renovation-home-title-small" >
        &nbsp;
      </Typography>
    </Box>
    <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="home-introduction" >
      Case studies
    </Typography>
    <Box className="renovation-case-studies" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="renovation-case-studies-sub">
            <Box className="renovation-case-studies-sub1-image" onClick={() => window.location.href = '/renovations/rv-case-study-1'}></Box>
            <Box className="case-studies-sub-title-container">
                <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '30px' } }} className="renovation-case-studies-sub-title">
                    Case Study: 9 Pimlico Road
                </Typography>
            </Box>
            <Box className="renovation-case-studies-sub-text">
                <Typography variant="body1" sx={{ fontSize: { xs: '15px', md: '17px' } }}>
                Renovation & addition to a dated home in an established community.
                </Typography>
            </Box>
            <Box className="renovation-case-studies-sub-button">
                <Button
                    className="renovation-learn-more-button"
                    onClick={() => window.location.href = '/renovations/rv-case-study-1'}
                >
                    Learn More
                </Button>
            </Box>
        </Box>
        <Box className="renovation-case-studies-sub">
            <Box className="renovation-case-studies-sub2-image" onClick={() => window.location.href = '/renovations/rv-case-study-2'}></Box>
            <Box className="case-studies-sub-title-container">
                <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '30px' } }} className="renovation-case-studies-sub-title">
                    Case Study: 102 Briar Creek Road
                </Typography>
            </Box>
            <Box className="renovation-case-studies-sub-text">
                <Typography variant="body1" sx={{ fontSize: { xs: '15px', md: '17px' } }}>
                Major addition and renovation to a dated home in an established neighborhood.
                </Typography>
            </Box>
            <Box className="renovation-case-studies-sub-button">
                <Button
                    className="renovation-learn-more-button"
                    onClick={() => window.location.href = '/renovations/rv-case-study-2'}
                >
                    Learn More
                </Button>
            </Box>
        </Box>
        <Box className="renovation-case-studies-sub">
            <Box className="renovation-case-studies-sub3-image" onClick={() => window.location.href = '/renovations/rv-case-study-3'}></Box>
            <Box className="case-studies-sub-title-container">
                <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '30px' } }} className="renovation-case-studies-sub-title">
                Case Study: 15 Lakecrest Drive
                </Typography>
            </Box>
            <Box className="renovation-case-studies-sub-text">
                <Typography variant="body1" sx={{ fontSize: { xs: '15px', md: '17px' } }}>
                Carport addition to existing home in downtown Greenville, SC
                </Typography>
            </Box>
            <Box className="renovation-case-studies-sub-button">
                <Button
                    className="renovation-learn-more-button"
                    onClick={() => window.location.href = '/renovations/rv-case-study-3'}
                >
                    Learn More
                </Button>
            </Box>
        </Box>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 6 }, mb: { xs: 3, md: 6 } }}>
      <Button
        className="global-button"
        onClick={() => window.location.href = '/multi-family'}
      >
        Continue⟶
      </Button>
    </Box>
    </>
  );
}