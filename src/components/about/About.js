import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './About.css';

export default function Home() {
  return (
    <>
    <Box sx={{ mx: 'auto', mt: { xs: 3, md: 6 }, p: { xs: 2, md: 4 }, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }} className="container-about" >
      <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '24px', md: '72px' } }} className="home-title" >
        About Wheelhouse
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '18px', md: '40px' } }} className="home-title-small" >
        &nbsp;
      </Typography>
    </Box>
    <Box className="about-text" sx={{ flex: 1, color: '#fff', fontSize: { xs: '16px', md: '22px' }, bgcolor: '#6b2027', p: { xs: 2, md: 4 }, borderRadius: 0 }}>
      <Box className="about-text-content" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="body1" sx={{ fontSize: { xs: '18px', md: '22px' }, color: '#fff', mb: 2 }}>
          <span className="about-dropcap">W</span>heelhouse Construction is a custom home building team specializing in new homes and renovations in Greenville, SC and surrounding areas. Our unique process allows us to get to know our customers and their needs before the building process begins. Our core values are Honesty, Transparency, Accountability, and Respect.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '20px' }, color: '#fff' }}>
          If you have an interest in starting a project, we can help you begin the process by providing planning advice for budgeting, building plans and specifications, site layout and material selections. During the construction or renovation, we manage all aspects of the process including permitting, labor coordination, material sourcing, code compliance and financial management. Regular site visits are performed to ensure that quality workmanship and attention to detail are maintained. We communicate with our clients regularly to keep you informed and prepared for each step along the way.
        </Typography>
      </Box>
      <Box className="about-images" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="about-image-left"></Box>
        <Box className="about-image-right"></Box>
      </Box>
    </Box>
    <Box className="about-image-matt-container">
      <Box className="about-image-matt"></Box>
      <Box className="about-matt-text">
        <Typography variant="body1" sx={{ fontSize: { xs: '18px', md: '22px' }, color: '#fff', mb: 2 }}>
          <span className="about-matt-name">About Matthew Bunn</span>
          <br />
          <span className="about-matt-text-content">
            A third-generation builder, Matt Bunn grew up working alongside his father, gaining valuable experience
            early in his career. At age 15, he worked together with his parents and younger brother to build their new
            home from start to finish. At that time, they were still driving every nail by hand.
            <br />
            <br />
            While obtaining a degree in Construction Science and Management at Clemson University, Matt
partnered with his parents and brother in a family business venture building and renovating homes around
Lake Keowee. Also, during that time Matt earned his Residential Builder's License and founded
Safehouse, LLC, a real-estate investment company purchasing and renovating foreclosed properties for
rent and sale.
<br />
<br />
After marrying Jacqueline Tebalt in 2008, he started Wheelhouse Construction, now operating out of
Greenville, SC. Matt and J aqie have three children, Jackson, Henry and Natalie. On his days off, Matt
enjoys spending time outside with his family working on various projects around their home.</span>
        </Typography>
      </Box>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 6 }, mb: { xs: 3, md: 6 } }}>
      <Button
        className="global-button"
        onClick={() => window.location.href = '/custom-homes'}
      >
        Continue⟶
      </Button>
    </Box>
    </>
  );
}