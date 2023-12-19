import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMotorbikes, deleteMotorbike } from '../redux/motorbikes/motorbikeSlice';
import Navigation from './Navigation';

import '../assets/css/MotorbikeList.css';

const MotorbikeList = () => {
  const dispatch = useDispatch();
  const motorbikes = useSelector((state) => state.motorbikes.content);

  useEffect(() => {
    dispatch(getMotorbikes());
  }, [dispatch]);

  const handleDelete = (motorbikeId) => {
    dispatch(deleteMotorbike(motorbikeId));
  };

  return (
    <>
      <Navigation />
      <div className="motorbike-list-container">
        <h2>Delete Motorbikes</h2>
        <ul className="motorbikes">
          {motorbikes.map((motorbike) => (
            <li key={motorbike.id} className="motorbike-item">
              <span className="motorbike-info">
                {motorbike.model} {motorbike.name}
              </span>
              <button onClick={() => handleDelete(motorbike.id)} className="delete-btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MotorbikeList;
