import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  useEffect(() => {
    fetch('/authorized')
      .then(res => {
        if (res.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(error => console.error('Error checking auth status:', error));
  }, []);

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
    // <div className="nav-container">
    //   <nav className="nav-bar">
    //   <Tabs  aria-label="nav tabs example"> 
    //     <Link to="/home">Home</Link>
    //   </Tabs> 
    //   <Tabs  aria-label="nav tabs example"> 
    //     <Link to="/exercises">Exercises</Link>
    //   </Tabs>
    //     <Link to="/calendar">Calendar</Link>
    //     {/* <Link to="/submit">My Calendar</Link> */}
    //     {/* <Link to="/submit">Add Exercise</Link> */}



    //     {isLoggedIn ? (
    //       <>
    //         <Link to="/profile">Profile</Link>
    //         <Link to="/logout" onClick={() => {
    //           fetch('/logout', { method: 'DELETE' })
    //             .then(() => setIsLoggedIn(false))
    //             .catch(error => console.error('Error logging out:', error));
    //         }}>Log Out</Link>
    //       </>
    //     ) : (
    //       <Link to="/signin">Log In/Sign Up</Link>
    //     )}

    //   </nav>
    // </div>
  );
}

export default NavBar;