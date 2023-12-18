import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import { getMotorbikes } from '../redux/motorbikes/motorbikeSlice'; 
import Navigation from '../components/Navigation';
import loading from '../assets/images/loading.gif';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import instagram from '../assets/images/instagram.png';

const Home = () => {
  const dispatch = useDispatch();
  const { content, isLoading, error } = useSelector((store) => store.motorbikes);
  const [displayedItems, setDisplayedItems] = useState(3);

  useEffect(() => {
    dispatch(getMotorbikes());
  }, [dispatch]);

  const handleShowMore = () => {
    setDisplayedItems(content.length);
  };

  const handleShowLess = () => {
    setDisplayedItems(3);
  };

  if (isLoading) {
    return (
      <div className='loadingPage'>
        <img src={loading} alt="" />
      </div>
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
      <Navigation />
        <section>
        <div className='left_nav'>
        {displayedItems > 3 ? (
          <div class="btn active" onClick={handleShowLess}>&lt;</div>
        ) : (
          <div class="btn inactive" >&lt;</div>
        )}
        </div>
          <div className="cards">
            <div className='top_header'>
              <h2>Latest models</h2>
              <p>Please select a Motorbike Model</p>
              <div className='dashed-line'>&nbsp;</div>
            </div>
            <div className='bottom_content'>
              {content.slice(displayedItems-3, displayedItems).map((stat) => (
              <Link to={`./motorbikes/${stat.id}`} key={stat.id} className="card">
                <div className="avatar">
                  <img src={stat.image} alt="" />
                </div>
                <div>
                  <p>{stat.name} {stat.model}</p>
                </div>
                <div className='dashed-line'>&nbsp;</div>
                <div className="desc">
                  <p>{stat.name} {stat.model} is our heritage model and boots the classical look with all the modern goods.</p>
                </div>
                <div className="media_handle">
                        <img src={twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                      </div>
              </Link>
            ))}
            </div>
        </div>
        <div className='right_nav'>
        {content.length > 3 && displayedItems < content.length ?(
          <div class="btn active" onClick={handleShowMore}>&gt;</div>
          ) : (
            <div class="btn inactive" >&gt;</div>
          )}
          </div>
        </section>
      </>
    );
  }
};

export default Home;