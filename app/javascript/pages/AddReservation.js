import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/reservation/reservationSlice';
import AddReservationForm from '../components/AddReservationForm';
import Navigation from '../components/Navigation';

const AddReservation = () => {
  const dispatch = useDispatch();

  const handleAddReservation = (reservationData) => {
    dispatch(addReservation(reservationData));

    // axios.post('/api/v1/reservations', reservationData, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${JSON.parse(localStorage.getItem('acess-token'))?.token}`,
    //   },
    // });
  };

  return (
    <>
      <Navigation />
      <section className="add-reservation">
        <AddReservationForm onAddReservation={handleAddReservation} />
      </section>
    </>
  );
};

export default AddReservation;
