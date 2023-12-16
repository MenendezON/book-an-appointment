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
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

    console.log('Reservation data:', reservationData);
    console.log('My token:', csrfToken);

    axios.post('/api/v1/reservations', reservationData, {
      headers: {
        'CSRF-Token': csrfToken,
      },
    })
      .then(resp => {
        console.log('Reservation added to the database:', resp);
      })
      .catch(error => console.error('Error adding reservation to the database:', error));
  };

  return (
    <>
      <Navigation />
      <section className='add-reservation'>
        <AddReservationForm onAddReservation={handleAddReservation} />
      </section>
    </>
  );
};

export default AddReservation;
