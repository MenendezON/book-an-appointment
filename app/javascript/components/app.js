import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMotorbikes } from '../redux/motorbikes/motorbikeSlice';

import Home from '../pages/HomePage';
import Details from '../pages/DetailsPage';
import LoginPage from '../pages/LoginPage';

import '../assets/css/style.css'

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.userAuth.isAuthenticated);

  useEffect(() => {
    dispatch(getMotorbikes());
  }, [dispatch]);

  return (
    <Routes>

      <Route path="/" element={<Home /> } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/motorbikes/:id" element={<Details />} />

    </Routes>
  );
};

export default App;
