import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export default function NavBar({ isLoggedIn, setIsLoggedIn }) {
  const blackText = { color: 'black' };
  const history = useHistory();

  return (
    <Tabs aria-label="nav tabs example">
      <Tab label="Home" component={Link} to="/home" sx={blackText} />
      <Tab label="Exercises" component={Link} to="/exercises" sx={blackText} />
      <Tab label="Calendar" component={Link} to="/calendar" sx={blackText} />
      {/* <Tab label="Trainers" component={Link} to="/trainers" sx={blackText} />
      <Tab label="Following" component={Link} to="/following" sx={blackText} />
      <Tab label="Discover" component={Link} to="/discover" sx={blackText} /> */}
      {/* <Tab icon={<SearchIcon />} component={Link} to="/search" sx={blackText} /> */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '20px' }}>

        {isLoggedIn ? (
          <>
            <Tab label="Profile" component={Link} to="/profile" sx={blackText} />
            <Tab
              label="Log Out"
              to="/logout"
              onClick={() => {
                fetch('/logout', { method: 'DELETE' })
                  .then(() => setIsLoggedIn(false))
                  .catch(error => console.error('Error logging out:', error));
                  history.push('/signin')
              }}
              sx={blackText}
            />
          </>
        ) : (
          <Button sx={{ paddingRight: '10px' }} variant="contained" component={Link} to="/signin">
            Sign In
          </Button>
        )}
      </Box>
    </Tabs>
  );
}
