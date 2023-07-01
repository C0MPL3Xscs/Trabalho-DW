import React, { useState, useEffect } from 'react';
import './SignInUp.css';

function SignUp() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      // If user is logged in, redirect to the profile page
      window.location.href = '/Profile';
    }
  }, []);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(`https://localhost:7192/api/users/createUser?name=${encodeURIComponent(userName)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
      const data = await response.json();
      console.log(data);

      if (response.ok && data.success) { // Check for successful response and success property in the data
        setAccountCreated(true);
        setTimeout(() => {
          window.location.href = '/Login';
        }, 2000);
      } else {
        // Handle the case when the response is not successful or data.success is false
        console.error(data); // Log the response data for debugging
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className='background'>
      <div className='container'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='userName'>Username</label>
            <input
              type='text'
              id='userName'
              placeholder='Enter your username'
              value={userName}
              onChange={handleUserNameChange}
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
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              placeholder='Confirm your password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <button className='button' type='submit'>Sign Up</button>
        </form>

        {accountCreated && (
          <div className='popup'>
            <p>Account created successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;
