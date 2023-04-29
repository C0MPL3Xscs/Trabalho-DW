import React from 'react';
import logo from '../logo.png';
import userLogo from '../UserLogo.png';
import '../index.css';

function Header() {
  const openSupport = () => {
    window.open("/support","_self");
  }

  const openPublicEvents = () => {
    window.open("/PublicEvents","_self");
  }
  

  return (
    <header>
      <div className="left-buttons">
        <a href="/">
          <img src={logo} alt="Home" />
        </a>
        <button onClick={openPublicEvents}>Public Events</button>
        <button onClick={openSupport}>Support</button>

      </div>
      <div className="right-buttons">
        <button><img src={userLogo} alt="Right button" /></button>
      </div>  
    </header>
  );
}

export default Header;

