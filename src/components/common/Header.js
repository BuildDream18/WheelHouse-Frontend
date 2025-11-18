// src/components/common/Header.js
import React from 'react';
import { AppBar, Toolbar, Box, Link, Button, IconButton, Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import logo from '../../assets/images/logo.png';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [openSubmenus, setOpenSubmenus] = React.useState({});

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuClick = (href) => {
    navigate(href);
    setDrawerOpen(false);
  };

  const handleSubmenuToggle = (index) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    {
      text: 'Custom Homes',
      href: '/custom-homes',
      submenu: [
        { text: 'Overview', href: '/custom-homes' },
        { text: 'Case Study 1', href: '/custom-homes/ch-case-study-1' },
        { text: 'Case Study 2', href: '/custom-homes/ch-case-study-2' },
        { text: 'Case Study 3', href: '/custom-homes/ch-case-study-3' },
        { text: 'Case Study 4', href: '/custom-homes/ch-case-study-4' },
        { text: 'Case Study 5', href: '/custom-homes/ch-case-study-5' },
        { text: 'Case Study 6', href: '/custom-homes/ch-case-study-6' },
      ]
    },
    { text: 'Renovations', 
      href: '/renovations',
      submenu: [
        { text: 'Overview', href: '/renovations' },
        { text: 'Case Study 1', href: '/renovations/rv-case-study-1' },
        { text: 'Case Study 2', href: '/renovations/rv-case-study-2' },
        { text: 'Case Study 3', href: '/renovations/rv-case-study-3' },
      ] },
    { text: 'Multi-Family', href: '/multi-family' },
    { text: 'Our Process', href: '/our-process' },
    { text: 'References', href: '/references' },
    { text: 'Sign In', href: '/signin' },
    { text: '🛒', href: '/cart' }
  ];

  return (
    <AppBar 
      position="fixed"
      sx={{ 
        bgcolor: '#f9f9f9',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        mt: { xs: '0px !important', md: 0 }
      }} 
      className="header"
    >
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: { xs: 2, md: '5%' }, py: { xs: 1, md: 2 } }}>
        <Box 
          component="img" 
          src={logo} 
          alt="Wheelhouse Construction" 
          className="logo"
          onClick={() => navigate('/')}
          sx={{ cursor: 'pointer' }}
        />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        {menuItems.map((item, index) => {
          // Hide Sign In button
          if (item.text === 'Sign In') return null;
          return (
          <div className="menu-item-wrapper" key={index}>
            <Link href={item.href} color="inherit" sx={{ mx: 1 }} className="menu-link">
              {item.text}
            </Link>
            {item.submenu && (
              <div className="submenu">
                {item.submenu.map((sub, subIdx) => (
                  <Link href={sub.href} key={subIdx} className="submenu-link">
                    {sub.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
          );
        })}
        <Button variant="contained" 
          color="primary" sx={{ mx: 1, bgcolor: '#570f17' }} 
          onClick={() => window.location.href = '/booking'}>
          Book a Meeting
        </Button>
      </Box>
      <IconButton
        edge="end"
        aria-label="menu"
        sx={{ 
          display: { xs: 'flex', md: 'none' },
          color: '#586179',
          '&:hover': {
            color: '#252b39',
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
          }
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon sx={{ fontSize: 28 }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ zIndex: 1200 }}
      >
        <Box sx={{ width: 280, pt: 2 }}>
          <List>
            {menuItems.map((item, index) => {
              // Hide Sign In button from mobile menu
              if (item.text === 'Sign In') return null;
              return (
              <React.Fragment key={index}>
                {item.submenu ? (
                  <>
                    <ListItem 
                      button 
                      onClick={() => handleSubmenuToggle(index)}
                      sx={{ py: 1.5 }}
                    >
                      <ListItemText 
                        primary={item.text} 
                        primaryTypographyProps={{ 
                          sx: { fontWeight: 500, fontSize: '1rem' } 
                        }}
                      />
                      {openSubmenus[index] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openSubmenus[index]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.submenu.map((sub, subIdx) => (
                          <ListItem 
                            button 
                            key={subIdx}
                            onClick={() => handleMenuClick(sub.href)}
                            sx={{ pl: 4, py: 1 }}
                          >
                            <ListItemText 
                              primary={sub.text}
                              primaryTypographyProps={{ 
                                sx: { fontSize: '0.9rem' } 
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItem 
                    button 
                    onClick={() => handleMenuClick(item.href)}
                    sx={{ py: 1.5 }}
                  >
                    <ListItemText 
                      primary={item.text}
                      primaryTypographyProps={{ 
                        sx: { fontWeight: 500, fontSize: '1rem' } 
                      }}
                    />
                  </ListItem>
                )}
              </React.Fragment>
              );
            })}
            <ListItem sx={{ py: 2, px: 2 }}>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ 
                  bgcolor: '#570f17', 
                  width: '100%',
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#911515'
                  }
                }}
                onClick={() => handleMenuClick('/booking')}
              >
                Book a Meeting
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      </Toolbar>
    </AppBar>
  );
}