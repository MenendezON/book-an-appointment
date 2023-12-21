import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import { getMotorbikes } from '../redux/motorbikes/motorbikeSlice';
import Navigation from '../components/Navigation';

const Home = () => {
  const dispatch = useDispatch();
  const { content, isLoading, error } = useSelector((store) => store.motorbikes);
  const [displayedItems, setDisplayedItems] = useState(3);

  useEffect(() => {
    dispatch(getMotorbikes());
  }, [dispatch]);

  const handleShowMore = () => {
    if (displayedItems > content.length) {
      setDisplayedItems(content.length);
    } else {
      setDisplayedItems(displayedItems + 3);
    }
  };

  const handleShowLess = () => {
    setDisplayedItems(3);
  };

  if (isLoading) {
    return (
      <div className="loadingPage">
        <img src="https://www.sellanybike.com/front-assets/images/333.gif" alt="" />
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
        <section className="model-cards">
          <div className="left_nav">
            {displayedItems > 3 ? (
              <button type="button" className="btn active" onClick={handleShowLess}>&lt;</button>
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
                  <div className="media_handle">
                    <img src="https://cdn-icons-png.flaticon.com/256/20/20837.png" alt="" />
                    <img src="https://freeiconshop.com/wp-content/uploads/edd/twitter-solid.png" alt="" />
                    <img src="https://static-00.iconduck.com/assets.00/logo-github-icon-256x256-6fb8e1xp.png" alt="" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="right_nav">
            {content.length > 3 && displayedItems < content.length ? (
              <button type="button" className="btn active" onClick={handleShowMore}>&gt;</button>
            ) : (
              <div className="btn inactive">&gt;</div>
            )}
          </div>
        </section>
      </>
    );
  }
  return undefined;
};

export default Home;
