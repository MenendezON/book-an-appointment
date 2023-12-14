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
    console.motorbikeData;
    axios.post('/api/v1/motorbikes', motorbikeData)
      .then(response => console.log('Motorbike added to the database:', response))
      .catch(error => console.error('Error adding motorbike to the database:', error));
  };

  return (
    <>
      <Navigation />
      <div>
        <h2>Add a New Motorbike</h2>
        <AddMotorbikeForm onAddMotorbike={handleAddMotorbike} />
      </div>
    </>
  );
};

export default AddMotorbike;
