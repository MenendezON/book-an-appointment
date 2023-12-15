import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import Navigation from '../components/Navigation';
import loading from '../assets/images/loading.gif';

const Reservation = () => {
  const { content, isLoading, error } = useSelector((store) => store.reservations);
  
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
              <tr>
                <th>Date</th>
                <th>City</th>
                <th>Brand</th>
                <th>Model</th>
                <th>&nbsp;</th>
              </tr>
              {content.map((resv) => (
              <tr>
                <td>{resv.date}</td>
                <td>{resv.city}</td>
                <td>{resv.motorbike.name}</td>
                <td>{resv.motorbike.model}</td>
                <td><Link to={`/motorbikes/${resv.motorbike.id}`} key={resv.motorbike.id}>View</Link></td>
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