// src/components/common/Header.js
import React from 'react';
import { Box, Link, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/logo.png';
import './Header.css';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
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
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, bgcolor: '#f9f9f9' }} className="header">
      <img src={logo} alt="Wheelhouse Construction" className="logo" />
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        {menuItems.map((item, index) => (
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
        ))}
        <Button variant="contained" 
          color="primary" sx={{ mx: 1, bgcolor: '#570f17' }} 
          onClick={() => window.location.href = '/booking'}>
          Book a Meeting
        </Button>
      </Box>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: 'flex', md: 'none' } }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <ListItem button onClick={toggleDrawer(false)}>
            <Button variant="contained" 
              color="primary" sx={{ bgcolor: '#570f17', width: '100%' }}
              onClick={() => window.location.href = '/booking'}>
              Book a Meeting
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}