import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import Navigation from '../components/Navigation';

import "react-datepicker/dist/react-datepicker.css";

const ReservationForm = () => {
  const cities = [
    { country: 'Senegal', name: 'Dakar' },
    { country: 'Senegal', name: 'Thiès' },
    { country: 'Senegal', name: 'Kaolack' },
    { country: 'Senegal', name: 'Saint-Louis' },
    { country: 'Senegal', name: 'Ziguinchor' },
    { country: 'Ghana', name: 'Accra' },
    { country: 'Ghana', name: 'Kumasi' },
    { country: 'Ghana', name: 'Tamale' },
    { country: 'Ghana', name: 'Sekondi-Takoradi' },
    { country: 'Ghana', name: 'Sunyani' },
    { country: 'Kenya', name: 'Nairobi' },
    { country: 'Kenya', name: 'Mombasa' },
    { country: 'Kenya', name: 'Kisumu' },
    { country: 'Kenya', name: 'Eldoret' },
    { country: 'Kenya', name: 'Nakuru' },
    { country: 'Egypt', name: 'Cairo' },
    { country: 'Egypt', name: 'Alexandria' },
    { country: 'Egypt', name: 'Giza' },
    { country: 'Egypt', name: 'Shubra El-Kheima' },
    { country: 'Egypt', name: 'Port Said' },
  ];
 const [date, setDate] = useState(new Date());
 const [city, setCity] = useState('');
 const { content } = useSelector((store) => store.motorbikes);
 const [motorbike, setMotorbike] = useState(null);


 const handleSubmit = (event) => {
 event.preventDefault();
 };

 return (
  
      <form onSubmit={handleSubmit}>
  <label>
    Date:
    <DatePicker selected={date} onChange={(date) => setDate(date)} 
        dateFormat="yyyy-MM-dd" // Customize date format as needed
      />
  </label>
  <label>
    City:
    <select value={city} onChange={(event) => setCity(event.target.value)}>
      {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.country} - {city.name}
          </option>
        ))}
    </select>
  </label>
  <label>
    Motorbike:
    <select value={motorbike} onChange={(event) => setMotorbike(event.target.value)}>
    {content.map((mtb, index) => (
      <option key={index} value={mtb.id}>
      {mtb.name} - {mtb.model}
    </option>
            ))}
    </select>
  </label>
  <input type="submit" value="Reserve" />
      </form>
 );
};

export default ReservationForm;
