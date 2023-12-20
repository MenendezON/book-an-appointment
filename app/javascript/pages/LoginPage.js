import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/user/userSlice';

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
      <div className=" login">
        <div className="login-form-cont">
          <h2 className=" logintext">Log in</h2>
          <p>&nbsp;</p>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <input
              required
              id="outlined-basics"
              type="text"
              value={userName}
              onChange={(e) => handleUsernameChange(e)}
              label="Username"
              placeholder="Username"
            />
            <input
              required
              id="outlined-basic"
              type="password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
              label="Password"
              placeholder="Password"
            />
            <button type="submit" className="btn-lg active">Login</button>
          </form>
          <p>
            Don&apos;t have an account?
            <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
