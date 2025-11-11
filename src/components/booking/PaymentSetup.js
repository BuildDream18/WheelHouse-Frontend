// src/components/booking/PaymentSetup.js
import React, { useState } from 'react';
import { Box, Typography, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

const paymentMethods = [
  { value: 'card', label: 'Card' },
  { value: 'bank', label: 'Bank Account' },
  { value: 'wallet', label: 'Digital Wallet (OnRamp)' },
  { value: 'wire', label: 'Bank Wire' },
];

export default function PaymentSetup() {
  const [method, setMethod] = useState('card');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Save payment method to backend
    window.location.href = '/payment';
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 4, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" sx={{ fontFamily: 'Oswald', mb: 2 }}>
        Set Up Your Payment Method
      </Typography>
      <form onSubmit={handleSubmit}>
        <RadioGroup
          value={method}
          onChange={e => setMethod(e.target.value)}
        >
          {paymentMethods.map(pm => (
            <FormControlLabel
              key={pm.value}
              value={pm.value}
              control={<Radio />}
              label={pm.label}
            />
          ))}
        </RadioGroup>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Continue
        </Button>
      </form>
    </Box>
  );
}