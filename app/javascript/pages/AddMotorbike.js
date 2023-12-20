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
