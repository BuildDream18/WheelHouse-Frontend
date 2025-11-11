import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './Home.css';

export default function Home() {
  return (
    <>
    <Box sx={{ mx: 'auto', mt: { xs: 3, md: 6 }, p: { xs: 2, md: 4 }, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }} className="container-home" >
      <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '24px', md: '72px' } }} className="home-title" >
        Custom Home Building & Renovations 
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '18px', md: '40px' } }} className="home-title-small" >
        Greenville, SC
      </Typography>
    </Box>
    <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="home-introduction" >
      A professional Design - 
      <br />
      build team dedicated to first class project delivery.
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', p: { xs: 1, md: 0 } }}>
      <Button
        className="global-button"
        onClick={() => window.location.href = '/booking'}
      >
        Book a Meeting
      </Button>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 2, md: 3 } }}>
      <div className="global-line"></div>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, mx: { xs: 2, md: 20 } }}>
      <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }} className="home-introduction-quote">
      “Matt built our family not just another house, but a home. We are so happy with the final product and would highly recommend Wheelhouse Construction to anyone looking to build a home. Thank you Matt!”
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', mx: { xs: 2, md: 20 } }}>
      <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }} className="home-introduction-quote-author">
        — Stacey Sellers
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 6 }, height: { xs: '50vh', md: '100vh' } }} className="home-introduction-image">
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 6 }, mb: { xs: 3, md: 6 } }}>
      <Button
        className="global-button"
        onClick={() => window.location.href = '/about'}
      >
        Continue⟶
      </Button>
    </Box>
    </>
  );
}