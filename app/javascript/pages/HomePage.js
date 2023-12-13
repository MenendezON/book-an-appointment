import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import instagram from '../assets/images/instagram.png';

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
          <div className="session">
            <div className="top_header">
              <h2>LATEST MODELS</h2>
              <p>Please select a Motorbike Model</p>
            </div>
            <section>
              <div className="left_nav" onClick={() => handleScroll('left')}>
                <div className="btn active">&lt;</div>
              </div>
              <div className="cards-container" ref={cardsContainerRef}>

                <div className="bottom_content">
                  {content.map((stat) => (
                    <Link to={`./motorbikes/${stat.id}`} key={stat.id} className="card">
                      <div className="avatar">
                        <img src={stat.image} alt="" />
                      </div>
                      <div>
                        <p className="motor_title">
                          {stat.name}
                          {' '}
                          {stat.model}
                        </p>
                      </div>
                      <div className="desc">
                        <p>
                          {stat.name}
                          {' '}
                          {stat.model}
                          {' '}
                          is our heritage model and boots the classical
                          look with all the modern goods.
                        </p>
                      </div>
                      <span className="media_handle">
                        <img src={twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="right_nav" onClick={() => handleScroll('right')}>
                <div className="btn active">&gt;</div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
};

export default Home;
