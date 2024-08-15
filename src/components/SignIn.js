import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useAuth } from '../AuthContext';

const SignIn = () => {
  const { email, password, setEmail, setPassword, handleAction } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleAction(1); 
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
        <Typography variant="h5">Sign In</Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignIn;