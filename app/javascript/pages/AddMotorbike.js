import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux'; 
import { addMotorbike } from '../redux/motorbikes/motorbikeSlice';  
import { useNavigate } from 'react-router-dom';
import AddMotorbikeForm from '../components/AddMotorbikeForm';
import Navigation from '../components/Navigation';

const AddMotorbike = () => {
  const dispatch = useDispatch(); 
  const history = useNavigate();

  const handleAddMotorbike = (motorbikeData) => {
    dispatch(addMotorbike(motorbikeData));  
    axios.post('/api/v1/motorbikes', motorbikeData)
      .then(response => {
        console.log('Motorbike added to the database:', response);
        history.push('/');
      })
      .catch(error => console.error('Error adding motorbike to the database:', error));
  };

  return (
    <>
      <Navigation />
      <section className='add-motorbike'>
        <AddMotorbikeForm onAddMotorbike={handleAddMotorbike} />
      </section>
    </>
  );
};

export default AddMotorbike;
