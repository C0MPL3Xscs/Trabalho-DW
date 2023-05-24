import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);

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
      const response = await fetch(`https://localhost:7192/api/users/createUser?name=${email}&email=${email}&password=${password}`);
      const data = await response.json();
      console.log(data);


      if (data === true) {
        setAccountCreated(true);
        setTimeout(() => {

          window.location.href = '/';
        }, 2000);
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
