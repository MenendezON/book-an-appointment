import React, { useState } from 'react';
import axios from 'axios';
import {
  Link,
} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/users', {
        email: email,
        password: password,
      });

      // Handle successful login, e.g., store the token in localStorage
      console.log('Login successful', response.data.token);
    } catch (error) {
      // Handle login error, e.g., display an error message
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <Link to='/signup'>Signup</Link>
    </div>
  );
};

export default Login;
