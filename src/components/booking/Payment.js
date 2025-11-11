// src/components/booking/Payment.js
import React, { useState } from 'react';
import { Box, Typography, Button, MenuItem, Select } from '@mui/material';
import { sendEmail } from '../../utils/emailService';

const amounts = [4997, 9997, 14997];

export default function Payment() {
  const [amount, setAmount] = useState(amounts[0]);

  const handlePay = () => {
    // Simulate payment logic here

    // Send email to client and manager
    sendEmail('client@email.com', 'Payment Received', `Thank you for your payment of $${amount}.`);
    sendEmail('manager@email.com', 'Client Payment', `Client paid $${amount}.`);

    window.location.href = '/calendar';
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 4, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" sx={{ fontFamily: 'Oswald', mb: 2 }}>
        Payment
      </Typography>
      <Typography variant="h6" sx={{ fontFamily: 'Oswald', mb: 2 }}>
        Select Amount
      </Typography>
      <Select
        value={amount}
        onChange={e => setAmount(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      >
        {amounts.map(a => (
          <MenuItem key={a} value={a}>${a.toFixed(2)}</MenuItem>
        ))}
      </Select>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handlePay}
      >
        Pay ${amount.toFixed(2)}
      </Button>
    </Box>
  );
}