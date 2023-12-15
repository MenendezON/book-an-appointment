 import * as React from 'react';
 import { Routes, Route, Navigate } from 'react-router-dom';
 import { useDispatch, useSelector } from 'react-redux';
 import { useEffect } from 'react';
 import { getMotorbikes } from '../redux/motorbikes/motorbikeSlice';
 import { getReservations } from '../redux/reservation/reservationSlice';
 
 
 import Home from '../pages/HomePage';
 import Details from '../pages/DetailsPage';
 import Reservation from '../pages/ReservationPage';
 import ReservationForm from '../components/ReservationForm';
 import LoginPage from '../pages/LoginPage';
 import AddMotorbike from '../pages/AddMotorbike';
 import '../assets/css/style.css';
 
 const App = () => {
   const dispatch = useDispatch();
   const isAuthenticated = useSelector((state) => state.userAuth.isAuthenticated);
 
   useEffect(() => {
     dispatch(getMotorbikes());
     dispatch(getReservations());
   }, [dispatch]);
 
   return (
     <Routes>
       <Route path="/" exact element={<Home /> } />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/motorbikes/new" element={<AddMotorbike />} />
       <Route path="/motorbikes/:id" element={<Details />} />
       <Route path="/reservations" element={<Reservation />} />
       <Route path="/reservations/new" element={<ReservationForm />} />
     </Routes>
   );
 };
 
 export default App;
