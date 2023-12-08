// app/javascript/components/MyReservations.js
import React, { useState, useEffect } from 'react';

const MyReservations = () => {
 const [reservations, setReservations] = useState([]);

 useEffect(() => {
   fetch('/my_reservations')
     .then(response => response.json())
     .then(data => setReservations(data));
 }, []);

 return (
   <div>
     <h1>My Reservations</h1>
     {reservations.map(reservation => (
       <div key={reservation.id}>
         <h2>{reservation.item_name}</h2>
         <p>Date: {reservation.date}</p>
         <p>City: {reservation.city}</p>
       </div>
     ))}
   </div>
 );
};

export default MyReservations;
