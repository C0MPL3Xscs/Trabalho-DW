import React, { useState, useEffect, useRef } from 'react';
import logo from '../logo.png';
import userLogo from '../UserLogo.png';
import './header.css';

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login do usuário

    useEffect(() => {
        const closeDropdown = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('click', closeDropdown);

        document.addEventListener('scroll', closeDropdown);

        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);


    useEffect(() => {
        // Lógica para verificar se o usuário está logado
        const checkLoginStatus = () => {
            const userLoggedIn = sessionStorage.getItem('isLoggedIn');
            setIsLoggedIn(userLoggedIn === 'true');
        };

        checkLoginStatus();
    }, []);

    const openSupport = () => {
        window.open('/support', '_self');
    };

    const openPublicEvents = () => {
        window.open('/Events', '_self');
    };

    const openLogIn = () => {
        window.open('/Login', '_self');
    };

    const openConfigs = () => {
        window.open('/Configurations', '_self');
    };

    const openProfilePage = () => {
        window.open('/ProfilePage', '_self');
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const logOUt = () => {
        sessionStorage.clear();
        window.open('/', '_self');
    }

    const createAccount = () => {
        sessionStorage.clear();
        window.open('/SignUp', '_self');
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
                <div className={`dropdown ${dropdownOpen ? 'open' : ''}`} ref={dropdownRef}>
                    <button className="dropdown-toggle" onClick={toggleDropdown}>
                        <img src={userLogo} alt="Right button" />
                    </button>
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            {!isLoggedIn && (
                                <button className="MenuButton" onClick={openLogIn}>
                                    Log In
                                </button>
                            )}
                            {!isLoggedIn && (
                                <button className="MenuButton" onClick={createAccount}>
                                    Create Account
                                </button>
                            )}
                            {isLoggedIn && (
                                <button className="MenuButton" onClick={openProfilePage}>
                                    Profile
                                </button>
                            )}
                            {isLoggedIn && (
                                <button className="MenuButton" onClick={openPublicEvents}>
                                    My Events
                                </button>
                            )}
                            {isLoggedIn && (
                                <button className="MenuButton" onClick={openConfigs}>
                                    Configurations
                                </button>
                            )}
                            {isLoggedIn && (
                                <button className="MenuButton" onClick={logOUt}>
                                    Log Out
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
