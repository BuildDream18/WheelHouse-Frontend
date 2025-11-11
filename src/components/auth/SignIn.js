// src/components/auth/SignIn.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await fetch('https://127.0.0.1:8000/signin/', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      if (response.ok) {
        window.location.href = '/welcome'; // Redirect to Welcome page after sign in
      } else {
        setSnackbarMessage('Sign in failed. Please try again.');
        setSnackbarOpen(true);
      }
    } catch (error) {
      setSnackbarMessage('Sign in failed. Please try again.');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 4, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" sx={{ fontFamily: 'Oswald', mb: 2 }}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          margin="normal"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          margin="normal"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
        <Button
          color="secondary"
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => window.location.href = '/signup'}
        >
          Don't have an account? Sign Up
        </Button>
      </form>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}