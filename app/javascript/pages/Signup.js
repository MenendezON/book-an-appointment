import React, { useState } from 'react';
import axios from 'axios';
import {
  Link,
} from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/v1/login', {
        email: email,
        password: password,
      });

      // Handle successful signup, e.g., display a success message
      console.log('Signup successful', response.data);
    } catch (error) {
      // Handle signup error, e.g., display an error message
      console.error('Signup failed', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>Email:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
      <Link to='/login'>Signup</Link>
    </div>
  );
};

export default Signup;
