import React, { useState } from 'react';
import './SignInUp.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send login request
        try {
            const response = await fetch(`https://localhost:7192/api/users/CheckLogIn?email=${email}&password=${password}`);
            const data = await response.json();
            console.log(data);

            if (data === true) {
                window.location.href = '/';
            } else {
                setErrorMessage('Invalid email or password.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='background'>
            <div className='container'>
                <h1>Login</h1>
                {errorMessage && <p className='error-message'>{errorMessage}</p>}
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
                    <button className='button' type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;