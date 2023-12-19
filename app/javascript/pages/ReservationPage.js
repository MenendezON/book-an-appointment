import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import Navigation from '../components/Navigation';
import { getReservations } from '../redux/reservation/reservationSlice'
import loading from '../assets/images/loading.gif';

const Reservation = () => {
  const dispatch = useDispatch();
  const { content, isLoading, error } = useSelector((store) => store.reservations);

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);
  
  if (isLoading) {
    return (
      <div className='loadingPage'>
        <img src={loading} alt="" />
      </div>
    );
  }
  if (error) {
    return (
      <h1>
        Something went wrong!
        { error }
      </h1>
    );
  }
  if (content) {
    return (
      <>
      <Navigation />
        <section>
          <div className='reservation-page'>
            <table>
            <caption><h2>List of my reservations</h2></caption>
              <tr>
                <th>Date</th>
                <th>City</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Actions</th>
              </tr>
              {content.map((resv) => (
              <tr>
                <td>{resv.date}</td>
                <td>{resv.city}</td>
                <td>{resv.motorbike.name}</td>
                <td>{resv.motorbike.model}</td>
                {/* <td><Link to={`/motorbikes/${resv.motorbike.id}`} key={resv.motorbike.id}>View</Link></td> */}
              </tr>
            ))}
              </table>
          </div>
        </section>
      </>
    );
  }
};

export default Reservation;