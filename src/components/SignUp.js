import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const SignUp = () => {
  const { email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, firstName, setFirstName, lastName, setLastName, handleAction } = useAuth();
  const [passwordError, setPasswordError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }

    setPasswordError(''); // Clear error if passwords match
    handleAction(2); // Call handleAction with id 2 for signing up
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
          p: 2,
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: 3,
          backgroundColor: "white"
        }}
      >
        <Typography variant="h5">Sign Up</Typography>
        <form onSubmit={handleSignUp} style={{ width: '100%' }}>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            error={!!passwordError} // Show error state if there's a mismatch
            helperText={passwordError} // Display error message
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;