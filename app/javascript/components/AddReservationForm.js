import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

  const AddReservationForm = ({ onAddReservation, defaultMotorbikeId }) => {
    const [formData, setFormData] = useState({
      date: '',
      city: '',
      motorbike_id: defaultMotorbikeId || '', 
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
        motorbike_id: '',
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
            <label htmlFor="date">
              Date:
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>
            {formErrors.date && <p className="error">{formErrors.date}</p>}
          </div>
          <div>
            <label htmlFor="city">
              City:
              <select htmlFor="city" name="city" onChange={handleChange} defaultValue="placeholder" required>
                <option value="placeholder" disabled>Chose from the list.</option>
                {cities.map((city) => (
                  <option key={city} value={city.name}>
                    {city.country}
                    {' '}
                    -
                    {' '}
                    {city.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
        <label htmlFor="motorbike">
          Motorbike:
          <select
            id="motorbike"
            name="motorbike_id"
            onChange={handleChange}
            defaultValue={defaultMotorbikeId || "placeholder"} 
            required
          >
            <option value="placeholder" disabled>
              Choose from the list.
            </option>
            {content.map((mtb) => (
              <option key={mtb.id} value={mtb.id}>
                {mtb.name} - {mtb.model}
              </option>
            ))}
          </select>
        </label>
      </div>
          <button type="submit" className="btn-lg active">Reserve &gt;&gt;</button>
        </form>
      </div>
    </>
  );
};

AddReservationForm.propTypes = {
  onAddReservation: PropTypes.func.isRequired,
  defaultMotorbikeId: PropTypes.string,
};

AddReservationForm.defaultProps = {
  defaultMotorbikeId: 0,
};

export default AddReservationForm;
