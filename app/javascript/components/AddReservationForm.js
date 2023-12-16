import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AddReservationForm = ({ onAddReservation }) => {
  const [formData, setFormData] = useState({
    date: '',
    city: '',
    motorbike_id: '',
  });

  const { content } = useSelector((store) => store.motorbikes);

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

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (Object.keys(errors).length === 0) {
      onAddReservation(formData);
      setFormData({
        date: '',
        city: '',
        motorbike: '',
      });
    } else {
      // Set form errors
      setFormErrors(errors);
    }
  };

  return (
    <>
      <div>
        <h2>Make a reservation</h2>
        <form onSubmit={handleSubmit}>
          <div>
          <label>Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          {formErrors.date && <p className="error">{formErrors.date}</p>}
          </div>
          <div>
          <label>City:</label>
            <select name="city" value={formData.city} onChange={handleChange}>
              {cities.map((city, index) => (
                <option key={index} value={city.name}>
                  {city.country} - {city.name}
                </option>
              ))}
            </select>
          </div>
          <div>
          <label>Motorbike:</label>
            <select name='motorbike_id' value={formData.motorbike_id} onChange={handleChange}>
              {content.map((mtb, index) => (
                <option key={index} value={mtb.id}>
                  {mtb.name} - {mtb.model}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className='btn-lg active'>Reserve &gt;&gt;</button>
        </form>
      </div>
    </>
  );
};

export default AddReservationForm;
