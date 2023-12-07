import React from 'react';
import { useSelector } from 'react-redux';
import {
  useParams, Link,
} from 'react-router-dom';

const Details = () => {
  const { content } = useSelector((store) => store.motorbikes);

  console.log(content)

  const filter = useParams();
  console.log(filter);

  return (
    <>
      {content.length > 0 && filter !== 'All' && content.filter((stat) => stat.id === filter.id).map((stat) => (
        <section key={stat.id}>
            <div className="avatar">
              <img src={stat.image} alt="" />
            </div>
            <h2>{stat.name}</h2>
            <div className="desc">
              <h2>
                $
                {stat.price}
              </h2>
              <p>{stat.description}</p>
            </div>
      </section>
      ))}
    </>
  );
};

export default Details;