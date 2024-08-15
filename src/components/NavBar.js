import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth hook
import './NavBar.css';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const { logout } = useAuth(); // Access logout from AuthContext
  const navigate = useNavigate(); // Hook for navigation

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/signin'); // Navigate to sign-in page
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
            PraCo.
          </NavLink>
        </Typography>
        <div className="navbar-menu">
          <div className="nav-links">
            <Button
              component={NavLink}
              to="/"
              color="inherit"
              onClick={handleMenuClose}
              sx={{
                '&:hover': {
                  backgroundColor: '#f0f0f0', // Light background on hover
                  color: '#000', // Dark text color on hover
                },
                '&.active': {
                  backgroundColor: '#ddd', // Active state background
                }
              }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/workouts"
              color="inherit"
              onClick={handleMenuClose}
              sx={{
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  color: '#000',
                },
                '&.active': {
                  backgroundColor: '#ddd',
                }
              }}
            >
              Workouts
            </Button>
            <Button
              component={NavLink}
              to="/challenge"
              color="inherit"
              onClick={handleMenuClose}
              sx={{
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  color: '#000',
                },
                '&.active': {
                  backgroundColor: '#ddd',
                }
              }}
            >
              Challenge
            </Button>
            <Button
              component={NavLink}
              to="/myrecords"
              color="inherit"
              onClick={handleMenuClose}
              sx={{
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  color: '#000',
                },
                '&.active': {
                  backgroundColor: '#ddd',
                }
              }}
            >
              My Records
            </Button>
            <Button
              color="inherit"
              onClick={handleSignOut}
              sx={{
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  color: '#000',
                },
              }}
            >
              Sign Out
            </Button>
          </div>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              width: '100%',
              maxWidth: 360,
            },
          }}
        >
          <MenuItem
            component={NavLink}
            to="/"
            onClick={handleMenuClose}
            sx={{
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            Home
          </MenuItem>
          <MenuItem
            component={NavLink}
            to="/workouts"
            onClick={handleMenuClose}
            sx={{
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            Workouts
          </MenuItem>
          <MenuItem
            component={NavLink}
            to="/challenge"
            onClick={handleMenuClose}
            sx={{
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            Challenge
          </MenuItem>
          <MenuItem
            component={NavLink}
            to="/myrecords"
            onClick={handleMenuClose}
            sx={{
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            My Records
          </MenuItem>
          <MenuItem
            onClick={() => { handleMenuClose(); handleSignOut(); }}
            sx={{
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            Sign Out
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;