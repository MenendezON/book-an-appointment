import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMotorbikes } from '../redux/motorbikes/motorbikeSlice';

import Home from '../pages/HomePage.js';
import Details from '../pages/DetailsPage.js';
// import MyReservations from '../pages/MyReservationsPage.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMotorbikes());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/motorbikes/:id" element={<Details />} />
    </Routes>
  );
}

export default App;