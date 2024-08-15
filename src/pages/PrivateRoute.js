import React from 'react';
import { useAuth } from '../AuthContext'; // Import useAuth
import { CircularProgress, Box } from "@mui/material";
import AuthToggle from '../components/AuthToggle';

const PrivateRoute = ({ component: Component  }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return user ? <Component /> : <AuthToggle />;
};

export default PrivateRoute;