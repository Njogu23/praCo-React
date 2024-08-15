import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Container, Button, Typography, Box } from '@mui/material';
import './AuthToggle.css'; // Import the CSS file

const AuthToggle = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <Container maxWidth="xs">
      <Box
        className={`auth-toggle-container ${isActive ? 'active' : 'inactive'}`}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
          p: 3,
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: 3,
          color: 'text.primary',
        }}
      >
        {isActive ? (
          <>
            <SignIn />
            <Typography variant="body1" sx={{ mt: 2 }}>
              Don't have an account?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsActive(false)}
              className="auth-toggle-button"
            >
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <SignUp />
            <Typography variant="body1" sx={{ mt: 2 }}>
              Already have an account?
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setIsActive(true)}
              className="auth-toggle-button"
            >
              Log In
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default AuthToggle;
