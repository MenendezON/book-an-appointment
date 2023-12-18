import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../redux/user/userSlice';
function SignUp() {
  const navigate = useNavigate();
  const [dataReg, setDataReg] = useState({
    user: {
      username: '',
      password: '',
    },
  });
  const dispatch = useDispatch();
  const createUserResponse = useSelector((state) => state.user.createUserMsg.token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createUser(dataReg));
  };
  useEffect(() => {
    if (createUserResponse) {
      navigate('/');
    }
  }, [dispatch, createUserResponse, navigate]);

  const handleUsernameChange = (e) => {
    setDataReg({ ...dataReg, user: { ...dataReg.user, username: e.target.value } });
  };
  const handlePasswordChange = (e) => {
    setDataReg({ ...dataReg, user: { ...dataReg.user, password: e.target.value } });
  };

  return (
    <>
      <div className="login" >
        <div className="login-form-cont">
          <h2 className="logintext text-gray-800 font-bold text-2xl">Sign up</h2>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <input
              required
              id="outlined-basic"
              type="text"
              onChange={(e) => handleUsernameChange(e)}
              label="Username"
              variant="outlined"
            />
            <input
              required
              id="outlined-basics"
              type="password"
              onChange={(e) => handlePasswordChange(e)}
              label="Password"
              variant="outlined"
            />
            <div className="btns">
             <Link to="/">Log in</Link>
              <button type="submit" variant="outlined">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;