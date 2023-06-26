import React, { useState } from 'react';
import "./ForgotPassword.css"

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
    <div>
      <h1>Esqueceu-se da sua password</h1>
      {message && <p>{message}</p>}
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
        <button class="btsub" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ForgetPass;
