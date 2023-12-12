import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import Navigation from '../components/Navigation';

const Home = () => {
  const { content, isLoading, error } = useSelector((store) => store.motorbikes);
  const [displayedItems, setDisplayedItems] = useState(3);

  const handleShowMore = () => {
    setDisplayedItems(content.length);
  };

  const handleShowLess = () => {
    setDisplayedItems(3);
  };

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
        <div className="container">
          <Navigation />
          <section>
            <div className="left_nav">
              {displayedItems > 3 ? (
                <div className="btn active" onClick={handleShowLess}>&lt;</div>
              ) : (
                <div className="btn inactive">&lt;</div>
              )}
            </div>
            <div className="cards">
              <div className="top_header">
                <h2>Latest models</h2>
                <p>Please select a Motorbike Model</p>
                <div className="dashed-line">&nbsp;</div>
              </div>
              <div className="bottom_content">
                {content.slice(displayedItems - 3, displayedItems).map((stat) => (
                  <Link to={`./motorbikes/${stat.id}`} key={stat.id} className="card">
                    <div className="avatar">
                      <img src={stat.image} alt="" />
                    </div>
                    <div>
                      <p>
                        {stat.name}
                        {' '}
                        {stat.model}
                      </p>
                    </div>
                    <div className="dashed-line">&nbsp;</div>
                    <div className="desc">
                      <p>
                        {stat.name}
                        {' '}
                        {stat.model}
                        {' '}
                        is our heritage model and boots the classical look with all the modern goods.
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="right_nav">
              {content.length > 3 && displayedItems < content.length ? (
                <div className="btn active" onClick={handleShowMore}>&gt;</div>
              ) : (
                <div className="btn inactive">&gt;</div>
              )}
            </div>
          </section>
        </div>
      </>
    );
  }
};

export default Home;
