// MotorbikeList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMotorbikes, deleteMotorbike } from '../redux/motorbikes/motorbikeSlice';
import Navigation from './Navigation';

const MotorbikeList = () => {
  const dispatch = useDispatch();
  const motorbikes = useSelector((state) => state.motorbikes.content);

  useEffect(() => {
    dispatch(getMotorbikes());
  }, [dispatch]);

  const handleDelete = (motorbikeId) => {
    // Dispatch the deleteMotorbike action with the motorbikeId
    dispatch(deleteMotorbike(motorbikeId));
  };

  return (
    <>
      <Navigation />
    <div>
      <h2>Delete Motorbikes</h2>
      <ul className="motos">
        {motorbikes.map((motorbike) => (
          <li key={motorbike.id} className='item'>
            {motorbike.model}{} {motorbike.name}{' '}
            <button onClick={() => handleDelete(motorbike.id)} className='deletebtn'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default MotorbikeList;
