import React, { useState } from 'react';

const YourComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    image: '',
    price: 0,
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = sessionStorage.getItem('token'); // Get token from somewhere 
      const response = await fetch('http://127.0.0.1:3000/api/v1/motorbikes', {
        method: 'POST',
        headers: {  
          Accept: 'application/json',
          'Content-Type': 'application/json',
           Authorization: `Bearer ${token}` // Add token to headers
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful response
        console.log('Data inserted successfully');
      } else {
        // Handle error response
        console.error('Failed to insert data');
      }
    } catch (error) {
      // Handle network error
      console.error('Network error', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input type="text" name="name" value='Jaguar' onChange={handleChange} />

      <label>Model: </label>
      <input type="text" name="model" value='X-233' onChange={handleChange} />

      <label>Image: </label>
      <input type="url" name="image" value='https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_838,h_567/https://mgmotorsports.com/wp-content/uploads/2023/02/mike-gardner-riding-motorcycle.png' onChange={handleChange} />

      <label>Description: </label>
      <input type="text" name="description" value='This text represent the description' onChange={handleChange} />

      <label>Price: </label>
      <input type="number" name="price" onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default YourComponent;
