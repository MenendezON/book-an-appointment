import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ReservationForm = () => {
 const [date, setDate] = useState(new Date());
 const [city, setCity] = useState('');
 const [motorbike, setMotorbike] = useState(''); // Add this line

 const handleSubmit = (event) => {
 event.preventDefault();
 // Make a POST request to the Rails API to create the reservation
 };

 return (
 <form onSubmit={handleSubmit}>
   <label>
     Date:
     <DatePicker selected={date} onChange={(date) => setDate(date)} />
   </label>
   <label>
     City:
     <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
   </label>
   <label>
     Motorbike:
     <input type="text" value={motorbike} onChange={(event) => setMotorbike(event.target.value)} /> // Add this line
   </label>
   <input type="submit" value="Reserve" />
 </form>
 );
};

export default ReservationForm;
