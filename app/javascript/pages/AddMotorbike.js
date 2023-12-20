import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addMotorbike } from '../redux/motorbikes/motorbikeSlice';
import AddMotorbikeForm from '../components/AddMotorbikeForm';
import Navigation from '../components/Navigation';

const AddMotorbike = () => {
  const dispatch = useDispatch();

  const handleAddMotorbike = (motorbikeData) => {
    dispatch(addMotorbike(motorbikeData));
    /// axios.post('/api/v1/motorbikes', motorbikeData);
  };

  return (
    <>
      <Navigation />
      <section className="add-motorbike">
        <AddMotorbikeForm onAddMotorbike={handleAddMotorbike} />
      </section>
    </>
  );
};

export default AddMotorbike;
