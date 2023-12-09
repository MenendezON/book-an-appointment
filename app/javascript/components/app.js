// app/javascript/components/app.js
import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; // Add this import statement
import { getMotorbikes } from '../redux/motorbikes/motorbikeSlice';
import Home from '../pages/HomePage';
import Details from '../pages/DetailsPage';
import LoginPage from '../pages/LoginPage'; // Import your LoginPage component

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.userAuth.isAuthenticated);
  // Use the actual authentication state

  useEffect(() => { // Use useEffect here
    dispatch(getMotorbikes());
  }, [dispatch]);

  return (
    <Routes>
      {/* Redirect to login if not authenticated */}
      {!isAuthenticated ? <Route path="/" element={<Navigate to="/login" />} /> : null}

      {/* Routes for authenticated users */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/motorbikes/:id" element={<Details />} />
    </Routes>
  );
};

export default App;
