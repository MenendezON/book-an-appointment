import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";

const ReservationForm = () => {
 const [date, setDate] = useState(new Date());
 const [city, setCity] = useState('Amsterdam');
 const [motorbike, setMotorbike] = useState(null);

 const motorbikes = [
  { value: 'motorbike1', label: 'Motorbike 1' },
  { value: 'motorbike2', label: 'Motorbike 2' },
 ];

 const handleSubmit = (event) => {
 event.preventDefault();
 };

 return (
 <form onSubmit={handleSubmit}>
  <label>
    Date:
    <DatePicker selected={date} onChange={(date) => setDate(date)} />
  </label>
  <label>
    City:
    <select value={city} onChange={(event) => setCity(event.target.value)}>
      <option value="Amsterdam">Amsterdam</option>
    </select>
  </label>
  <label>
    Motorbike:
    <Select 
      value={motorbike} 
      onChange={setMotorbike} 
      options={motorbikes} 
    /> // Add this line
  </label>
  <input type="submit" value="Reserve" />
 </form>
 );
};

export default ReservationForm;
