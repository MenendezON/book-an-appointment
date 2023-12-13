import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Home = () => {
  const { content, isLoading, error } = useSelector((store) => store.motorbikes);
  const cardsContainerRef = useRef();

  const handleScroll = (direction) => {
    const container = cardsContainerRef.current;
    const containerWidth = container.offsetWidth;
    const scrollAmount = containerWidth / 3; // Adjust the scroll amount as needed

    if (direction === 'right') {
      container.scrollLeft += scrollAmount;
    } else {
      container.scrollLeft -= scrollAmount;
    }
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return (
      <h1>
        Something went wrong!
        {error}
      </h1>
    );
  }
  if (content) {
    return (
      <>
        <div className="container">
          <Navigation />
          <section>
            <div className="left_nav" onClick={() => handleScroll('left')}>
              <div className="btn active">&lt;</div>
            </div>
            <div className="cards-container" ref={cardsContainerRef}>
              <div className="top_header">
                <h2>Latest models</h2>
                <p>Please select a Motorbike Model</p>
                <div className="dashed-line">&nbsp;</div>
              </div>
              <div className="bottom_content">
                {content.map((stat) => (
                  <Link to={`./motorbikes/${stat.id}`} key={stat.id} className="card">
                    <div className="avatar">
                      <img src={stat.image} alt="" />
                    </div>
                    <div>
                      <p>
                        {stat.name} {stat.model}
                      </p>
                    </div>
                    <div className="desc">
                      <p>
                        {stat.name} {stat.model} is our heritage model and boots the classical
                        look with all the modern goods.
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="right_nav" onClick={() => handleScroll('right')}>
              <div className="btn active">&gt;</div>
            </div>
          </section>
        </div>
      </>
    );
  }
};

export default Home;
