import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="nav-container">
      <nav className="nav-bar">
        <Link to="/home">Home</Link>
        <Link to="/exercises">Exercises</Link>
        <Link to="/calendar">Calendar</Link>
        {/* <Link to="/submit">My Calendar</Link> */}
        {/* <Link to="/submit">Add Exercise</Link> */}
        {isLoggedIn ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/logout" onClick={() => {
              fetch('/logout', { method: 'DELETE' })
                .then(() => setIsLoggedIn(false))
                .catch(error => console.error('Error logging out:', error));
            }}>Log Out</Link>
          </>
        ) : (
          <Link to="/signin">Log In/Sign Up</Link>
        )}
      </nav>
    </div>
  );
}

export default NavBar;