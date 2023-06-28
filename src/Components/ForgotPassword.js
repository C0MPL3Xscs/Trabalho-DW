import React, { useState } from 'react';
import "./SignInUp.css"

function ForgetPass() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://localhost:7192/api/users/CheckLogIn?email=${email}`);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setMessage('Um email de redefinição de senha foi enviado para o seu endereço de email.');
        setEmail('');
      } else {
        setMessage('Ocorreu um erro ao enviar o email de redefinição de senha.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Ocorreu um erro ao enviar o email de redefinição de senha.');
    }
  };

  return (
    <div class="background">
        <div class="container">
            <h1>Forgot your password?</h1>
            <h3>Insert your email here and we will send you a verification</h3>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                        <input
                            type='email'
                            id='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                <button class="btsub" type="submit">Send</button>
            </form>
        </div>
    </div>
  );
}

export default ForgetPass;
