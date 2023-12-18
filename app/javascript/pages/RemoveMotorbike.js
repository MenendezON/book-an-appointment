import { useEffect, useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import {
  deleteMotorbike,
  getMotorbikes
} from '../redux/motorbikes/motorbikeSlice';

const RemoveMotorbikePage = () => {
  const { content, isLoading, error } = useSelector((store) => store.motorbikes);
  
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fail, setFail] = useState(null);

  useEffect(() => {
    dispatch(getMotorbikes());
  }, [dispatch, isSuccess]);

  const handleDelete = async (id) => {
    const sendData = { id };
  
    try {
      const actionResult = await dispatch(deleteMotorbike(sendData));
  
      if (deleteMotorbike.fulfilled.match(actionResult)) {
        setIsSuccess(prevIsSuccess => !prevIsSuccess); // Use the callback form
        setSuccess(actionResult.payload.success);
        dispatch(getMotorbikes());
      } else if (deleteMotorbike.rejected.match(actionResult)) {
        setFail(actionResult.payload.error);
      }
    } catch (error) {
      console.error('Error deleting motorbike:', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(null);
      setFail(null);
    }, 4000);

    return () => clearTimeout(timer);
  }, [success, fail]);

  if (isLoading) {
    return <div>Loading......</div>;
  }
  if (error) {
    return (
      <p>
        Something went wrong!
        <br />
        {error}
      </p>
    );
  }

  return (
    <>
      <Navigation />
      <section>
        {isLoading && <p>Deleting Motorbike....</p>}
        {success && <p className="text-green-500">{success}</p>}
        {fail && <p className="text-red-500">{fail}</p>}
        <div className='delete-motorbike'>
        <h2 className="f">Motorbikes</h2>
          {content.map((space) => (
            <div key={space.id} className="box">
              <div className="details">
                <p className="">{space.name} {space.model}</p>
                <button
                  className=""
                  type="button"
                  onClick={() => {
                    handleDelete(space.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RemoveMotorbikePage;