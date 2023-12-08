import React from 'react'
import { useSelector } from 'react-redux';
import {
  Link,
} from 'react-router-dom';

const Home = () => {
  const { content, isLoading, error } = useSelector((store) => store.motorbikes);
  
  if (isLoading) {
    return (
      <h1>Loading</h1>
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
        <section className="cards">
          {content.map((stat) => (
            <Link to={`./motorbikes/${stat.id}`} key={stat.id} className="card">
              <div className="avatar">
                <img src={stat.image} alt="" />
              </div>
              <div className="desc">
                <p>{stat.description}</p>
              </div>
            </Link>
          ))}
        </section>
      </>
    );
  }
};

export default Home;