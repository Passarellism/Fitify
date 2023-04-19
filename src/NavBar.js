import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function NavBar({isLoggedIn, setIsLoggedIn}) {


  return (
    <Tabs  aria-label="nav tabs example">
      <Tab label="Home" href="/home" />
      <Tab label="Exercises" href="/exercises" />
      <Tab label="Calendar" href="/calendar" />
      {isLoggedIn ? (
          <>
            <Tab label="Profile" href="/profile" />
            <Tab label="Log Out" to="/logout" onClick={() => {
              fetch('/logout', { method: 'DELETE' })
                .then(() => setIsLoggedIn(false))
                .catch(error => console.error('Error logging out:', error));
            }} />
          </>
        ) : (
          <Tab label="Log In/Sign Up" href="/signin" />
        )}
    </Tabs>
  )
}