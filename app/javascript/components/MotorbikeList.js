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
    dispatch(deleteMotorbike(motorbikeId));
  };

  return (
    <>
      <Navigation />
      <section className="delete-motorbike">
        <div>
          <h2>Delete Motorbikes</h2>
          <ul className="motos">
            {motorbikes.map((motorbike) => (
              <div key={motorbike.id} className="box">
                <div>
                  <img src={motorbike.image} alt={motorbike.name} />
                </div>
                <div>
                  <h3>
                    {motorbike.name}
                    {' '}
                    {motorbike.model}
                  </h3>
                  <button type="button" onClick={() => handleDelete(motorbike.id)} className="btn">Delete</button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </section>

    </>
  );
};

export default MotorbikeList;
