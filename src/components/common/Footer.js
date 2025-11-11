// src/components/common/Footer.js
import React from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }} className="footer">
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 3, mb: 3 }}>
        <Link href="https://www.facebook.com/WheelhouseConstructionSC" target="_blank" sx={{ mx: 1, mb: 1 }}>
          <FontAwesomeIcon icon={faFacebookF} className="font-style" style={{ fontSize: '24px' }}/>
        </Link>
        <Link href="https://www.linkedin.com/company/wheelhouseconstruction/?viewAsMember=true" target="_blank" sx={{ mx: 1, mb: 1 }}>
          <FontAwesomeIcon icon={faLinkedinIn} className="font-style" style={{ fontSize: '24px' }}/>
        </Link>
        <Link href="https://www.instagram.com/wheelhousesc/" target="_blank" sx={{ mx: 1, mb: 1 }}>
          <FontAwesomeIcon icon={faInstagram} className="font-style" style={{ fontSize: '24px' }}/>
        </Link>
        <Link href="https://x.com/WheelhousescLLC" target="_blank" sx={{ mx: 1, mb: 1 }}>
          <FontAwesomeIcon icon={faXTwitter} className="font-style" style={{ fontSize: '24px' }}/>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 3 }}>
        <Button className="footer-button" onClick={() => window.location.href = '/booking'}>Book a Meeting</Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 3, mb: 3 }}>
        <Link href="#" color="inherit" sx={{ mx: 1, mb: 1 }}>Home</Link>
        <Link href="#" color="inherit" sx={{ mx: 1, mb: 1 }}>About</Link>
        <Link href="#" color="inherit" sx={{ mx: 1, mb: 1 }}>Custom Homes</Link>
        <Link href="#" color="inherit" sx={{ mx: 1, mb: 1 }}>Renovations</Link>
        <Link href="#" color="inherit" sx={{ mx: 1, mb: 1 }}>Multi-Family</Link>
        <Link href="#" color="inherit" sx={{ mx: 1, mb: 1 }}>Our Process</Link>
        <Link href="#" color="inherit" sx={{ mx: 1, mb: 1 }}>References</Link>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
        <Typography variant="body2" sx={{ mb: 1, mt: 6 }} className="footer-box">
          <Link href="https://youtu.be/RZqj5FrbyJY" target="_blank" color="inherit" sx={{ textDecoration: 'underline' }}>Greenville, South Carolina</Link>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1, mt: 3 }} className="footer-box">
          info@<Link href="mailto:info@wheelhousesc.com" color="inherit">wheelhousesc.com</Link> 864-214-4204
        </Typography>
        <Typography variant="body2" sx={{ mb: 1, mt: 4 }} className="footer-box-small">
          © 2025 Wheelhouse Construction. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}