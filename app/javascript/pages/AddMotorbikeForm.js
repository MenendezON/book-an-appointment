import React, { useState } from 'react';

const AddMotorbikeForm = ({ onAddMotorbike }) => {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    image: '',
    price: '',
    description: '',
  });

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

    // form validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.model.trim()) {
      errors.model = 'Model is required';
    }
   

    if (Object.keys(errors).length === 0) {
      onAddMotorbike(formData);
      setFormData({
        name: '',
        model: '',
        image: '',
        price: '',
        description: '',
      });
    } else {
      // Set form errors
      setFormErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}
      </div>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
        />
        {formErrors.model && <p className="error">{formErrors.model}</p>}
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Motorbike</button>
    </form>
  );
};

export default AddMotorbikeForm;
