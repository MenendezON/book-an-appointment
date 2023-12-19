import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/user/userSlice';

import '../assets/css/login.css'; 

function Login() {
  const navigate = useNavigate();
  const loginResponse = useSelector((state) => state.user.user.token);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (loginResponse) {
      navigate('/');
    }
  }, [dispatch, loginResponse, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(loginUser({
      username: userName,
      password,
    }));
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form-cont">
          <h2 className="logintext text-gray-800 font-bold text-2xl">Log in</h2>
          <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <input
              required
              type="text"
              value={userName}
              onChange={(e) => handleUsernameChange(e)}
              placeholder="Username"
            />
            <input
              required
              type="password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
              placeholder="Password"
            />
            <div className="btns">
              <button type="submit">Login</button>
              <Link to="/signup">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
