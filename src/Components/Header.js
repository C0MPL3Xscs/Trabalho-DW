import React, { useState, useEffect, useRef } from 'react';
import logo from '../logo.png';
import userLogo from '../UserLogo.png';
import './header.css';

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const closeDropdown = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('click', closeDropdown);

        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    const openSupport = () => {
        window.open('/support', '_self');
    };

    const openPublicEvents = () => {
        window.open('/PublicEvents', '_self');
    };


    const openLogIn = () => {
        window.open('/Login', '_self');
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

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
                <div className={`dropdown ${dropdownOpen ? 'open' : ''}`} ref={dropdownRef}>
                    <button className="dropdown-toggle" onClick={toggleDropdown}>
                        <img src={userLogo} alt="Right button" />
                    </button>
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <button className="MenuButton" onClick={openLogIn}>
                                Log In
                            </button>
                            <button className="MenuButton" onClick={openLogIn}>
                                My Events
                            </button>
                            <button className="MenuButton" onClick={openLogIn}>
                                Configurations
                            </button>
                            <button className="MenuButton" onClick={openLogIn}>
                                Log Out
                            </button>
                            {/* Add other dropdown menu items as needed */}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
