import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './CustomHomes.css';

export default function Home() {
  return (
    <>
    <Box sx={{ mx: 'auto', mt: { xs: 3, md: 6 }, p: { xs: 2, md: 4 }, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }} className="container" >
      <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '24px', md: '72px' } }} className="home-title" >
        Custom Homes
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '18px', md: '40px' } }} className="home-title-small" >
        &nbsp;
      </Typography>
    </Box>
    <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="home-introduction" >
      Case studies
    </Typography>
    <Box className="case-stuides" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="case-studies-sub">
            <Box className="case-studies-sub1-image" onClick={() => window.location.href = '/custom-homes/ch-case-study-1'}></Box>
            <Box className="case-studies-sub-title-container">
                <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '30px' } }} className="case-studies-sub-title">
                    Case Study: Rustic Mountain Modern
                </Typography>
            </Box>
            <Box className="case-studies-sub-text">
                <Typography variant="body1" sx={{ fontSize: { xs: '15px', md: '17px' } }}>
                    Wheelhouse Construction and Owner Matthew J. Bunn are proud to introduce - "Granite", a beautiful custom mountain home located northern Greenville County, South Carolina.
                </Typography>
            </Box>
            <Box className="case-studies-sub-button">
                <Button
                    className="learn-more-button"
                    onClick={() => window.location.href = '/custom-homes/ch-case-study-1'}
                >
                    Learn More
                </Button>
            </Box>
        </Box>
        <Box className="case-studies-sub">
            <Box className="case-studies-sub2-image" onClick={() => window.location.href = '/custom-homes/ch-case-study-2'}></Box>
            <Box className="case-studies-sub-title-container">
                <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '30px' } }} className="case-studies-sub-title">
                    Case Study: 713 Island Pine Drive
                </Typography>
            </Box>
            <Box className="case-studies-sub-text">
                <Typography variant="body1" sx={{ fontSize: { xs: '15px', md: '17px' } }}>
                713 Island Pine Drive is a stunning representation of French Country and Old World architecture, where elegance meets enduring craftsmanship.
                </Typography>
            </Box>
            <Box className="case-studies-sub-button">
                <Button
                    className="learn-more-button"
                    onClick={() => window.location.href = '/custom-homes/ch-case-study-2'}
                >
                    Learn More
                </Button>
            </Box>
        </Box>
        <Box className="case-studies-sub">
            <Box className="case-studies-sub3-image" onClick={() => window.location.href = '/custom-homes/ch-case-study-3'}></Box>
            <Box className="case-studies-sub-title-container">
                <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '30px' } }} className="case-studies-sub-title">
                    Case Study: Murphy Lane
                </Typography>
            </Box>
            <Box className="case-studies-sub-text">
                <Typography variant="body1" sx={{ fontSize: { xs: '15px', md: '17px' } }}>
                Murphy Lane is a beautifully crafted home designed to accommodate a growing family's needs.
                </Typography>
            </Box>
            <Box className="case-studies-sub-button">
                <Button
                    className="learn-more-button"
                    onClick={() => window.location.href = '/custom-homes/ch-case-study-3'}
                >
                    Learn More
                </Button>
            </Box>
        </Box>
    </Box>
    <Box className="case-stuides" sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Box className="case-studies-sub">
            <Box className="case-studies-sub4-image" onClick={() => window.location.href = '/custom-homes/ch-case-study-4'}></Box>
            <Box className="case-studies-sub-title-container">
                <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '30px' } }} className="case-studies-sub-title">
                    Case Study: 1235 Stillwater Drive
                </Typography>
            </Box>
            <Box className="case-studies-sub-text">
                <Typography variant="body1" sx={{ fontSize: { xs: '15px', md: '17px' } }}>
                "Wonderful work ethic. Excellent attention to detail. Would definitely use them again. "
                <br />
                —Jim Kenworthy
                </Typography>
            </Box>
            <Box className="case-studies-sub-button">
                <Button
                    className="learn-more-button"
                    onClick={() => window.location.href = '/custom-homes/ch-case-study-4'}
                >
                    Learn More
                </Button>
            </Box>
        </Box>
        <Box className="case-studies-sub">
            <Box className="case-studies-sub5-image" onClick={() => window.location.href = '/custom-homes/ch-case-study-5'}></Box>
            <Box className="case-studies-sub-title-container">
                <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '30px' } }} className="case-studies-sub-title">
                    Case Study: 200 Jocassee Point
                </Typography>
            </Box>
            <Box className="case-studies-sub-text1">
                <Typography variant="body1" sx={{ fontSize: { xs: '15px', md: '17px' } }}>
                "Matt is timely; informative, and does outstanding work. Mosf of all, you can trust Matt to do what he says, when he says it will be done, with no supervision or oversight. We trust Matt with free access to our house of all times, which is very valuable for owners of a vacation home. Matt is a ‘straight shooter ', and I highly recommend his services. "
                <br />
                —Steve Bondura
                </Typography>
            </Box>
            <Box className="case-studies-sub-button">
                <Button
                    className="learn-more-button"
                    onClick={() => window.location.href = '/custom-homes/ch-case-study-5'}
                >
                    Learn More
                </Button>
            </Box>
        </Box>
        <Box className="case-studies-sub">
            <Box className="case-studies-sub6-image" onClick={() => window.location.href = '/custom-homes/ch-case-study-6'}></Box>
            <Box className="case-studies-sub-title-container">
                <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '30px' } }} className="case-studies-sub-title">
                    Case Study: Teakwood
                </Typography>
            </Box>
            <Box className="case-studies-sub-text">
                <Typography variant="body1" sx={{ fontSize: { xs: '15px', md: '17px' } }}>
                    Located just minutes from downtown Greenville, this stunning property in the Indian Forest subdivision offers privacy, elegance, and thoughtful design at every turn. Custom-built by the award-winning Wheelhouse Construction, the home stands outwith its modern lines, exceptional craftsmanship, and seamless indoor-outdoor living.
                </Typography>
            </Box>
            <Box className="case-studies-sub-button">
                <Button
                    className="learn-more-button"
                    onClick={() => window.location.href = '/custom-homes/ch-case-study-6'}
                >
                    Learn More
                </Button>
            </Box>
        </Box>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 6 }, mb: { xs: 3, md: 6 } }}>
      <Button
        className="global-button"
        onClick={() => window.location.href = '/renovations'}
      >
        Continue⟶
      </Button>
    </Box>
    </>
  );
}