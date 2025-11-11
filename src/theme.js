import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#570f17' },
    secondary: { main: '#252b39' },
    background: { default: '#ffffff' },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: { fontFamily: 'Oswald, Arial, sans-serif' },
    h2: { fontFamily: 'Oswald, Arial, sans-serif' },
    h3: { fontFamily: 'Oswald, Arial, sans-serif' },
    logo: { fontFamily: 'Montserrat, Arial, sans-serif' },
  },
});

export default theme;