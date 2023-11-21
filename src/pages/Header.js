import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';  // Import signOut from 'firebase/auth'
import { auth } from '../firebase';

function Header() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <div>
      <header className="header">
        <div className="header-content">
          <div className="logo">
          
            <h1>   NOVO CATALYST</h1>
          </div>
          <nav className="nav">
            <ul>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <li>Home</li>
              </Link>
              <Link to='/createpost' style={{ textDecoration: 'none' }}>
                <li>Create post</li>
              </Link>
              <Link to='/login' style={{ textDecoration: 'none' }}>
                <li>Login</li>
              </Link>
              <li onClick={signUserOut} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                Logout
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
