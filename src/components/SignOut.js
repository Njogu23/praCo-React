import React from "react";
import { Button, Box } from "@mui/material";
import { useAuth } from "../AuthContext";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignOut = () => {
  const { logout } = useAuth(); // Ensure `logout` is included in the context
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSignOut = async () => {
    try {
      await logout();
      toast.success("Signed out successfully!");
      navigate("/signin"); // Navigate to the sign-in page
    } catch (error) {
      console.error("Error signing out:", error.message);
      toast.error("Failed to sign out. Please try again.");
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSignOut}
        sx={{ mt: 2 }}
      >
        Sign Out
      </Button>
    </Box>
  );
};

export default SignOut;