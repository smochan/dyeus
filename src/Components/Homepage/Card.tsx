import React, { useState } from 'react';
import { CardComponent } from './types';
import './Card.scss';

const Card: React.FunctionComponent<CardComponent> = (card) => {
  const {
    setInitialPrice,
    setActualPrice,
    months,
    tubes,
    actualPrice,
    price,
    selected,
    setSelected,
    popular,
    best,
    saved,
  } = card;
  const [Selected, SetSelected] = useState(selected);
  const [Popular, setPopular] = useState(popular);
  const [Best, setBest] = useState(best);

  return (
    <div className="cardBlock">
      <div
        className={`card ${selected}`}
        onClick={() => {
          if (selected === true) return;
          selected ? setSelected(Selected) : setSelected(!Selected);
          setActualPrice(actualPrice);
          setInitialPrice(price);
        }}
      >
        <div>
          {Popular && (
            <div className="popular">
              <span>&#9733; MOST POPULAR &#9733;</span>
            </div>
          )}
          <h2 className="title">
            {months} Months Pack ({tubes} tubes)
          </h2>
          <p className={`saving ${selected}`}>Savings: ₹{price - actualPrice}</p>
          <div className="savings">
            <p className="saved">{saved}% Saved</p>
            {Best && <p className="best">Best Results</p>}
          </div>
        </div>
        <div className="prices">
          <p className="price">₹{actualPrice}</p>
          <p className={`actualPrice ${Selected}`}>₹{price}</p>
        </div>
      </div>
      {selected ? <h1>&#10003;</h1> : <h1 className="hide">&#10003;</h1>}
    </div>
  );
};

export default Card;
