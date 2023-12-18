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
  console.log(`Login response: ${loginResponse}`)
  useEffect(() => {
    if (loginResponse) {
      navigate('/'); // uses history object from react-router-dom
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
         <h2 className=" logintext text-gray-800 font-bold text-2xl">Log in</h2>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <input
              required
              id="outlined-basics"
              type="text"
              value={userName}
              onChange={(e) => handleUsernameChange(e)}
              label="Username"
              variant="outlined"
            />
            <input
              required
              id="outlined-basic"
              type="password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
              label="Password"
              variant="outlined"
            />
            <div className="btns">
              <button type="submit" variant="outlined">Login</button>
              <Link to="/signup">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;