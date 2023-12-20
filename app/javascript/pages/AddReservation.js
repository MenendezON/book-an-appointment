import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/reservation/reservationSlice';
import AddReservationForm from '../components/AddReservationForm';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';


const AddReservation = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleAddReservation = (reservationData) => {
    dispatch(addReservation(reservationData));

  };

  return (
    <>
      <Navigation />
      <section className="add-reservation">
      <AddReservationForm onAddReservation={handleAddReservation} defaultMotorbikeId={id} />
      </section>
    </>
  );
};

export default AddReservation;
