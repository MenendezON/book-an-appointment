import React from 'react';
import { useSelector } from 'react-redux';
import {
  useParams, Link
} from 'react-router-dom';
import Navigation from '../components/Navigation';


const Details = () => {
  const { content } = useSelector((store) => store.motorbikes);
  const { id } = useParams(); // Assuming the parameter you're interested in is named 'id'

  // Filter the array based on the id parameter
  const mbk = content.filter(item => item.id === parseInt(id));

  return (
    <>
    <Navigation />
    <section>
    {mbk.length === 0 ? (
      <p>No motorbike found with the specified ID</p>
      ) : (
        <>
        <div className='leftPart'>
          <img src={mbk[0].image} alt='' />
          <div className='navBack'>
            <Link to={`/`} key={mbk[0].id} className="btn active">&lt;</Link>
          </div>
        </div>
        <div className='rightPart'>
          <h2>{mbk[0].name} {mbk[0].model}</h2>
          <p>*The tax fee is about 15%</p>
          <table>
            <tr><td>Price</td><td>$ {mbk[0].price} USD</td></tr>
            <tr><td>Tax fee</td><td>$ {mbk[0].price * 0.15} USD</td></tr>
            <tr><td>Total payment</td><td>$ {mbk[0].price+(mbk[0].price * 0.15)} USD</td></tr>
          </table>

          <Link to={`./reservations/new`} key={mbk.id} className="btn-lg active">Reserve</Link>
        </div>
        </>
        )}
    </section>
    </>
  );
};

export default Details;

{/* <h1>Filtered Motorbike Details</h1>
      {filteredArray.length === 0 ? (
        <p>No motorbike found with the specified ID</p>
      ) : (
        <div>
          <p>Price: {filteredArray[0].price}</p>
          <p>Image: {filteredArray[0].image}</p>
          <p>Description: {filteredArray[0].description}</p>
          <Link to={`./reservation/new`} key={filteredArray[0].id} className="card">Reserve</Link>
        </div>
      )} */}