// app/javascript/pages/LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../redux/userAuthSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleLogin = async () => {
    // Dispatch authenticateUser action and handle the response
    const success = await dispatch(authenticateUser(name));

    if (success) {
      // Redirect to the main page upon successful authentication
      navigate('/');
    } else {
      // Handle authentication failure, show an error message, etc.
      console.error('Authentication failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
