import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './CHCaseStudy6.css';

export default function Home() {
  return (
    <>
    <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="case-study6-title" >
      Case Study: Teakwood
    </Typography>
    <Box className="case-study6-content" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="case-study6-introduction">
        Set on nearly 1.5 acres surrounded by lush woodlands, the home features a travertine terrace with a built-in BBQ, a custom in-ground spool, formal gardens, an orchard, and a peaceful woodland path—perfect for quiet walks and outdoor entertaining. Inside, 10- to 20-foot ceilings and premium finishes create a sense of calm sophistication. The kitchen is a chef’s dream, with high-end appliances, quartzite counters, a butler’s pantry, and pass-through access to the outdoor kitchen. A custom wine room, spa suite, and a fully equipped accessory dwelling unit offer both luxury and flexibility.
        <br/><br/>
        Smart home upgrades, solar power, energy-efficient systems, and beautiful material selections complete this one-of-a-kind home. Designed for comfort, privacy, and timeless style, it’s a true showcase of Wheelhouse Construction’s signature quality.
        </Box>
        <Box className="case-study6-info">
            <Typography className='case-study6-font-bold'>PROJECT DETAILS</Typography><br/>  
            <Typography className='case-study6-font-bold'>Total area</Typography>: 1.5 acres<br/>
            <Typography className='case-study6-font-bold'>Style</Typography>: Mid-century modern<br/>
        </Box>
    </Box>
    <Box className="case-study6-sub-button">
      <Button
        className="case-study6-button"
        onClick={() => window.location.href = '/custom-homes/ch-case-study-5'}
      >
        PREVIOUS CASE STUDY
      </Button>
    </Box>
    </>
  );
}