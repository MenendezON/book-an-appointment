 import * as React from 'react'; 
 import { Routes, Route, Navigate } from 'react-router-dom';
 import { useDispatch, useSelector } from 'react-redux';
 import { useEffect } from 'react';
 import { getMotorbikes } from '../redux/motorbikes/motorbikeSlice';
 import { getReservations } from '../redux/reservation/reservationSlice';
 
 import Home from '../pages/HomePage';
 import Details from '../pages/DetailsPage';
 import Reservation from '../pages/ReservationPage';
 import AddReservation from '../pages/AddReservation';
 import AddMotorbike from '../pages/AddMotorbike';
 import Signup from '../pages/Signup'; // Assuming you have a Login component
 import Login from '../pages/LoginPage'; // Assuming you have a Login component
 import '../assets/css/style.css';
 
 const App = () => {
   const dispatch = useDispatch();
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Update this based on your auth state
 
   useEffect(() => {
     dispatch(getMotorbikes());
     dispatch(getReservations());
   }, [dispatch]);
 
   return (
     <Routes>
       {isAuthenticated ? (
         <>
           <Route path="/" element={<Home />} />
           <Route path="/motorbikes/new" element={<AddMotorbike />} />
           <Route path="/motorbikes/:id" element={<Details />} />
           <Route path="/reservations" element={<Reservation />} />
           <Route path="/reservations/new" element={<AddReservation />} />
           <Route path="/reservations/list" element={<AddReservation />} />
         </>
       ) : (
         <Route path="/" element={<Navigate to="/login" />} />
       )}
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
     </Routes>
   );
 };
 
 export default App;
 