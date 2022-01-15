import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import TrippleDash from '../../icons/svg/trippleDash.svg';
import Cart from '../../icons/svg/cart.svg';
import Card from './Card';
import './styles.scss';

const Homepage = () => {
  const [initialPrice, setInitialPrice] = useState(795);
  const [actualPrice, setActualPrice] = useState(595);
  const [selected, setSelected] = useState(false);
  return (
    <div className="main">
      <div className="header">
        <img src={TrippleDash} alt="Open side bar" />
        <img src={Cart} alt="cart" />
      </div>
      <hr className="line" />
      <div className="poster">
        <div className="rect"></div>
        <div className="rectShadow"></div>

        <img src="/images/bottle1.png" alt="bottle1" className="img img--bottle1" />
        <img src="/images/bottle2.png" alt="bottle2" className="img img--bottle2" />
        <img src="/images/bottle3.png" alt="bottle3" className="img img--bottle3" />
      </div>
      <div className="details">
        <h1 className="title">Everyday rinse and reload</h1>
        <p className="description">
          Achieve your dream skin goal with this complete package of skincare produts that will
          rejuvenate your day.{' '}
        </p>
        <div className="reviews">
          <div className="rating">
            <StarRatingComponent
              name="rate2"
              editing={false}
              starColor={'#fff'}
              starCount={5}
              value={4.5}
            />
          </div>
          <h3>4</h3>
          <p>Click to read reviews &gt;</p>
        </div>
      </div>
      <div className="price">
        <h1 className="amount actualPrice">₹{actualPrice}</h1>
        <h1 className="amount initialPrice">₹{initialPrice}</h1>
      </div>
      <div className="options">
        <Card
          setInitialPrice={setInitialPrice}
          setActualPrice={setActualPrice}
          months={1}
          tubes={4}
          actualPrice={595}
          price={795}
          selected={selected}
          setSelected={setSelected}
          popular={true}
          best={true}
          saved={38}
        />
        <Card
          setInitialPrice={setInitialPrice}
          setActualPrice={setActualPrice}
          months={3}
          tubes={12}
          actualPrice={899}
          price={999}
          selected={!selected}
          setSelected={setSelected}
          popular={false}
          best={false}
          saved={12}
        />
      </div>
      <button className="btn">
        <img src={Cart} alt="" /> &nbsp;&nbsp; ADD TO CART
      </button>
    </div>
  );
};
export default Homepage;
