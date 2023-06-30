import React, { useState } from 'react';
import './SignInUp.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confpassword, setConfPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfPasswordChange = (e) => {
        setConfPassword(e.target.value);
    }; 

    const openLoginRegister = () => {
        if (password === confpassword) {
            handleRegister();
            navigate('/Login');
          } else {
            setErrorMessage('Passwords do not match');
            return;
          }
    };

    const openLogin = () => {
        navigate('/Login');
    };




    const handleRegister = async (e) => {
        e.preventDefault();

        // Send login request
        try {
            const response = await fetch('https://localhost:7192/api/users/createUser', {
              body: JSON.stringify({
                name: username,
                email: email,
                password: password,
              }),
            });
            if (response.ok) {
                // User registration successful
                console.log('User registered successfully');
              } else {
                // Handle registration error
                const errorMessage = await response.text();
                setErrorMessage(errorMessage);
              }
        } catch (error) {
            console.error('An error occurred during registration:', error);
          }
        };

    return (
        <div className='background'>
            <div className='container'>
                <h1>Register</h1>
                {errorMessage && <p className='error-message'>{errorMessage}</p>}
                <form onSubmit={handleRegister}>
                <div className='form-group'>
                        <label htmlFor='Username'>Username</label>
                        <input
                            type='username'
                            id='username'
                            placeholder='Choose a username'
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='confirmpassword'>Confirm Password</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Confirm your password'
                            value={confpassword}
                            onChange={handleConfPasswordChange}
                            required
                        />
                    </div>
                    <div>
                        <button onClick={openLoginRegister} >Register</button>
                        <br></br>
                    </div>
                    <div>
                        <br></br>
                        <button onClick={openLogin}>Already have an account? Click here</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
