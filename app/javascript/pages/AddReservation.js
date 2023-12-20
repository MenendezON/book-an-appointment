import React from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/reservation/reservationSlice';
import AddReservationForm from '../components/AddReservationForm';
import Navigation from '../components/Navigation';

const AddReservation = () => {
  const dispatch = useDispatch();

  const handleAddReservation = (reservationData) => {
    dispatch(addReservation(reservationData));
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
